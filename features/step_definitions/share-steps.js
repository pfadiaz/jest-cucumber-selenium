import Pages from '../../pages/index'
import {Builder, until} from "selenium-webdriver";

let chrome = require('selenium-webdriver/chrome');
const world = {};

const givenICreateMyDriver = function ({given}) {
    given(/^I create world Driver for "(.*)"$/, async function (engine) {
        world[engine] = {
            driver: await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(),
        }
    });
};

const whenIReachTheSearchEngine = function ({when}) {
    when(/^I reach the "(.*)" search page$/, async function (engine) {
        const url = Pages[engine].uri();
        await world[engine].driver.get(url);
    });
};

const thenIRunASearchFor = function ({then}) {
    then(/^I run the search for "(.*)" for "(.*)"$/, async function (searchTerm, engine) {
        const {searchInput} = Pages[engine].elements;
        await world[engine].driver.wait(until.elementLocated(searchInput));
        await world[engine].driver.findElement(searchInput).sendKeys(`${searchTerm}\n`)
    })
};

module.exports = {
    givenICreateMyDriver,
    whenIReachTheSearchEngine,
    thenIRunASearchFor,
};
