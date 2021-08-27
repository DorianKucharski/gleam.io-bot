const puppeteer = require('puppeteer');
const getMethodName = require('./libs/helpers').getMethodName;
const selector = require('./libs/selector');

module.exports = {
    getGiveawaysWithMethod: async function getGiveawaysWithMethod(browser, searchedMethod) {
        const page = (await browser.pages())[0];
        await page.goto('http://gleamlist.com/index.php?page=1');

        const rawhrefs = await page.evaluate(
            () => Array.from(
                document.querySelectorAll('a[href]'),
                a => a.getAttribute('href'),
            )
        );

        hrefs = [];
        for (const href of rawhrefs) {
            if (href.includes("gleam.io")) {
                hrefs.push(href);
            }
        }

        foundGiveaways = [];

        for (let i = 0; i < 1; i++) {
            await page.goto(hrefs[i]);
            let entryMethods = await page.$$(selector.em);
            for (const method of entryMethods) {
                let methodName = await getMethodName(page, method);
                if (methodName == searchedMethod) {
                    await foundGiveaways.push(hrefs[i]);
                    break;
                }
            }
        }
        console.log(foundGiveaways);
        return foundGiveaways;
    },
    getGiveaways: async function getGiveaways(browser, amount, pageNumber) {
        const page = (await browser.pages())[0];
        await page.goto('http://gleamlist.com/index.php?page=' + pageNumber);

        const rawhrefs = await page.evaluate(
            () => Array.from(
                document.querySelectorAll('a[href]'),
                a => a.getAttribute('href'),
            )
        );

        let hrefs = [];
        for (let i = 0; i < rawhrefs.length; i++) {
            if (rawhrefs[i].includes("gleam.io")) {
                hrefs.push(rawhrefs[i]);
            }
            if (hrefs.length == amount) {
                break;
            }
        }
        console.log(hrefs.length);

        return hrefs;
        // console.log(hrefs);
    },
}