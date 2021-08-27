const selector = require('../selector');
const helpers = require('../helpers');
const methods = require('./methods');

module.exports = {

    follow: async function (page, entryMethod) {
        if ((await page.$(selector.emExpanded)) == null) {
            await entryMethod.click();
        }
        helpers.passVerification(page);
        try {
            await page.waitForSelector(selector.em_twitterButton, {
                timeout: 3000
            })

            let [popup] = await Promise.all([
                new Promise(resolve => page.once('popup', resolve)),
                await page.click(selector.em_twitterButton)
            ]);


            await popup.waitFor('body');
            await popup.waitFor(500);
            await popup.waitForSelector("button:not([disabled])");

            let text = await popup.evaluate("document.querySelector('button:not([disabled]) strong').innerText");
            if (text != 'Following') {
                await popup.click("button:not([disabled])");
                await popup.waitForFunction("document.querySelector('button:not([disabled]) strong').innerText.includes('Following')");
            }

            text = await popup.evaluate("document.querySelector('button:not([disabled]) strong').innerText");
            if (text != 'Following') {
                await popup.click("button:not([disabled])");
                await popup.waitForFunction("document.querySelector('button:not([disabled]) strong').innerText.includes('Following')");
            }

            await popup.close();
            await page.waitForSelector(selector.em_continueEnabledButton);
            await page.click(selector.em_continueEnabledButton);

            await page.waitForSelector(selector.emExpanded, {
                hidden: true
            });
            await page.waitForSelector(selector.em_fa_check);
        } catch (error) {}
    },

    tweet: async function (page, entryMethod) {
        if ((await page.$(selector.emExpanded)) == null) {
            await entryMethod.click();
        }
        helpers.passVerification(page);

        try {
            await page.waitForSelector(selector.em_twitterButton, {
                timeout: 3000
            })

            let [popup] = await Promise.all([
                new Promise(resolve => page.once('popup', resolve)),
                await page.click(selector.em_twitterButton)
            ]);

            await popup.waitFor('body');
            await popup.waitFor(500);
            await popup.waitForSelector("input[class*=submit]:not([disabled])");
            await popup.click("input[class*=submit]:not([disabled])");
            await page.waitForSelector(selector.em_continueEnabledButton);
            await page.click(selector.em_continueEnabledButton);

            await page.waitForSelector(selector.emExpanded, {
                hidden: true
            });
            await page.waitForSelector(selector.em_fa_check);
        } catch (error) {}
    }


}