const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let acumulado = 0;

const eleccionOperacion = (numero) => {
    rl.question('Ingrese operacion, suma (s), resta(r), division(d), multiplicacion(m) ', (respuesta) => {
        respuesta = respuesta.toLowerCase();
        if(respuesta === 's' || respuesta === 'suma') {
            acumulado = acumulado + numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else if(respuesta === 'r' || respuesta === 'resta') {
            acumulado = acumulado - numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else if(respuesta === 'd' || respuesta === 'division') {
            acumulado = acumulado / numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else if(respuesta === 'm' || respuesta === 'multiplicacion') {
            acumulado = acumulado * numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }else {
            console.log('Por favor, ingrese una operacion valida.');
            inicio(); 
        }
    });
  };

const inicio = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          eleccionOperacion(numero);
      }else{
        console.log('Por favor, ingrese un número válido.');
        inicio(); 
      }
      
    });
  };

console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');
inicio();