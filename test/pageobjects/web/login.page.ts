import { $ } from '@wdio/globals'
import WebPage from '../shared/web.page.js';

class LoginPage extends WebPage {
    // Text
    public get flashAlert() { return $('#flash'); }

    // Inputs
    public get inputUsername() { return $('#username'); }
    public get inputPassword() { return $('#password'); }

    // Buttons
    public get btnSubmit() { return $('button[type="submit"]'); }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();