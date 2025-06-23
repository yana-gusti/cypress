const { defineFeature, loadFeature } = require('jest-cucumber');
const { getAui } = require('../helpers/askui-helper');
const { readNumbersAndSymbols } = require("../helpers/readExcel");

const feature = loadFeature('./askui/features/test.feature');

defineFeature(feature, test => {
    let numbers = [];
    let symbols = [];

    beforeAll(() => {
        const result = readNumbersAndSymbols('values.xlsx');
        numbers = result.numbers;
        symbols = result.symbols;
    });

    test('Opening a Calculator page', ({ given, then, and }) => {
        given('I open Calculator page', async () => {
            const aui = await getAui();
            await aui.typeIn('https://www.online-calculator.com//html5/simple/index.php?v=10').textfield().exec();
            await aui.pressKey('enter').exec();
        });

        then('Check numbers are on canvas', async () => {
            const aui = await getAui();
            for (const num of numbers) {
                await aui.expect().text(num).exists().exec();
            }
        });

        and('Check symbols are on canvas', async () => {
            const aui = await getAui();
            for (const sym of symbols) {
                await aui.expect().text(sym).exists().exec();
            }
        });
    });
});
