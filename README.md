The test will execute a cucumber scenario outline of one feature in parallel to reduce testing time.

This test framework uses:

- Jest
- Jest-Cucumber
- Selenium Webdriver
- Jest-Html-Reporters

To run the framework, you just need to:

`npm run test`

The test will be executed headless and concurrent, and an HTML report will be generated in ./reports

NOTE: 
- Before and After Hooks were not used due to https://github.com/facebook/jest/issues/4281 when running test.concurrent
- If you want to use beforeEach and afterEach hook, remove the .concurrent and add the hooks to the share-steps, but will increase the execution time as each scenario will be ran individually.

As a workaround a world object was created to separate the driver instances, by passing an identifier named "engine" that drives the test.
