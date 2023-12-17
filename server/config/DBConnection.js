const mysql = require('mysql2')

const connection = mysql.createConnection({
    // host: '10.110.77.167',
    // user: 'fall2324w3g10',
    // database: 'fall2324w3g10_dbtest',
    // password: 'qwertyuiop'

    host: 'localhost',
    user: 'root',
    database: 'registry_total',
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});


module.exports = connection;