import Pages from '../../pages/index'
import {Builder, until} from "selenium-webdriver";

let chrome = require('selenium-webdriver/chrome');
const world = {};

const givenICreateMyDriver = function (cucumberMethods) {
    cucumberMethods.given(/^I create world Driver for "(.*)"$/, async function (engine) {
        world[engine] = {
            driver: await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(),
        }
    });
};

const whenIOpenTheUrl = function ({when}) {
    when(/^I have a browser with "(.*)"$/, async function (engine) {
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

const andICloseTheWorldDriver = function ({and}) {
    and(/^I close the world driver for "(.*)"$/, async function (engine) {
        world[engine].driver.quit();
    });
};

module.exports = {
    givenICreateMyDriver,
    whenIOpenTheUrl,
    thenIRunASearchFor,
    andICloseTheWorldDriver
};
