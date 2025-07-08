export default class WebPage {
    async clickElementMultipleTimes(element: any, count: number) {
        for (let i = 0; i < count; i++) {
            await element.click()
        }
    }

    async AssertImagesAreNotBroken() {
        const allImages = await $$('img');
        const logs = await browser.getLogs('browser');

        for (const image of allImages) {
            const src = await image.getAttribute('src');
            if (!src || src === '' || src === 'undefined' || src === 'null') {
                throw new Error(`Image has invalid src: ${src}`);
            } else if (logs.some((log: any) => log.message.includes(src))) {
                throw new Error(`Image is broken: ${src}`);
            }
        }
    }
}
