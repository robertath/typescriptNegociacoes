export function Imprimir(...objetos) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
