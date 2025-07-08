import { $ } from '@wdio/globals'
import WebPage from '../shared/web.page.js';

class DragAndDropPage extends WebPage {
    // Text
    public get headerText() { return $('h3'); }
    // Boxes
    public get columnA() { return $('#column-a'); }
    public get columnB() { return $('#column-b'); }
}

export default new DragAndDropPage();