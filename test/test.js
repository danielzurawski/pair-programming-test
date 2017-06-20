const assert = require('assert');
const match = require('../src/index.js').match;
const testData = require('./testData.js');


describe('match', () => {
    it('should match campaign 1, creative 1 and placement 1 and approve it', () => {
        const response = match(testData.campaigns,testData.placements);
        assert(response[0].campaignId === 1);
        assert(response[0].placementId === 1);
        assert(response[0].creativeId === 1);
        assert(response[0].approved === true);
    })
});