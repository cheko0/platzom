const expect = require('chai').expect
const platzom = require('..').default

 
describe('#platzom', function () {
    
    it('Si la palabra termina en ar se quitan los caracteres', function () {
        const traslation = platzom("programar")
        expect(traslation).to.equal("program")
    })

    it('Si la palabra inicia con Z, se le añade pe', function () {
        const traslation = platzom("zorro")
        const traslation2 = platzom("zarpar")

        expect(traslation).to.equal("zorrope")
        expect(traslation2).to.equal("zarppe")
    })

    it('si lapalabra tiene 10 letras se parte y se uno con un guion', function () {
        const traslation = platzom("abecedario")
        expect(traslation).to.equal("abece-dario")
    })

    it('si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayusculas y minusculas'
    , function () {
        const traslation = platzom("oso")

        expect(traslation).to.equal("OsO")
    })
})
