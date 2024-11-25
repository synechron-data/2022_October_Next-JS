const { readData } = require('./file-handler');

exports.getAllEmployees = function () {
    return new Promise((resolve, reject) => {
        readData().then(data => {
            resolve(data);
        }, err => {
            reject("Employees not Found");
        });
    });
}