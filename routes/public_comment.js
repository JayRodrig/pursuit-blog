const PublicCommentRouter = require('express').Router();
const CommentServices = require('../services/comment_services');

PublicCommentRouter.get('/:comment_id', (request, response) => {
    const {comment_id} = request.params;
    CommentServices.readComment(comment_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

module.exports = PublicCommentRouter;