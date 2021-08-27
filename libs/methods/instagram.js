const selector = require('../selector');
const helpers = require('../helpers');
const methods = require('./methods');

module.exports = {

    visit: async function (page, entryMethod) {
        await methods.visit(page, entryMethod)
    },

    enter: async function (page, entryMethod) {
        await methods.enter(page, entryMethod)
    },

    view: async function (page, entryMethod) {
        await methods.view(page, entryMethod)
    },
}