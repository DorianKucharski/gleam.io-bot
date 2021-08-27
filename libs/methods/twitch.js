const selector = require('../selector');
const helpers = require('../helpers');
const methods = require('./methods');

module.exports = {

    follow: async function (page, entryMethod) {
        await methods.enter(page, entryMethod)
    },


}