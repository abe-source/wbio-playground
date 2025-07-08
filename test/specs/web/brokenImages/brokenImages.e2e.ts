import { expect } from '@wdio/globals'
import BrokenImagesPage from '../../../pageobjects/web/brokenImages.page.ts';
import { urlNav } from '../../../utils/urlNav.js'
import { ROUTES } from '../../../utils/routes.js'

describe('Broken Images', () => {
    it('should check for broken images', async () => {
        await urlNav(ROUTES.brokenImages)
        await expect(BrokenImagesPage.headerText).toHaveText('Broken Images')
        await expect(BrokenImagesPage.images).toBeElementsArrayOfSize(3)
        await BrokenImagesPage.AssertImagesAreNotBroken()
    })
})