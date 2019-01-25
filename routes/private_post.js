const PrivatePostRouter = require('express').Router();
const PostServices = require('../services/post_services');
const {checkForToken} = require('../services/user_services');

PrivatePostRouter.use(checkForToken);

PrivatePostRouter.post('/', (request, response) => {
    const {author, title, body,} = request.body;
    PostServices.createPost(author, title, body)
        .then(() => {
            console.log(`Successfully created user's post.`)
            response.json({
                'msg': `Successfully created your post!`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PrivatePostRouter.put('/:post_id', (request, response) => {
    const {post_id,} = request.params;
    const {title, body,} = request.body;
    PostServices.updatePost(post_id, title, body)
        .then(() => {
            console.log(`Successfully updated user's post.`);
            response.json({
                'msg': `Successfully updated your post.`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PrivatePostRouter.delete('/:post_id', (request, response) => {
    const {post_id} = request.params;
    PostServices.deletePost(post_id)
        .then(() => {
            console.log(`User's post has been deleted.`);
            response.json({
                'msg': `Successfully deleted your post.`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

module.exports = PrivatePostRouter;