import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import { getValidUser } from '../utils/user.js'
import { urlNav } from '../utils/urlNav.js'
import { ROUTES } from '../utils/routes.js'

const user = getValidUser()

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await urlNav(ROUTES.login)
        await LoginPage.login(user.username, user.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchSnapshot('flashAlert')
    })
})

