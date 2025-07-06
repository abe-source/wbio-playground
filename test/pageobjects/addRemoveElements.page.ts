import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class AddRemoveElementsPage extends Page {
    // Text
    public get headerText() { return $('h3'); }

    // Buttons
    public get btnAddElement() { return $('button[onclick="addElement()"]'); }
    public get btnDeleteElements() { return $$('button.added-manually'); }
}

export default new AddRemoveElementsPage();