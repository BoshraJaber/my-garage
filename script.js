"use strict";
// variables
var arrayOfCarsImgs = ['bmw.png', 'chevrolet.png', 'hyundai.png', 'kia.png', 'lexus.png', 'tesla.png', 'toyota.png'];
var formEvent = document.getElementById('formId');
var listParentElement = document.getElementById('carInfoDiv');
var clearBtn = document.getElementById('clearBtn');
var arrayOfCarObjects = [];

//constructor
function Car(name, category, year, img) {
    this.carName = name;
    this.carCategory = category;
    this.modelYear = year;
    this.carImg = 'img/' + img;
    arrayOfCarObjects.push(this);
}

Car.prototype.renderCar = function () {
    var img = document.createElement('img');
    img.setAttribute('src', this.carImg);
    listParentElement.appendChild(img);

    var ul = document.createElement('ul');
    var listName = document.createElement('li');
    listName.textContent = this.carName;

    var listYear = document.createElement('li');
    listYear.textContent = this.modelYear;

    ul.appendChild(listName);
    ul.appendChild(listYear);

    listParentElement.appendChild(ul);

}

//functions
function formSubmit(event) {
    event.preventDefault();
    var nameOfCar = event.target.carName.value;
    var categoryOfCar = event.target.carsCategory.value;
    var yearOfModel = event.target.modelYear.value;

    for (let index = 0; index < arrayOfCarsImgs.length; index++) {
        var carNameImg = [];
        carNameImg[index] = arrayOfCarsImgs[index].split(".")[0];
        if (categoryOfCar.toLowerCase() === carNameImg[index]) {
            var chosenCar = arrayOfCarsImgs[index];
        }

    }

    var newCar = new Car(nameOfCar, categoryOfCar, yearOfModel, chosenCar);
    newCar.renderCar();
    console.log(newCar);
    localStorage.setItem('CarsInGarage', JSON.stringify(arrayOfCarObjects));
}
function renderNewCar() {
    for (let index = 0; index < arrayOfCarObjects.length; index++) {

        var img = document.createElement('img');
        img.setAttribute('src', arrayOfCarObjects[index].carImg);
        listParentElement.appendChild(img);

        var ul = document.createElement('ul');
        var listName = document.createElement('li');
        listName.textContent = arrayOfCarObjects[index].carName;

        var listYear = document.createElement('li');
        listYear.textContent = arrayOfCarObjects[index].modelYear;

        ul.appendChild(listName);
        ul.appendChild(listYear);

        listParentElement.appendChild(ul);
    }


}


function checkLS() {
    if (localStorage.getItem('CarsInGarage')) {
        arrayOfCarObjects = JSON.parse(localStorage.getItem('CarsInGarage'));
        renderNewCar();
        //console.log(localStorage);

    }

}

function clearStorageFunction() {
    localStorage.clear();
}

//Listener and functions call
formEvent.addEventListener('submit', formSubmit);
clearBtn.addEventListener('click', clearStorageFunction);
checkLS();