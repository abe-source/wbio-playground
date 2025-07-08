import MobilePage from "../shared/mobile.page.ts";

class CalculatorPage extends MobilePage { 
    // Display elements
    public get realTimeResultText() { return $('id=com.sec.android.app.popupcalculator:id/txtCalc_RealTimeResult'); }
    public get calculationText() { return $('id=com.sec.android.app.popupcalculator:id/txtCalc'); }

    // Number buttons (0-9)
    public get btn0() { return $('id=com.sec.android.app.popupcalculator:id/bt_00'); }
    public get btn1() { return $('id=com.sec.android.app.popupcalculator:id/bt_01'); }
    public get btn2() { return $('id=com.sec.android.app.popupcalculator:id/bt_02'); }
    public get btn3() { return $('id=com.sec.android.app.popupcalculator:id/bt_03'); }
    public get btn4() { return $('id=com.sec.android.app.popupcalculator:id/bt_04'); }
    public get btn5() { return $('id=com.sec.android.app.popupcalculator:id/bt_05'); }
    public get btn6() { return $('id=com.sec.android.app.popupcalculator:id/bt_06'); }
    public get btn7() { return $('id=com.sec.android.app.popupcalculator:id/bt_07'); }
    public get btn8() { return $('id=com.sec.android.app.popupcalculator:id/bt_08'); }
    public get btn9() { return $('id=com.sec.android.app.popupcalculator:id/bt_09'); }

    // Operation buttons
    public get btnAdd() { return $('id=com.sec.android.app.popupcalculator:id/bt_add'); }
    public get btnSubtract() { return $('id=com.sec.android.app.popupcalculator:id/bt_sub'); }
    public get btnMultiply() { return $('id=com.sec.android.app.popupcalculator:id/bt_mul'); }
    public get btnDivide() { return $('id=com.sec.android.app.popupcalculator:id/bt_div'); }
    public get btnEqual() { return $('id=com.sec.android.app.popupcalculator:id/bt_equal')}

    // Other buttons
    public get btnClear() { return $('id=com.sec.android.app.popupcalculator:id/bt_clear'); }
    public get btnDot() { return $('id=com.sec.android.app.popupcalculator:id/bt_dot'); }
    public get btnPlusMinus() { return $('id=com.sec.android.app.popupcalculator:id/bt_plusminus'); }
    public get btnParenthesis() { return $('id=com.sec.android.app.popupcalculator:id/bt_parenthesis'); }
    public get btnPersentage() { return $('id=com.sec.android.app.popupcalculator:id/bt_persentage'); }
    public get btnBackspace() { return $('id=com.sec.android.app.popupcalculator:id/bt_backspace'); }
    public get btnHistory() { return $('id=com.sec.android.app.popupcalculator:id/history_button'); }

    async AssertCalculatorIsLoaded() {
        // Check display elements
        await this.calculationText.isDisplayed();
        await this.realTimeResultText.isDisplayed();
            
        // Check key operation buttons
        await this.btnClear.isDisplayed();
        await this.btnEqual.isDisplayed();
        await this.btnAdd.isDisplayed();
            
        // Check a few number buttons
        await this.btn0.isDisplayed();
        await this.btn5.isDisplayed();
        await this.btn9.isDisplayed();
        await this.btn7.isDisplayed();
    }
}

export default new CalculatorPage();
