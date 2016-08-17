import { expect } from 'chai';
import Chance from 'chance';
import { before, afterEach, describe, it } from 'mocha';

import { Tag } from '../models';

const chance = new Chance();

describe('Tag Model', () => {
  before(() => {
    // Sync and clear users before testing
    return Tag.sync().then(() => {
      return Tag.destroy({ where: {} });
    });
  });
  afterEach(() => {
    return Tag.destroy({ where: {} });
  });

  it('should begin with no tags', async () => {
    const queryTags = await Tag.findAll();
    expect(queryTags).to.have.length(0);
  });
  it('should be able to a tag', async function() {
    const tagData = {
      name: chance.word(),
      description: chance.sentence()
    };
    const createdTag = await Tag.create(tagData);
    expect(createdTag).to.have.property('name', tagData.name);
    expect(createdTag).to.have.property('description', tagData.description);
  });
});
