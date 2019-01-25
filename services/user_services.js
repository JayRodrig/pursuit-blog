// ----- DEPENDENCIES
const db = require('../db/database');

// ----- GLOBAL VARIABLE
const UserServices = {};

// ----- OBJECT METHODS
UserServices.login = (username) => db.one(
    'SELECT username, password FROM users WHERE username = ${username}', {username,}
);

UserServices.create = (username, email, password) => db.none(
    'INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})', {username, email, password,}
);

UserServices.readUser = (user_id) => db.one(
    'SELECT * FROM users WHERE id = ${user_id}', {user_id,}
);

UserServices.updateUser = (username, email, password, user_id) => db.none(
    'UPDATE users SET username = ${username}, email = ${email}, password = ${password} WHERE users.id = ${user_id}', {username, email, password, user_id,}
);

UserServices.deleteUser = (user_id) => db.none(
    'DELETE FROM users WHERE users.id = ${user_id}', {user_id,}
);

UserServices.readPosts = (user_id) => db.any(
    'SELECT users.username, posts.title, posts.body FROM users JOIN posts ON ${user_id} = posts.author WHERE users.id = ${user_id}', {user_id,}
);

UserServices.readPost = (user_id, post_id) => db.any(
    'SELECT users.username, posts.title, posts.body FROM users JOIN posts ON ${user_id} = posts.author WHERE ${post_id} = posts.id AND ${user_id} = users.id', {user_id, post_id,}
);

UserServices.readComments = (user_id) => db.any(
    'SELECT users.username, comments.title, comments.body FROM users JOIN comments ON ${user_id} = author WHERE ${user_id} = author', {user_id,}
);

UserServices.readComment = (user_id, comment_id) => db.one(
    'SELECT users.username, comments.title, comments.body FROM users JOIN comments ON users.id = comments.author WHERE author = ${user_id} AND comments.id = ${comment_id}', {user_id, comment_id,}
);


UserServices.insertToken = (token, username) => db.none(
    'UPDATE users SET token = ${token} WHERE username = ${username}', {token, username,}
);

UserServices.checkForToken = (request, response, next) => {
    if (!(request.headers.token)) {
        response.json({
            'msg': `You haven't logged in YET.`
        });
    }
    next();
}

module.exports = UserServices;