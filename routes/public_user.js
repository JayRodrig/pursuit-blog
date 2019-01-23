const PublicUserRouter = require('express').Router();
const UserServices = require('../services/user_services');

PublicUserRouter.post('/', (request, response) => {
    const {username, email, password} = request.body;
    UserServices.create(username, email, password)
        .then(() => {
            response.json({
                'msg': `Successfully created user.`
            });
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong`,
            });
        });
});

PublicUserRouter.get('/:user_id', (request, response) => {
    const {user_id} = request.params;
    UserServices.readUser(user_id)
        .then(data => {
            response.json({
                'id': data.id,
                'username': data.username,
                'email': data.email,
            });
            console.log(`msg: Successfully retrieved user data.`);
        }, err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PublicUserRouter.get('/:user_id/posts', (request, response) => {
    const {user_id} = request.params;
    UserServices.readPosts(user_id)
        .then(data => {
            response.json(data);
            console.log(`msg: Successfully retrieved user's posts.`);
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`
            });
        });
});

PublicUserRouter.get('/:user_id/posts/:post_id', (request, response) => {
    const {user_id, post_id} = request.params;
    UserServices.readPost(user_id, post_id)
        .then(data => {
            response.json(data);
            console.log(`msg: Successfully retrieved user's post.`);
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PublicUserRouter.get('/:user_id/comments', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

PublicUserRouter.get('/:user_id/comments/:comment_id', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

PublicUserRouter.post('/login', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

module.exports = PublicUserRouter;