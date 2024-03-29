const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req,res) => {
try {
    const commentData = await Comment.findAll({})
    const comments = commentData.map((comment) => comment.get({plain: true}));

    res.json(comments);
} catch (err){
    res.status(500).json(err);
}
});

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  console.log(newComment);
      res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;
