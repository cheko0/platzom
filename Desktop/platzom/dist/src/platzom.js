'use strict';

// esto es una prueba para seguir aprendiendo
//este es un comentario ppara agregar a egundaRama

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lenguaje;
function lenguaje(str) {
    var translation = str;
    //Si la palabra termina en ar se quitan los caracteres 
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    //Si la palabra inicia con Z, se le añade pe
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }
    // si lapalabra tiene 10 letras se parte y se uno con un
    // guion
    var tama = translation.length;
    if (tama >= 10) {
        var primera = translation.slice(0, Math.round(tama / 2));

        var segunda = translation.slice(Math.round(tama / 2));
        translation = primera + '-' + segunda;
    }

    /*si la palabra original es un palindromo
    ninguna regla anterior cuenta y se devuelve 
    la misma palabra intercambiando mayusculas y minusculas*/
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    function minMay(str) {
        var tama = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < tama; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}