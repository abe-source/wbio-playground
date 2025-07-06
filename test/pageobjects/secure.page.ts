import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page { 
    // Text
    public get flashAlert() { return $('#flash'); }
    public get headerText() { return $('h2'); }
    public get subHeaderText() { return $('h4.subheader'); }

    // Buttons
    public get logoutButton() { return $('a[href="/logout"]'); }
}

export default new SecurePage();
