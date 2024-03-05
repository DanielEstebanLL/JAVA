const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}


const main =  async() => {
  function generarNumerosAleatorios (inicio, fin, cantidad) {
    let numerosAleatorios = [];
    for (let i =0;i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (fin - inicio +1)) + inicio;
        numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
  }
  const inicio = await input ("Ingresa el numero de inicio del rango");
  const fin = await input ("Ingresa el numero de fin del rango");
  const cantidad = await input ("Ingresa la cantidad de numeros aleatorios a generar");
  const listaNumerosaleatorios = generarNumerosAleatorios (parseFloat (inicio), parseFloat (fin), parseFloat (cantidad));
  console.log("Lista de numeros aleatorios", listaNumerosaleatorios);


    rli.close();
}
main();

