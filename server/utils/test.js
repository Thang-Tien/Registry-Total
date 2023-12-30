// modify database

const connection = require('../config/DBConnection')

connection.query(`SELECT * FROM cars WHERE inspected = false`, (err, result, fields) => {
  if (err) {
    console.log(err)
    
  } else {
    console.log(result)
  }
  
})