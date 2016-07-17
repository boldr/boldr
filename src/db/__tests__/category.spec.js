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
import { Category } from '../models';

const chance = new Chance();

describe('Category Model', () => {
  it('should be able to create a new category', async function() {
    const categoryData = {
      name: chance.word(),
      description: chance.sentence(),
      image: chance.avatar({ fileExtension: 'jpg' })
    };
    const createdCategory = await Category.create(categoryData);
    expect(createdCategory).to.have.property('name', categoryData.name);
    expect(createdCategory).to.have.property('description', categoryData.description);
    expect(createdCategory).to.have.property('image', categoryData.image);
  });
});
