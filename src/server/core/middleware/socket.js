import uuid from 'node-uuid';
import { logger } from '../../lib';

const messageTypes = [
  'userJoined',
  'userLeft',
  'joinRequested',
  'usersRequested',
  'userStartedTyping',
  'userStoppedTyping',
  'messageAdded',
  'userRefreshed'
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {});

export function sendChatMessage (io, user, message) {
  return io.sockets.emit(messageTypes.messageAdded, {
    id: uuid.v4(),
    createdAt: Date.now(),
    message,
    user
  })
}

export function onUsersRequested (io, socket, data) {
  const event = messageTypes.usersRequested
  logger.info({ event })
  const sockets = io.sockets.sockets || {}

  // only pull back sockets for joined users
  const users = Object.keys(sockets || {})
    .filter((key) => sockets[ key ].user)
    .map((key) => sockets[ key ].user);

  return socket.emit(event, users)
}

export function onJoinRequested (io, socket, data) {
  const user = { id: uuid.v4(), name: data.name }

  addUser(io, socket, user)
  return sendChatMessage(io)
}

export function addUser (io, socket, user) {
  logger.info({ user }, 'Adding user')

  socket.user = user // middleware adds this for subsequent messages
  socket.request.session.user = user
  socket.request.session.save() // we have to do this explicitly

  socket.emit(messageTypes.joinRequested, user)
  return socket.broadcast.emit(messageTypes.userJoined, user)
}

export function onMessageAdded (io, socket, data) {
  const event = messageTypes.messageAdded
  const user = socket.user

  logger.info({ data, event, user })
  return sendChatMessage(io, user, data.message)
}

export function onTypingStarted (io, socket, data) {
  const event = messageTypes.userStartedTyping
  const user = socket.user

  logger.info({ event, user })
  return socket.broadcast.emit(event, { userId: user.id })
}

export function onTypingStopped (io, socket, data) {
  const event = messageTypes.userStoppedTyping
  const user = socket.user

  logger.info({ event, user })
  return socket.broadcast.emit(event, { userId: user.id })
}

// userId -> timerId, for clearing pending userLeft messages on refresh (which is a quick disconnect / reconnect)
const disconnectedUsers = {}

export function onDisconnect (io, socket) {
  const user = socket.user
  if (!user) {
    return
  }

  // this disconnect might be a refresh, give it a moment to make sure the user isn't coming back
  disconnectedUsers[ user.id ] = setTimeout(() => {
    delete disconnectedUsers[ user.id ]
    logger.info({ event: messageTypes.userLeft, user })
    io.sockets.emit(messageTypes.userLeft, { userId: user.id })
    sendChatMessage(io, 'left')
  }, 2000)
}

export function handleReconnect (io, socket, user) {
  const timeoutId = disconnectedUsers[ user.id ]

  if (timeoutId) {
    clearTimeout(timeoutId)
    logger.info({ user }, 'User refreshed')
    return socket.emit(messageTypes.joinRequested, user)
  }

  addUser(io, socket, user)
}

export function addListenersToSocket (io, socket) {
  const user = socket.user
  if (user) {
    handleReconnect(io, socket, user)
  }

  socket.on(messageTypes.usersRequested, (data) => onUsersRequested(io, socket, data))
  socket.on(messageTypes.joinRequested, (data) => onJoinRequested(io, socket, data))
  socket.on(messageTypes.messageAdded, (data) => onMessageAdded(io, socket, data))
  socket.on(messageTypes.userStartedTyping, (data) => onTypingStarted(io, socket, data))
  socket.on(messageTypes.userStoppedTyping, (data) => onTypingStopped(io, socket, data))
  socket.on('disconnect', () => onDisconnect(io, socket))
}
