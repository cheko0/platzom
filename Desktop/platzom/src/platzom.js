export default function lenguaje(str) {
    let translation = str
    //Si la palabra termina en ar se quitan los caracteres 
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }
    //Si la palabra inicia con Z, se le añade pe
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }
    // si lapalabra tiene 10 letras se parte y se uno con un
    // guion
    const tama = translation.length
    if (tama >= 10) {
        const primera = translation.slice
            (0, Math.round(tama / 2))

        const segunda = translation.slice
            (Math.round(tama / 2))
        translation = `${primera}-${segunda}`
    }

    /*si la palabra original es un palindromo
    ninguna regla anterior cuenta y se devuelve 
    la misma palabra intercambiando mayusculas y minusculas*/
    const reverse = (str) => str.split('').reverse().join('')
    function minMay(str) {
        const tama = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < tama; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }

    if (str == reverse(str)) {
        return minMay(str)
    }
    return translation
}