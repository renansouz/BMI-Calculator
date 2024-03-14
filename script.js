const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const ValorIMC = (peso / (altura * altura)).toFixed(1);

    let classificação = "";

    if (ValorIMC < 18.5) {
      classificação = "underweight.";
    } else if (ValorIMC < 25) {
      classificação = "at your ideal weight, congratulations!!!";
    } else if (ValorIMC < 30) {
      classificação = "lightly above ideal weight.";
    } else if (ValorIMC < 35) {
      classificação = "with obesity grade I.";
    } else if (ValorIMC < 40) {
      classificação = "with obesity grade II (severe).";
    } else {
      classificação = "with obesity III (morbid), be careful!!!";
    }

    resultado.textContent = `${nome} your BMI is ${ValorIMC} and you are ${classificação}`;
  } else {
    alert("Please fill all fields!!!");
  }
}

calcular.addEventListener("click", imc);

//UX in the field of height
document.getElementById("altura").addEventListener("input", function (event) {
  let altura = event.target.value;

  altura = altura.replace(/[^\d]/g, "");
  if (!altura.includes(".") && altura.length > 1) {
    altura = altura.slice(0, 1) + "." + altura.slice(1);
  }
  event.target.value = altura;
});

//UX in the field of weight
document.getElementById("peso").addEventListener("input", function (event) {
  let peso = event.target.value;

  peso = peso.replace(",", ".");

  peso = peso.replace(/[^\d.]/g, "");

  if (peso.indexOf(".") !== -1) {
    const parts = peso.split(".");
    peso = parts[0].slice(0, 3) + "." + parts.slice(1).join("").slice(0, 2);
  } else {
    peso = peso.slice(0, 3);
  }

  event.target.value = peso;
});
