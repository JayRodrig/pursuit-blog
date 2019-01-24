const db = require('../db/database');
const UserServices = {};

UserServices.create = (username, email, password) => db.none(
    'INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})', {username, email, password,}
);

UserServices.readUser = (user_id) => db.one(
    'SELECT * FROM users WHERE id = ${user_id}', {user_id,}
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

module.exports = UserServices;