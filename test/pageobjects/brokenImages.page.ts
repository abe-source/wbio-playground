import { $, $$ } from '@wdio/globals'
import Page from './page.js';

class BrokenImagesPage extends Page {
    // Text
    public get headerText() { return $('h3'); }

    // Images
    public get images() { return $$('//*[@class="example"]//img'); }
}

export default new BrokenImagesPage();