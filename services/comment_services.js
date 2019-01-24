const db = require('../db/database');
const CommentServices = {};

CommentServices.readComment = (comment_id) => db.one(
    'SELECT title, body FROM comments WHERE id = ${comment_id}', {comment_id,}
);

module.exports = CommentServices;