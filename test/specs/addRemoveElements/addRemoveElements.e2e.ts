import { expect } from '@wdio/globals'
import AddRemoveElementsPage from '../../pageobjects/addRemoveElements.page.ts'
import { urlNav } from '../../utils/urlNav.js'
import { ROUTES } from '../../utils/routes.js'

describe('Add Remove Elements', () => {
    it('should add and remove elements', async () => {
        await urlNav(ROUTES.addRemoveElements)
        await expect(AddRemoveElementsPage.headerText).toHaveText('Add/Remove Elements')
        await AddRemoveElementsPage.clickElementMultipleTimes(AddRemoveElementsPage.btnAddElement, 5)
        await expect(AddRemoveElementsPage.btnDeleteElements).toBeElementsArrayOfSize(5)
        await AddRemoveElementsPage.clickElementMultipleTimes(AddRemoveElementsPage.btnDeleteElements[0], 3)
        await expect(AddRemoveElementsPage.btnDeleteElements).toBeElementsArrayOfSize(2)
        await AddRemoveElementsPage.clickElementMultipleTimes(AddRemoveElementsPage.btnDeleteElements[0], 2)
        await expect(AddRemoveElementsPage.btnDeleteElements).toBeElementsArrayOfSize(0)
    })
})