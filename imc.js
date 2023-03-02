const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const ValorIMC = (peso / (altura * altura)).toFixed(1);

        let classificação = '';

        if (ValorIMC < 18.5){
            classificação = 'abaixo do peso.';
        }else if (ValorIMC <25) {
            classificação = 'no seu peso ideal, parabéns!!!';
        }else if (ValorIMC < 30){
            classificação = 'levemente acima do peso.';
        }else if (ValorIMC < 35){
            classificação = 'com obesidade grau I';
        }else if (ValorIMC < 40){
            classificação = 'com obesidade grau II (severa).';
        }else {
            classificação = 'com obesidade III (mórbida), cuidado!!!';
        }
    
        resultado.textContent = `${nome} seu IMC é ${ValorIMC} e você está ${classificação}.`;

    }else {
        alert ('Preencha todos os campo!!!');
    }
}

calcular.addEventListener('click', imc);
