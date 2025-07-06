export default class Page {
    async clickElementMultipleTimes(element: any, count: number) {
        for (let i = 0; i < count; i++) {
            await element.click()
        }
    }
}
