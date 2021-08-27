const selector = require('../selector');
const helpers = require('../helpers');

module.exports = {
    visit: async function (page, entryMethod) {
        if ((await page.$(selector.emExpanded)) == null) {
            await entryMethod.click();
        }
        await helpers.passVerification(page);
        try {
            const visitButton = await page.waitForSelector(selector.em_visitButton, {
                timeout: 2000
            });
            const [popup] = await Promise.all([
                new Promise(resolve => page.once('popup', resolve)),
                await visitButton.click()
            ]);
            await popup.waitFor('body');
            await popup.waitFor(3000);
            await popup.close();
        } catch (error) {}

        await helpers.passVerification(page)

        try {
            const continueButton = await page.waitForSelector(selector.em_continueEnabledButton, {
                timeout: 500
            });

            await continueButton.click();

        } catch (error) {}

        try {
            await page.waitForSelector(selector.emExpanded, {
                hidden: true
            });
            await page.waitForSelector(selector.em_fa_check);
        } catch (error) {}

    },
    enter: async function (page, entryMethod) {
        if ((await page.$(selector.emExpanded)) == null) {
            await entryMethod.click();
        }
        await helpers.passVerification(page);
        try {
            const continueButton = await page.waitForSelector(selector.em_continueEnabledButton, {
                timeout: 500
            });

            await continueButton.click();
        } catch (error) {}
        try {
            await page.waitForSelector(selector.emExpanded, {
                hidden: true
            });
            await page.waitForSelector(selector.em_fa_check);
        } catch (error) {}
    },
    view: async function (page, entryMethod) {
        if ((await page.$(selector.emExpanded)) == null) {
            await entryMethod.click();
        }
        // await helpers.passVerification(page);
        // await page.waitForSelector(selector.em_continueEnabledButton);
        // await page.click(selector.em_continueEnabledButton);
        // await page.click(selector.em_continueEnabledButton);
        // await page.click(selector.em_continueEnabledButton);
        // try {
        //     const continueButton = await page.waitForSelector(selector.em_continueEnabledButton);
        //     // await continueButton.click();
        //     const [popup] = await Promise.all([
        //         new Promise(resolve => page.once('popup', resolve)),
        //         await continueButton.click()
        //     ]);

        //     if (popup != null) {
        //         await popup.close();

        //     }
        //     await page.click(selector.em_continueEnabledButton);
        // } catch (error) {}

        await page.waitForSelector(selector.emExpanded, {
            hidden: true
        });
        await page.waitForSelector(selector.em_fa_check);
    },


}