const e = require("express");
const jwt = require("jsonwebtoken");

exports.generateQueryString = (query) => {
    let queryString = "";
    for (key in query) {
        if (key != "limit") {
            queryString += `${key} = ? AND `;
        } else {
            queryString = queryString.substring(0, queryString.length - 4);
            queryString += `LIMIT ${query[key]}`;
            return queryString;
        }
    }
    queryString = queryString.substring(0, queryString.length - 4);
    return queryString;
};

exports.generateQueryStringWithDate = (query, date) => {
    let queryString = "";
    for (key in query) {
        if (key != "month" && key != "year") {
            queryString += `${key} = ? AND `;
        } else if (key == "month") {
            queryString += `MONTH(${date}) = ? AND `;
        } else if (key == "year") {
            queryString += `YEAR(${date}) = ? AND `;
        } else if (key == "each_month" && query[key] == "true") {
            queryString += `GROUP BY MONTH(${date})`;
            return queryString;
        }
    }
    queryString = queryString.substring(0, queryString.length - 4);
    return queryString;
};

exports.getQueryValue = (query) => {
    let value = [];
    for (let key in query) {
        value.push(query[key]);
    }
    return value;
};

exports.generateErrorQueryValue = (query) => {
    let errorValueString = "";
    for (let key in query) {
        if (key != "limit") errorValueString += `${key} = ${query[key]}, `;
    }
    errorValueString = errorValueString.substring(
        0,
        errorValueString.length - 2
    );
    return errorValueString;
};

exports.getFieldsFromXlsx = (records) => {
    let fields = "(";
    for (key in records) {
        if (key != "car_id") fields += `${key},`;
    }
    fields = fields.substring(0, fields.length - 1);
    fields += ")";
    return fields;
};

exports.generateQueryFromXlsx = (json) => {
    let query = "";
    for (let i = 0; i < json.length; i++) {
        let row = "";
        for (key in json[i]) {
            if (key != "car_id") row += `"${json[i][key]}",`;
        }
        row = row.substring(0, row.length - 1);
        query += `(${row}),`;
    }
    query = query.substring(0, query.length - 1);
    return query;
};
