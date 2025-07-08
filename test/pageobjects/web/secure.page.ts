import { $ } from '@wdio/globals'
import WebPage from '../shared/web.page.js';

class SecurePage extends WebPage { 
    // Text
    public get flashAlert() { return $('#flash'); }
    public get headerText() { return $('h2'); }
    public get subHeaderText() { return $('h4.subheader'); }

    // Buttons
    public get btnLogout() { return $('a[href="/logout"]'); }
}

export default new SecurePage();
