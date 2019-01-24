const db = require('../db/database');
const PostServices = {};

PostServices.readPost = (post_id) => db.one(
    'SELECT users.username, posts.title, posts.body FROM users JOIN posts ON users.id = posts.author WHERE users.id = posts.author AND posts.id = ${post_id}', {post_id,}
);

PostServices.readPostComments = (post_id) => db.any(
    'SELECT posts.author, posts.title, posts.body, comments.title, comments.body FROM posts JOIN comments ON posts.id = comments.post_id WHERE comments.post_id = ${post_id}', {post_id,}
);

PostServices.readPostComment = (post_id, comment_id) => db.one(
    'SELECT posts.author, posts.title, posts.body, comments.title, comments.body FROM posts JOIN comments ON posts.id = comments.post_id WHERE comments.post_id = ${post_id} AND comments.id = ${comment_id}', {post_id, comment_id,}
)

module.exports = PostServices;