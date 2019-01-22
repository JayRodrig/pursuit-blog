const db = require('../db/database');
const UserServices = {};

UserServices.read = (id) => {
    return db.one('SELECT * FROM users WHERE id = ${id}', {id,});
}

module.exports = UserServices;