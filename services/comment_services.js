const db = require('../db/database');
const CommentServices = {};

CommentServices.createComment = (author, post_id, title, body) => db.none(
    'INSERT INTO comments (author, post_id, title, body) VALUES (${author}, ${post_id}, ${title}, ${body})', {author, post_id, title, body,}
);

CommentServices.readComment = comment_id => db.one(
    'SELECT title, body FROM comments WHERE id = ${comment_id}', {comment_id,}
);

CommentServices.updateComment = (comment_id, title, body) => db.none(
    'UPDATE comments SET title = ${title}, body = ${body} WHERE id = ${comment_id}', {comment_id, title, body,}
);

CommentServices.deleteComment = comment_id => db.none(
    'DELETE FROM comments WHERE id = ${comment_id}', {comment_id,}
);

module.exports = CommentServices;