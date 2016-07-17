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
import Tag from '../models/tag';

const chance = new Chance();

describe('Tag Model', () => {
  it('should be able to create a new tag', async function() {
    const tagData = {
      tagname: chance.word(),
      description: chance.sentence()
    };
    const createdTag = await Tag.create(tagData);
    expect(createdTag).to.have.property('tagname', tagData.tagname);
    expect(createdTag).to.have.property('description', tagData.description);
  });
});
