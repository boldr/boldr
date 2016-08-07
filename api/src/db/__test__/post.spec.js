import { expect } from 'chai';
import Chance from 'chance';
import { before, afterEach, describe, it } from 'mocha';
import slug from 'limax';
import { Post } from '../models';

const chance = new Chance();

describe('Post Model', () => {
  before(() => {
    // Sync and clear users before testing
    return Post.sync().then(() => {
      return Post.destroy({ where: {} });
    });
  });
  afterEach(() => {
    return Post.destroy({ where: {} });
  });

  it('should begin with no articles', async () => {
    const queryArticle = await Post.findAll();
    expect(queryArticle).to.have.length(0);
  });
  it('should be able to create an article', async function() {
    const articleData = {
      title: 'the title of the article',
      excerpt: chance.sentence(),
      slug: slug('the title of the article'),
      content: chance.sentence(5),
      featureImage: chance.avatar({ fileExtension: 'jpg' }),
      status: 'published'
    };
    const createdArticle = await Post.create(articleData);
    expect(createdArticle).to.have.property('title', articleData.title);
    expect(createdArticle).to.have.property('slug', articleData.slug);
    expect(createdArticle).to.have.property('excerpt', articleData.excerpt);
    expect(createdArticle).to.have.property('content', articleData.content);
    expect(createdArticle).to.have.property('status', articleData.status);
    expect(createdArticle).to.have.property('featureImage', articleData.featureImage);
  });
});
