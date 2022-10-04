//OBTENEMOS VALORES DE LOS INPUTS
var getInputNum1 = () => parseInt(document.getElementById("input-num1").value);
var getInputNum2 = () => parseInt(document.getElementById("input-num2").value);

// OOPERACIONES MATEMÁTICAS
function addition() {
  var resultado = getInputNum1() + getInputNum2();
  setResult(resultado);
}
function substract() {
  var resultado = getInputNum1() - getInputNum2();
  setResult(resultado);
}
function mult() {
  var resultado = getInputNum1() * getInputNum2();
  setResult(resultado);
}
function div() {
  var resultado = getInputNum1() / getInputNum2();
  setResult(resultado);
}

// FUNCIÓN PARA IMPRIMIR RESULTADO EN PANTALLA
function setResult(resultado) {
  if (isNaN(getInputNum1()) || isNaN(getInputNum2())) {
    alert("Uno o todos los valores introducidos son incorrectos");
  } else {
    document.getElementById("result").innerText = resultado;
  }
}

// EVENTOS DE BOTONES
document.getElementById("buttom-add").addEventListener("click", addition);
document.getElementById("buttom-substract").addEventListener("click", substract);
document.getElementById("buttom-multiplication").addEventListener("click", mult);
document.getElementById("buttom-division").addEventListener("click", div);
