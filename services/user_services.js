const db = require('../db/database');
const UserServices = {};

UserServices.create = (username, email, password) => db.none('INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})', {username, email, password,});

UserServices.readUser = (id) => db.one('SELECT * FROM users WHERE id = ${id}', {id,});

UserServices.readPosts = (id) => db.any('SELECT users.username, posts.title, posts.body FROM users JOIN posts ON ${id} = posts.author WHERE users.id = ${id}', {id,});

module.exports = UserServices;