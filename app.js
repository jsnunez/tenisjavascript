const operacionAritmetica = function () {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const operador = document.getElementById("operador").value;

    let resultado = 0;

    if (operando1 >= 6) {
        let diferencia = operando1 - operando2;

        if (diferencia >= 2) {
            document.getElementById("resultado").innerHTML = "Resultado: el jugador A gano el set ";
        }
    }


    if (operando2 >= 6) {
        let diferencia = operando2 - operando1;
        if (diferencia >= 2) {
            document.getElementById("resultado").innerHTML = "Resultado: el jugador B gano el set ";
        }
    }

    if (operando1 < 6 || operando2 < 6) {
        document.getElementById("resultado").innerHTML = "Resultado: el set todavia no termina ";
    }
    







}