import { expect } from '@wdio/globals'
import DragAndDropPage from '../../../pageobjects/web/dragAndDrop.page.ts';
import { urlNav } from '../../../utils/urlNav.js'
import { ROUTES } from '../../../utils/routes.js'

describe('Drag and Drop', () => {
    it('should drag and drop elements', async () => {
        await urlNav(ROUTES.dragAndDrop)
        await expect(DragAndDropPage.headerText).toHaveText('Drag and Drop')
        await expect(DragAndDropPage.columnA).toHaveText('A')
        await expect(DragAndDropPage.columnB).toHaveText('B')
        await DragAndDropPage.columnA.dragAndDrop(DragAndDropPage.columnB)
        await expect(DragAndDropPage.columnA).toHaveText('B')
        await expect(DragAndDropPage.columnB).toHaveText('A')
        await DragAndDropPage.columnB.dragAndDrop(DragAndDropPage.columnA)
        await expect(DragAndDropPage.columnA).toHaveText('A')
        await expect(DragAndDropPage.columnB).toHaveText('B')
    })
})