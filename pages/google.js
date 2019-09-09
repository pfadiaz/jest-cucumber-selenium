const {By} = require('selenium-webdriver');

const page = {
    elements: {
        searchInput: By.name('q'),
    },
    uri: () => 'https://google.com',
};

module.exports = page;
