document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var telefono = document.getElementById('tlf').value;
    
    if (telefono.length < 9) {
        alert('El Telefono no es válido');
        return;
    }
    //No funciona no se porque
    /**var dni = document.getElementById('dni').value;
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            alert('Dni correcto');
            return true;
        }
    }else{
        alert('Dni erroneo, formato no válido');
        return false;
    }**/

    this.submit();
}
function fn_ValidateIBAN(IBAN) {

    var IBAN = document.getElementById('IBAN').value;
    IBAN = IBAN.toUpperCase();
    
    IBAN = IBAN.trim();
    IBAN = IBAN.replace(/\s/g, ""); 

    var letra1,letra2,num1,num2;
    var isbanaux;
    var numeroSustitucion;
    
    if (IBAN.length != 24) {
        return false;
    }

    
    letra1 = IBAN.substring(0, 1);
    letra2 = IBAN.substring(1, 2);
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    
    isbanaux = String(num1) + String(num2) + IBAN.substring(2);
    
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0,6);

   
    resto = modulo97(isbanaux);
    if (resto == 1){
        return true;
    }else{
        return false;
    }
}

function modulo97(iban) {
    var parts = Math.ceil(iban.length/7);
    var remainer = "";

    for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer+iban.substr((i-1)*7, 7))%97);
    }

    return remainer;
}

function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
}