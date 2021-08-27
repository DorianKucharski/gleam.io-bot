const puppeteer = require('puppeteer');
const grind = require('./Grind').grind;
const gleam = require('./GleamList');
(async () => {
    const browser = await puppeteer.launch({
        userDataDir: './userdatadir',
        headless: false,
        devtools: false,
        defaultViewport: null,
    });


    page = await browser.newPage();


     let howManyPages = 0
     for (let i = 0; i < 19; i++) {
         let result = await gleam.getGiveaways(browser, 100, i);
         for (link of result) {
             try {
                 await grind(browser, link);
             } catch (error) {}
             howManyPages++;
             console.log('page: ' + howManyPages);

         }
     }




})();