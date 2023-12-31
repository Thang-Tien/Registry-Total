// modify database
const utils = require('../utils/utils')
const connection = require('../config/DBConnection')

const getFieldsFromXlsx = (records) => {
    let fields = "("
    for (key in records) {
        if (key != "inspection_id") {
            fields += `${key},`
        }

    }
    fields = fields.substring(0, fields.length - 1)
    fields += ")"
    return fields
}

const generateQueryFromXlsx = (json) => {
    let query = ""
    for (let i = 0; i < json.length; i++) {
        let row = ""
        for (key in json[i]) {
            if (key != "inspection_id") {
                if (key == "inspection_date" || key == "expired_date") {
                    const dateString = json[i][key].toString().replace(" (Giờ Đông Dương)", "")
                    const date = new Date(dateString)
                    date.setMonth(date.getMonth() + 6)
                    row += `"${date.toISOString()}",`
                }
                else {
                    row += `"${json[i][key]}",`
                }
            }

        }
        row = row.substring(0, row.length - 1)
        console.log(row)
        query += `(${row}),`
    }
    query = query.substring(0, query.length - 1)
    return query
}

connection.query(`SELECT * FROM inspections WHERE expired_date < NOW() LIMIT 1000`, (err, result, fields) => {
    if (err) {
        console.log(err)

    } else {

        // console.log(getFieldsFromXlsx(result[0]))
        // console.log(result[0].inspection_date)
        // console.log(generateQueryFromXlsx(result))
        connection.query(`INSERT INTO inspections ${getFieldsFromXlsx(result[0])} VALUES ${generateQueryFromXlsx(result)}`,
            (err, result, fields) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("done")
                }
            })
    }

})
