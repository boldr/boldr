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
import server from '../../server';
import { User } from '../models';

const chance = new Chance();

describe('User Model', () => {
  it('should be able to create users', async function() {
    const userData = {
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      location: chance.state({ full: true }),
      bio: chance.sentence(),
      website: chance.url(),
      role: 'user',
      password: chance.word(),
      picture: chance.avatar({ fileExtension: 'jpg' })
    };
    const createdUser = await User.create(userData);
    expect(createdUser).to.have.property('firstName', userData.firstName);
    expect(createdUser).to.have.property('lastName', userData.lastName);
    expect(createdUser).to.have.property('email', userData.email);
    expect(createdUser).to.have.property('location', userData.location);
    expect(createdUser).to.have.property('bio', userData.bio);
    expect(createdUser).to.have.property('role', userData.role);
    expect(createdUser).to.have.property('website', userData.website);
    expect(createdUser).to.have.property('picture', userData.picture);
  });
});
