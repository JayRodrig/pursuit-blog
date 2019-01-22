/*
    USER ROUTES:
        ❌ PUT /user/:user_id
        ❌ DEL /user/:user_id
*/

const PrivateUserRouter = require('express').Router();

PrivateUserRouter.put('/:user_id', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

PrivateUserRouter.delete('/:user_id', (request, response) => {
    response.json({
        'msg': `Successfully initialized your router.`
    });
});

module.exports = PrivateUserRouter;