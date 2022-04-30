const db = require('./config/connection.js');

const showDepartment = function() {
    return await db.query(
        'SELECT * FROM `small_business_id.department`',

    )

}

module.exports = { showDepartment }