const {By} = require('selenium-webdriver');

const page = {
    elements: {
        searchInput: By.name('q'),
    },
    uri: () => 'https://www.bing.com',
};

module.exports = page;
