module.exports = {
    verbose: true,
    testMatch: [
        "**/*.steps.js"
    ],
    reporters: [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./reports/html-report",
            "filename": "report.html",
            "expand": true
        }]
    ],
};
