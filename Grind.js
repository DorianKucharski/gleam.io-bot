const getMethodName = require('./libs/helpers').getMethodName;
const checkIfAvailable = require('./libs/helpers').checkIfAvailable;
const passVerification = require('./libs/helpers').passVerification;
const selector = require('./libs/selector');
const methods = require('./libs/methods/methods');
const facebook = require('./libs/methods/facebook');
const instagram = require('./libs/methods/instagram');
const youtube = require('./libs/methods/youtube');
const twitter = require('./libs/methods/twitter');
const twitch = require('./libs/methods/twitch');
const custom = require('./libs/methods/custom');

module.exports = {
    grind: async function grind(browser, url) {
        const page = (await browser.pages())[0];
        await page.goto(url);
        console.log(url);

        if ((await checkIfAvailable(page)) == true) {
            await passVerification(page);

            for (let i = 0; i < 2; i++) {
                let entryMethods = await page.$$(selector.emVisible);
                console.log(entryMethods.length);
                for (entryMethod of entryMethods) {
                    let methodName = await getMethodName(page, entryMethod);

                    switch (methodName) {
                        case '###APP_NAME### Click|facebook|visit': {
                            console.log('✔️  ' + methodName);
                            await facebook.visit(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|instagram|visit_profile': {
                            console.log('✔️  ' + methodName);
                            await instagram.visit(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|youtube|visit_channel': {
                            console.log('✔️  ' + methodName);
                            await instagram.visit(page, entryMethod);
                            break;
                        }

                        case '###APP_NAME### Click|facebook|enter': {
                            console.log('✔️  ' + methodName);
                            await facebook.enter(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|youtube|enter': {
                            console.log('✔️  ' + methodName);
                            await youtube.enter(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|instagram|enter': {
                            console.log('✔️  ' + methodName);
                            await instagram.enter(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|email|subscribe': {
                            console.log('✔️  ' + methodName);
                            await methods.enter(page, entryMethod);
                            break;
                        }

                        case '###APP_NAME### Click|twitter|follow': {
                            console.log('✔️  ' + methodName);
                            await twitter.follow(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|twitter|tweet': {
                            console.log('✔️  ' + methodName);
                            await twitter.tweet(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|twitter|retweet': {
                            console.log('✔️  ' + methodName);
                            await twitter.tweet(page, entryMethod);
                            break;
                        }
                        case '###APP_NAME### Click|twitchtv|follow': {
                            console.log('✔️  ' + methodName);
                            await twitch.follow(page, entryMethod);
                            break;
                        }

                        case '###APP_NAME### Click|instagram|view_post': {
                            console.log('✔️  ' + methodName);
                            await instagram.view(page, entryMethod);
                            break;
                        }

                        case '###APP_NAME### Click|facebook|view_post': {
                            console.log('✔️  ' + methodName);
                            await facebook.view(page, entryMethod);
                            break;
                        }

                        default: {
                            if (methodName.includes('###CUSTOM###')) {
                                await custom.custom(page, entryMethod, methodName);
                            } else {
                                console.log("❌ " + methodName);
                            }
                            break;
                        }

                    }
                }
            }
        }
        console.log('KONIEC');
    }
}