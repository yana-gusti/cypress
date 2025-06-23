import {aui} from "../helpers/askui-helper";
import {readNumbersAndSymbols} from '../helpers/readExcel';

describe('Canvas validation from Excel', () => {
    let numbers: string[] = [];
    let symbols: string[] = [];

    beforeAll(() => {
        const result = readNumbersAndSymbols('values.xlsx');
        numbers = result.numbers;
        symbols = result.symbols;
    });
    test(`Check numbers are on canvas`, async () => {
        await aui.typeIn('https://www.online-calculator.com//html5/simple/index.php?v=10').textfield().exec();
        await aui.pressKey('enter').exec();
        for (const num of numbers) {
            await aui.expect().text(num).exists().exec();
            console.log(`Number "${num}" is on canvas`)
        }
    });
    test(`Check symbols are on canvas`, async () => {
        await aui.typeIn('https://www.online-calculator.com//html5/simple/index.php?v=10').textfield().exec();
        await aui.pressKey('enter').exec();
        for (const sym of symbols) {
            await aui.expect().text(sym).exists().exec();
            console.log(`Symbol "${sym}" is on canvas`)
        }
    });
});
