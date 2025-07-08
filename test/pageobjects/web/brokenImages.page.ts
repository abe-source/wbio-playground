import { $, $$ } from '@wdio/globals'
import WebPage from '../shared/web.page.js';

class BrokenImagesPage extends WebPage {
    // Text
    public get headerText() { return $('h3'); }

    // Images
    public get images() { return $$('//*[@class="example"]//img'); }
}

export default new BrokenImagesPage();