import DxfParser from 'dxf-parser';
import fs from 'fs';

const filePath = './Krk-Park Jordana-lodowisko.dxf';
const fileText = fs.readFileSync(filePath, 'utf-8');

try {
    const parser = new DxfParser();
    const dxf = parser.parse(fileText);

    // safe to file
    fs.writeFileSync('./output.json', JSON.stringify(dxf, null, 2), 'utf-8');

    console.log(dxf);
} catch (err) {
    console.error(err.stack);
}