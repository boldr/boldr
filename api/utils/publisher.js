import redisClient from '../db/redis';

class EventPublisher {
  constructor(channel) {
    this.client = redisClient;
    this.channel = channel;
  }

  push(activity) {
    const data = {
      id: activity.id,
      type: activity.type,
      data: activity.data,
      created_at: Date.now()
    };
    return this.client.publish(this.channel, JSON.stringify(data));
  }
}

const redisChannel = process.env.REDIS_CHANNEL || 'boldr_realtime';

export default new EventPublisher(redisChannel);
