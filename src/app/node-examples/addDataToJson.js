const fs = require('fs');


const addData = function (title, body) {
    console.log(title, body);
    const data = loadData();
    data.push({
        title : title,
        body: body
    })
    console.log('data is :', data);

    saveDataToJson(data);

}

const saveDataToJson = function(data) {
    try {
        const jsonData = JSON.stringify(data);
        fs.writeFileSync('data.json', jsonData);

    } catch(e) {
        return [];
    }
}

const loadData = function() {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);

    } catch(e) {
        return [];
    }
}

module.exports = {
    addData : addData
};