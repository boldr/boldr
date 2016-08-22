import { expect } from 'chai';
import Chance from 'chance';
import { before, afterEach, describe, it } from 'mocha';

import { Category } from '../models';

const chance = new Chance();

describe('Category Model', () => {
  // before(() => {
  //   // Sync and clear users before testing
  //   return Category.sync().then(() => {
  //     return Category.destroy({ where: {} });
  //   });
  // });
  afterEach(() => {
    return Category.destroy({ where: {} });
  });

  it('should begin with no categories', async () => {
    const queryCategory = await Category.findAll();
    expect(queryCategory).to.have.length(0);
  });
  it('should be able to create a category', async function() {
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
