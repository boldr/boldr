import { expect } from 'chai';
import Chance from 'chance';
import { before, afterEach, describe, it } from 'mocha';
import slug from 'limax';
import { Article } from '../models';

const chance = new Chance();

describe('Article Model', () => {
  before(() => {
    // Sync and clear users before testing
    return Article.sync().then(() => {
      return Article.destroy({ where: {} });
    });
  });
  afterEach(() => {
    return Article.destroy({ where: {} });
  });

  it('should begin with no articles', async () => {
    const queryArticle = await Article.findAll();
    expect(queryArticle).to.have.length(0);
  });
  it('should be able to create an article', async function() {
    const articleData = {
      title: chance.word(10),
      excerpt: chance.sentence(),
      slug: slug(chance.word(10)),
      content: chance.sentence(5),
      markup: chance.sentence(5),
      featureImage: chance.avatar({ fileExtension: 'jpg' }),
      status: 'published'
    };
    const createdArticle = await Article.create(articleData);
    expect(createdArticle).to.have.property('title', articleData.title);
    expect(createdArticle).to.have.property('slug', articleData.slug);
    expect(createdArticle).to.have.property('excerpt', articleData.excerpt);
    expect(createdArticle).to.have.property('content', articleData.content);
    expect(createdArticle).to.have.property('markup', articleData.markup);
    expect(createdArticle).to.have.property('status', articleData.status);
    expect(createdArticle).to.have.property('featureImage', articleData.featureImage);
  });
});