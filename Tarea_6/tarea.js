let isJavaScriptFile = true;
console.log (isJavaScriptFile)

let condition = prompt ("Hola escribe la operacion a realizar: suma, resta, multiplicacion o division");
if (condition === "suma"){
        alert ("Usted ha elegido una Suma");
        let sumando1 = prompt ("Ingresa el primer sumando");
        let sumando2 = prompt ("Ingresa el segundo sumando");
        sumando1 = parseFloat (sumando1);
        sumando2 = parseFloat (sumando2);
        let suma = ((sumando1) + (sumando2));
        alert ("El resultado de la Suma es " + suma);
        document.write ("El resultado de la Suma es: " + suma);    
}
else if (condition === "resta"){
        alert ("Usted ha elegido una Resta");
        let minuendo = prompt ("Ingresa el minuendo");
        let sustraendo = prompt ("Ingresa el segundo sutraendo");
        minuendo = parseFloat (minuendo);
        sustraendo = parseFloat (sustraendo);
        let resta = ((ninuendo) - (sustraendo));
        alert ("El resultado de la Resta es " + resta);
        document.write ("El resultado de la Resta es: " + resta);
}
else if (condition === "multiplicacion"){
        alert ("Usted ha elegido una multiplicacion");
        let multiplicando = prompt ("Ingresa el Multiplicando");
        let multiplicador = prompt ("Ingresa el segundo Multiplicador");
        multiplicando = parseFloat (multiplicando);
        multiplicador = parseFloat (multiplicador);
        let multiplicacion = ((multiplicando) * (multiplicador));
        alert ("El resultado de la Multiplicacion es " + multiplicacion);
        document.write ("El resultado de la Multiplicacion es: " + multiplicacion);
}
else if(condition === "division") {
        alert ("Usted ha elegido una Division");
        let dividendo = prompt ("Ingresa el Dividendo");
        let divisor = prompt ("Ingresa el segundo Divisor");
        dividendo = parseFloat (dividendo);
        divisor = parseFloat (divisor);
        let division = ((dividendo) / (divisor));
        alert ("El resultado de la resta es " + division);
        document.write ("El resultado de la resta es: " + division);
}
else alert ("Si no presto atencion al principio, reinicie la pagina 🤦‍♂️ ")
