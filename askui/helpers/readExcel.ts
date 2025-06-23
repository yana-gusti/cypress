import * as XLSX from 'xlsx';
import * as path from 'path';

export function readNumbersAndSymbols(fileName: string): { numbers: string[]; symbols: string[] } {
    const filePath = path.resolve(__dirname, '../test-data/' + fileName);
    const workbook = XLSX.readFile(filePath);

    const numberSheet = workbook.Sheets[workbook.SheetNames[0]];
    const symbolSheet = workbook.Sheets[workbook.SheetNames[1]];

    const numbersData = XLSX.utils.sheet_to_json<string[]>(numberSheet, { header: 1 });
    const symbolsData = XLSX.utils.sheet_to_json<string[]>(symbolSheet, { header: 1 });

    const numbers = numbersData.map(row => row[0]).filter(val => val !== undefined && val !== 'Numbers');
    const symbols = symbolsData.map(row => row[0]).filter(val => val !== undefined && val !== 'Symbols');

    return { numbers, symbols };
}

export function readExcel(fileName: string): { number: string, symbol: string }[] {
    const filePath = path.resolve(__dirname, '../test-data/'+fileName);

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json<{ number: string, symbol: string }>(sheet);
    return jsonData;
}
