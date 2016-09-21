import User from '../modules/user/user.model';

async function socketHandler(io) {
  const rooms = {};
  io.on('connection', (socket) => {
    const userSession = socket.request.session;
    const sessionID = socket.request.sessionID;
    let loggedIn = false;
    socket.emit('news', { msg: '\'Hello World!\' from sockethandler' });
    if (userSession.hasOwnProperty('passport') && Object.getOwnPropertyNames(userSession.passport).length > 0) {
      loggedIn = true;
    }
    socket.on('joinRoom', async (id) => {
      if (!rooms.hasOwnProperty(id)) {
        rooms[id] = [];
      }
      if (loggedIn) {
        const user = await User.query().findById({ id: userSession.passport.user });
        if (err || !user) {
          console.log(err);
        }
        socket.room = id;
        socket.join(id);

        rooms[id].push({
          sessionID,
          socketID: socket.id,
          name: user.first_name
        });
        io.to(socket.room).emit('active', uniqueUsers(rooms[id]));
        socket.broadcast.to(socket.room).emit('userJoined', user.first_name);
        console.log(user.first_name + ' joined room: ' + id);
      } else {
        socket.room = id;
        socket.join(id);

        rooms[id].push({
          sessionID,
          socketID: socket.id,
          name: 'Anonymous'
        });
        io.to(socket.room).emit('active', uniqueUsers(rooms[id]));
        socket.broadcast.to(socket.room).emit('userJoined', 'Anonymous');
        console.log('Anonymous joined room: ' + id);
      }
    });


    socket.on('disconnect', () => {
      if (socket.room) {
        const index = rooms[socket.room].map((el) => {
          return el.socketID;
        }).indexOf(socket.id);
        rooms[socket.room].splice(index, 1);
        io.to(socket.room).emit('active', uniqueUsers(rooms[socket.room]));
      }
    });


    socket.on('addedWidget', (widgetData) => {
      socket.broadcast.to(socket.room).emit('newWidget', widgetData);
    });

    socket.on('deleteWidget', (widgetID) => {
      socket.broadcast.to(socket.room).emit('removeWidget', widgetID);
    });

    socket.on('save', () => {
      socket.to(socket.room).emit('save');
    });

    socket.on('reposition', (data) => {
      socket.broadcast.to(socket.room).emit('reposition', data);
    });

    socket.on('typing', (text) => {
      socket.broadcast.to(socket.room).emit('typing', text);
    });

    socket.on('drawing', (drawData) => {
      socket.broadcast.to(socket.room).emit('drawing', drawData);
    });

    socket.on('newevent', (eventdata) => {
      socket.broadcast.to(socket.room).emit('newevent', eventdata);
    });

    socket.on('removeevent', (eventdata) => {
      socket.broadcast.to(socket.room).emit('removeevent', eventdata);
    });

    socket.on('title', (title) => {
      socket.broadcast.to(socket.room).emit('title', title);
    });

    socket.on('changedPrivacy', (data) => {
      socket.broadcast.to(socket.room).emit('changedPrivacy', data);
    });

    socket.on('chat', (message) => {
      socket.broadcast.to(socket.room).emit('chat', message);
    });
  });
}

function uniqueUsers(activeUsers) {
  const userArr = [];
  for (let i = 0; i < activeUsers.length; i++) {
    userArr.push(activeUsers[i].sessionID);
  }
  const uniqueUsers = activeUsers.filter((value, index, self) => {
    // return self.indexOf(value) == index;
    return userArr.indexOf(value.sessionID) === index;
  });
  return uniqueUsers;
}

export default socketHandler;
