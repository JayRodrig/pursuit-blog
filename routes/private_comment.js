const PrivateCommentRouter = require('express').Router();
const CommentServices = require('../services/comment_services');
const {checkForToken} = require('../services/user_services');

PrivateCommentRouter.use(checkForToken);

PrivateCommentRouter.post('/', (request, response) => {
    const {author, post_id, title, body} = request.body;
    CommentServices.createComment(author, post_id, title, body)
        .then(() => {
            response.json({
                'msg': `Successfully posted comment.`,
            });
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PrivateCommentRouter.put('/:comment_id', (request, response) => {
    const {comment_id,} = request.params;
    const {title, body} = request.body;
    CommentServices.updateComment(comment_id, title, body)
        .then(() => {
            response.json({
                'msg': `Successfully updated your comment.`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PrivateCommentRouter.delete('/:comment_id', (request, response) => {
    const {comment_id,} = request.params;
    CommentServices.deleteComment(comment_id)
        .then(() => {
            response.json({
                'msg': `Successfully deleted comment.`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

module.exports = PrivateCommentRouter;