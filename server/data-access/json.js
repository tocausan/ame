let fs = require('fs'),
    _ = require('lodash'),
    enums = require('../enums');


module.exports = {

    writeJsonFile: function (path, data) {
        return new Promise((resolve, reject) => {
            if (JSON.stringify(data)) reject('Expected json content');

            let folderPath = data.slice(0, data.length - 1);

            // create folder if not exist
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            fs.writeFileSync(path + '.json', JSON.stringify(data, null, 4), (err) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    },

    readFile: function (path) {
        return new Promise((resolve, reject) => {
            let fileFormat = _.last(_.last(filePath.split('/')).split('.'));
            if (fileFormat !== 'json') reject('This is not \'.json\' file');

            fs.readFile(path, 'utf8', (err, result) => {
                if (err) reject(err);
                if (!JSON.stringify(result)) reject('Expected json content');
                resolve(result);
            });
        })
    }

};