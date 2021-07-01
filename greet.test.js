const greetName = require('./greet.js')

describe('greetName', () => {

    // Test 1 - say Hello name
    it('should say Hello to name', () => {
        const name = 'Tess';
        expect(greetName(name)).toMatch('Hello Tess');
    });
    // Test 2 - Hello there if name is null
    it('should say Hello there to null name', () => {
        const name = null;
        expect(greetName(name)).toMatch('Hello there');
    });
    // Test 3 - Shout
    it('should shout', () => {
            const name = 'TESS';
            expect(greetName(name)).toMatch('HELLO TESS');
    });
    // Test 4 - Greet 2 names
    it('should greet two names', () => {
        const names = ['Sara', 'Tess'];
        expect(greetName(names)).toMatch('Hello Sara and Tess');
    });
    // Test 5 - Greet unlimited names
    it('should greet all names', () => {
        const names = ['Sara', 'Tess', 'Chandler'];
        expect(greetName(names)).toMatch('Hello Sara and Tess and Chandler');
    });
})