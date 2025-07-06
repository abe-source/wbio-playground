import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'
import { getValidUser } from '../../utils/user.js'
import { urlNav } from '../../utils/urlNav.js'
import { ROUTES } from '../../utils/routes.js'

const user = getValidUser()

describe('Authentication flow', () => {
    it('should login with valid credentials', async () => {
        await urlNav(ROUTES.login)
        await LoginPage.login(user.username, user.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.btnLogout).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringMatching('You logged into a secure area'))
        await expect(SecurePage.headerText).toHaveText('Secure Area')
        await expect(SecurePage.subHeaderText)
        .toHaveText('Welcome to the Secure Area. When you are done click logout below.')
    })

    it('should logout successfully', async () => {
        await urlNav(ROUTES.login)
        await LoginPage.login(user.username, user.password)
        await SecurePage.btnLogout.click()
        await expect(LoginPage.flashAlert)
        .toHaveText(
            expect.stringMatching('You logged out of the secure area!'))
    })
        
    it('should not login with invalid credentials', async () => {
        await urlNav(ROUTES.login)
        await LoginPage.login('invalidUser', 'wrongPassword')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringMatching('Your username is invalid'))
        await expect(SecurePage.flashAlert).toMatchSnapshot('flashAlert-invalid')
    })
})