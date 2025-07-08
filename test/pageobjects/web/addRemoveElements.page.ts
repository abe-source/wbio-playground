import { $, $$ } from '@wdio/globals'
import WebPage from '../shared/web.page.js';

class AddRemoveElementsPage extends WebPage {
    // Text
    public get headerText() { return $('h3'); }

    // Buttons
    public get btnAddElement() { return $('button[onclick="addElement()"]'); }
    public get btnDeleteElements() { return $$('button.added-manually'); }
}

export default new AddRemoveElementsPage();