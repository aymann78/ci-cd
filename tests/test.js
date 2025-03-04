const assert = require('assert');
const suma = (a, b) => a + b;

describe('Pruebas de suma', () => {
    it('Debe retornar 5 para 2+3', () => {
        assert.strictEqual(suma(2, 3), 5);
    });
});
