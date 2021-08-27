const selector = require('../selector');
const helpers = require('../helpers');
const methods = require('./methods');

module.exports = {

    custom: async function (page, entryMethod, methodName) {
        if (methodName.includes('Visit') || methodName.includes('visit')) {
            console.log('✔️  ' + methodName);
            methods.visit(page, entryMethod);
        } else if (methodName.includes('Daily Bonus Entry')) {
            console.log('✔️  ' + methodName);
            methods.enter(page, entryMethod);
        } else {
            console.log('❌  ' + methodName);
        }
    },
}