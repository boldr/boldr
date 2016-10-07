import redisClient from '../db/redis';

export default class EventSubscriber {
  constructor(channel) {
    this.client = redisClient;
    this.client.subscribe(channel);
  }

  on(activityName, callback) {
    this.client.on(activityName, callback);
  }
}
