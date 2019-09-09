import {loadFeature, defineFeature} from 'jest-cucumber';
import * as step from './share-steps'

const feature = loadFeature('./features/search.feature');

defineFeature(feature, (test) => {
    test.concurrent('Verify a user can run a search', (cucumberMethods) => {
        jest.setTimeout(30000);
        step.givenICreateMyDriver(cucumberMethods);
        step.whenIReachTheSearchEngine(cucumberMethods);
        step.thenIRunASearchFor(cucumberMethods);
    });
});
