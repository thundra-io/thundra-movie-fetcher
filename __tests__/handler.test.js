const handler = require('../handler');
const { env } = require('process');

test('correct response code is returned', () => {
    
    handler.fetchMovie().then( (response) => {
        expect(response.statusCode).toBe(200);
    })

});

test('forced failure in CI for Thundra demonstration', () => {
    if(process.env.APP_ENV == "CI") {
        if(Math.random() < .2) {
            console.log("FORCE FAILING");
            expect(false).toBe(true);
        }
    }
    expect(true).toBe(true);
});