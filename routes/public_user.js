const PublicUserRouter = require('express').Router();
const UserServices = require('../services/user_services');

PublicUserRouter.post('/', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

PublicUserRouter.get('/:user_id', (request, response) => {
    const {user_id} = request.params;
    UserServices.read(user_id)
        .then(data => {
            response.json(data);
            console.log(`msg: Successfully retrieved user data.`);
        }, err => {
            console.log(err);
            response.json({
                'msg': `Something went wrong.`,
                err: err.toString,
            });
        });
});

PublicUserRouter.get('/:user_id/posts', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

PublicUserRouter.get('/:user_id/posts/:post_id', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
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