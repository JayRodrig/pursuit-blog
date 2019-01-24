const PublicUserRouter = require('express').Router();
const UserServices = require('../services/user_services');
const bcrypt = require('bcrypt');
const saltRounds = 10;

PublicUserRouter.post('/', (request, response) => {
    const {username, email, password} = request.body;
    bcrypt.hash(password, saltRounds)
        .then(hash => {
            return UserServices.create(username, email, hash)
        })
        .then(() => {
            response.json({
                'msg': `Successfully created user.`,
            });
        })
        .catch(err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
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
            response.json({
                'msg': `Something went wrong.`,
            });
        });
});

PublicUserRouter.get('/:user_id/comments', (request, response) => {
    const {user_id} = request.params;
    UserServices.readComments(user_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json({
                'msg': `Successfully retrieved user's comments.`,
            });
        });
});

PublicUserRouter.get('/:user_id/comments/:comment_id', (request, response) => {
    const {user_id, comment_id} = request.params;
    UserServices.readComment(user_id, comment_id)
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`
            })
        })
});

PublicUserRouter.post('/login', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

module.exports = PublicUserRouter;