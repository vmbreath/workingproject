const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('таблица2.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const data = [];
    for await (const line of rl) {
        data.push(line.split('\t'));
    }


    let fileData;
    fileData = "export default " + JSON.stringify(data) + ";";
    fs.writeFile('Data.js', fileData, 'utf-8', () => {

    })
}

processLineByLine();

