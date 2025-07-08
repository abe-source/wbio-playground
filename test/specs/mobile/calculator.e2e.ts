import { expect } from '@wdio/globals'
import CalculatorPage from '../../pageobjects/mobile/calculator.page';

describe('Samsung Calculator Test', () => {
    it('should open calculator and perform basic calculation', async () => {
        await CalculatorPage.AssertCalculatorIsLoaded();
        
        await CalculatorPage.btn0.click();
        await CalculatorPage.btn5.click();
        await CalculatorPage.btnAdd.click();
        await CalculatorPage.btn3.click();
        await CalculatorPage.btnEqual.click();

        await expect(CalculatorPage.calculationText).toHaveText('8');
    });
});