const PublicPostRouter = require('express').Router();
const PostServices = require('../services/post_services');

PublicPostRouter.get('/:post_id', (request, response) => {
    const {post_id,} = request.params;
    PostServices.readPost(post_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`
            });
        });
});

PublicPostRouter.get('/:post_id/comments', (request, response) => {
    const {post_id,} = request.params;
    PostServices.readPostComments(post_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': 'Something went wrong.',
            });
        });
});

PublicPostRouter.get('/:post_id/comments/:comment_id', (request, response) => {
    const {post_id, comment_id,} = request.params;
    PostServices.readPostComment(post_id, comment_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

module.exports = PublicPostRouter;