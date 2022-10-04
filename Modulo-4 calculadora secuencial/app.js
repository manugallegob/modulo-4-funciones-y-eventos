//Ponemos autofocus en el input
function autoFocus() {
  document.getElementById("input-num1").focus();
}
autoFocus();

for (var i = 0; i < 1; i++) {
  var acumulado = 0;
  var acumuladoTotal = 0;
  var tipoOperacion = "default";
}

//OBTENEMOS VALORES DE LOS INPUTS
var getInputNum1 = () => parseInt(document.getElementById("input-num1").value);
var getInputNum2 = () => parseInt(document.getElementById("input-num2").value);

function addition() {
  setResult();
  tipoOperacion = "suma";
  
}

function substract() {
  setResult();
  tipoOperacion = "sub";
}

function mult() {
  setResult();
  tipoOperacion = "mult";
}

function div() {
  setResult();
  tipoOperacion = "div";
  
}

function impreClean() {
  document.getElementById("result").innerText = acumulado;
  document.getElementById("input-num1").value = "";
  autoFocus();
  // return acumulado;
}

function setResult() {
  if (isNaN(getInputNum1())) {
    alert("Introduce un valor");
  } else if (tipoOperacion === "default") {
    document.getElementById("result").innerText = getInputNum1();
    acumulado = getInputNum1();
    impreClean();
  } else if (tipoOperacion === "suma") {
    acumulado = acumulado + getInputNum1();
    impreClean();
    // return acumulado;
  } else if (tipoOperacion === "sub") {
    acumulado = acumulado - getInputNum1();
    impreClean();
  } else if (tipoOperacion === "mult") {
    acumulado = acumulado * getInputNum1();
    impreClean();
  } else if (tipoOperacion === "div") {
    acumulado = acumulado / getInputNum1();
    impreClean();
  }
}

// EVENTOS DE BOTONES
document.getElementById("buttom-add").addEventListener("click", addition);
document.getElementById("buttom-substract").addEventListener("click", substract);
document.getElementById("buttom-multiplication").addEventListener("click", mult);
document.getElementById("buttom-division").addEventListener("click", div);
document.getElementById("buttom-total").addEventListener("click", setResult);
