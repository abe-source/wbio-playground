import { browser } from '@wdio/globals'
import { PROJECT_CONFIG } from '../project.config'

export async function urlNav(path: string) {
    await browser.url(`${PROJECT_CONFIG.baseUrl}/${path}`)
}