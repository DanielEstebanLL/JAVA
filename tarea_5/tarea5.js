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
const main = async () => {
    const condition = await input("Hola escribe la operacion a realizar: suma, resta, multiplicacion o division");
        if (condition === "suma"){
        const sumando1 = await input("ingresa el primer sumando");
        const sumando2 = await input("Ingresa el segundo sumando");
        let suma = parseFloat(sumando1) + parseFloat(sumando2); 
        console.log("El resultado de la suma es " + suma);
    }else if (condition === "resta"){
        const minuendo = await input("ingresa el minuendo");
        const sustraendo = await input("Ingresa el Sustraendo");
        let resta = parseFloat(minuendo) - parseFloat(sustraendo); 
        console.log("El resultado de la resta es " + resta);
    }else if (condition === "multiplicacion"){
        const multiplicando = await input("ingresa el multiplicando");
        const multiplicador = await input("Ingresa el multiplicador");
        let multiplicacion = parseFloat(multiplicando) * parseFloat(multiplicador); 
        console.log("El resultado de la multiplicacion es " + multiplicacion);
    }else if (condition === "division"){
        const dividendo = await input("ingresa el dividendo");
        const divisor = await input("Ingresa el divisoe");
        let division = parseFloat(dividendo) / parseFloat(divisor); 
        console.log("El resultado de la division es " + division);
    }else {
        console.log("La opcion que elegiste no es correcta, vuelve a refrescar la pagina")
    }
    rli.close();
};
main();