const { Bookmarks } = require('../../models');

const getBookmarkRequest = async (req, res) => {
  const page = req.query.page;
  const bookmark = new Bookmarks.findAll({ where: { UserId: req.decoded.userId } });
  try {
    res.status(200).json({
      bookmark,
    });
  } catch (error) {
    res.status(400).json({
      bookmark,
    });
  }
};

const createBookmarkRequest = async (req, res) => {
  const bookmark = await Bookmarks.findAll({ where: { UserId: req.decoded.userId } });
  const articleId = req.params.id;
  try {
    const result = await Bookmarks.create({
      UserId: req.decoded.userId,
      ArticleId: articleId,
    });
    res.status(200).json({
      bookmark,
    });
  } catch (error) {
    res.status(400).json({
      bookmark,
    });
  }
};

const bookmarkPage = async (req, res) => {
  res.render('bookmark/list', { user });
};

module.exports = {
  request: {
    getBookmark: getBookmarkRequest,
    createBookmark: createBookmarkRequest,
  },
  page: {
    bookmark: bookmarkPage,
  },
};
