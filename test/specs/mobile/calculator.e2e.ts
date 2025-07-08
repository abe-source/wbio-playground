import { expect } from '@wdio/globals'
import CalculatorPage from '../../pageobjects/mobile/calculator.page';

describe('Samsung Calculator Test', () => {
    beforeEach(async () => {
        await CalculatorPage.AssertCalculatorIsLoaded();
        await CalculatorPage.btnClear.click();
    });

    it('should add two numbers', async () => {
        await CalculatorPage.btn5.click();
        await CalculatorPage.btnAdd.click();
        await CalculatorPage.btn3.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('8');
    });

    it('should subtract two numbers', async () => {
        await CalculatorPage.btn9.click();
        await CalculatorPage.btnSubtract.click();
        await CalculatorPage.btn4.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('5');
    });

    it('should multiply two numbers', async () => {
        await CalculatorPage.btn6.click();
        await CalculatorPage.btnMultiply.click();
        await CalculatorPage.btn7.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('42');
    });

    it('should divide two numbers', async () => {
        await CalculatorPage.btn8.click();
        await CalculatorPage.btnDivide.click();
        await CalculatorPage.btn2.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('4');
    });

    it('should handle negative result', async () => {
        await CalculatorPage.btn3.click();
        await CalculatorPage.btnSubtract.click();
        await CalculatorPage.btn5.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('−2');
    });

    it('should handle decimal calculation', async () => {
        await CalculatorPage.btn2.click();
        await CalculatorPage.btnDot.click();
        await CalculatorPage.btn5.click();
        await CalculatorPage.btnAdd.click();
        await CalculatorPage.btn1.click();
        await CalculatorPage.btnDot.click();
        await CalculatorPage.btn2.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('3.7');
    });

    it('should handle multi-step calculation', async () => {
        await CalculatorPage.btn2.click();
        await CalculatorPage.btnAdd.click();
        await CalculatorPage.btn3.click();
        await CalculatorPage.btnMultiply.click();
        await CalculatorPage.btn4.click();
        await CalculatorPage.btnEqual.click();
        await expect(CalculatorPage.calculationText).toHaveText('14');
    });
});