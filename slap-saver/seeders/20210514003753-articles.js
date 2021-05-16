'use strict';
const { Author } = require('../models');
const CATEGORY = require('../lib/constants/category');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const authors = await Author.findAll({});
    await Promise.all(
      authors.map(async (author) => {
        await author.createArticle({
          headline: '경제 기사',
          category: CATEGORY.ECONOMY,
          author: author.name,
          image: 'a74dc438fb6834f35e6c7968b57ae25f',
          imageDesc: 'this is image description',
          imageFrom: 'image source',
          briefing: 'this is briefing',
          additionalParagraph: 'additional paragraph',
        });
      }),
    );
    await Promise.all(
      authors.map(async (author) => {
        await author.createArticle({
          headline: '정치 기사',
          category: CATEGORY.POLITIC,
          author: author.name,
          image: 'a74dc438fb6834f35e6c7968b57ae25f',
          imageDesc: 'this is image description',
          imageFrom: 'image source',
          briefing: 'this is briefing',
          additionalParagraph: 'additional paragraph',
        });
      }),
    );
    await Promise.all(
      authors.map(async (author) => {
        await author.createArticle({
          headline: '스포츠 기사',
          category: CATEGORY.SPORTS,
          author: author.name,
          image: 'a74dc438fb6834f35e6c7968b57ae25f',
          imageDesc: 'this is image description',
          imageFrom: 'image source',
          briefing: 'this is briefing',
          additionalParagraph: 'additional paragraph',
        });
      }),
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles');
  },
};
