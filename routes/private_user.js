// ----- DEPENDENCIES
const PrivateUserRouter = require('express').Router();
const bcrypt = require('bcrypt');
const UserServices = require('../services/user_services');

// ----- MIDDLEWARE
PrivateUserRouter.use(UserServices.checkForToken);

// ----- EXPRESS ROUTER CALLBACKS
PrivateUserRouter.put('/:user_id', UserServices.isCorrectUser, (request, response) => {
    const {username, email, password,} = request.body;
    const {user_id,} = request.params;
    bcrypt.hash(password, 10)
        .then(hash => {
            return UserServices.updateUser(username, email, hash, user_id)
        })
        .then(() => {
            response.json({
                'msg': `You've successfully updated your user information.`
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong.`
            });
        });

});

PrivateUserRouter.delete('/:user_id', UserServices.isCorrectUser, (request, response) => {
    const {user_id,} = request.params;
    UserServices.deleteUser(user_id)
        .then(() => {
            response.json({
                'msg': `You've successfully deleted your user. Come back Soon!!`,
            });
        })
        .catch(err => {
            response.json({
                'msg': `Something went wrong. Remember, before deleting a user you have to make sure you've deleted their posts/comments as well.`,
            });
        });
});

module.exports = PrivateUserRouter;