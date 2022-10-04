// Declaración de variables
var priceRoom = {
  standard: 100,
  junior: 120,
  suite: 150,
};
var spaPerNight = 20;
var priceBooking;

//FUNCIONES PARA OBTENER DATOS
var getInputTypeRoom = () => document.getElementById("select-room").value;
var getCheckboxSpa = () => document.getElementById("spa1").checked;
var getinputOcupation = () => document.getElementById("select-ocupation").value;
var getinputNumOfNight = () => parseInt(document.getElementById("number-night").value);
var getinputNumOfParking = () => parseInt(document.getElementById("number-park").value);

function dataReviewForm() {
  if (getInputTypeRoom() == "empty") {
    alert("Seleccione un tipo de habitación fadasd");
  } else if (getinputOcupation() == "empty") {
    alert("Seleccione un tipo de Ocupación");
  } else if (isNaN(getinputNumOfNight())) {
    alert("Indique un número de noches");
  } else if (isNaN(getinputNumOfParking())) {
    alert("Indique número de noches de parking");
  } else calcBooking();
}

function typeRoom() {
  if (getInputTypeRoom() === "standard") {
    priceBooking = priceRoom.standard;
  } else if (getInputTypeRoom() === "junior") {
    priceBooking = priceRoom.junior;
  } else if (getInputTypeRoom() === "suite") {
    priceBooking = priceRoom.suite;
  }
  return priceBooking;
}

function selectedSpa() {
  if (getCheckboxSpa() == true) {
    priceBooking = spaPerNight + priceBooking;
  }
  return priceBooking;
}

function ocupation() {
  switch (getinputOcupation()) {
    case "individual":
      priceBooking = priceBooking - priceBooking * 0.25;
      break;
    case "triple":
      priceBooking = priceBooking + priceBooking * 0.25;
      break;
  }
  return priceBooking;
}

var numberNight = () => priceBooking = priceBooking * getinputNumOfNight();

function numParkingNight() {
    var totalParking = 10 * getinputNumOfParking();
    priceBooking = priceBooking + totalParking;
}

function calcBooking() {
  typeRoom();
  selectedSpa();
  ocupation();
  numberNight();
  numParkingNight();
  document.getElementById("price-booking").innerText = priceBooking + "€";
}

document
  .getElementById("button-calc")
  .addEventListener("click", dataReviewForm);
