import {
    expect
} from 'chai';
import Chance from 'chance';
import {
  before,
  beforeEach,
  describe,
  it
} from 'mocha';

import { User } from '../models';

const chance = new Chance();
let user;
const genUser = () => {
  user = User.build({
    provider: 'local',
    firstName: 'Fake',
    lastName: 'User',
    displayName: 'Fake User',
    email: 'test@example.com',
    password: 'password'
  });
  return user;
};
describe('User Model', () => {
  before(() => {
    // Sync and clear users before testing
    return User.sync().then(() => {
      return User.destroy({ where: {} });
    });
  });

  beforeEach(() => {
    genUser();
  });

  afterEach(() => {
    return User.destroy({ where: {} });
  });
  it('should begin with no users', async () => {
    const queryUsers = await User.findAll();
    expect(queryUsers).to.have.length(0);
  });
  it('should be able to create users', async function() {
    const userData = {
      firstName: chance.first(),
      displayName: 'Test User',
      lastName: chance.last(),
      email: chance.email(),
      location: chance.state({ full: true }),
      bio: chance.sentence(),
      website: chance.url(),
      password: chance.word(),
      avatarUrl: chance.avatar({ fileExtension: 'jpg' })
    };
    const createdUser = await User.create(userData);
    expect(createdUser).to.have.property('firstName', userData.firstName);
    expect(createdUser).to.have.property('lastName', userData.lastName);
    expect(createdUser).to.have.property('displayName', userData.displayName);
    expect(createdUser).to.have.property('email', userData.email);
    expect(createdUser).to.have.property('location', userData.location);
    expect(createdUser).to.have.property('bio', userData.bio);
    expect(createdUser).to.have.property('website', userData.website);
    expect(createdUser).to.have.property('avatarUrl', userData.avatarUrl);
  });
});
