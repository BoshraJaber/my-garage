"use strict";
// variables
var arrayOfCarsImgs = ['bmw.png', 'chevrolet.png', 'hyundai.png', 'kia.png', 'lexus.png', 'tesla.png', 'toyota.png'];
var formEvent = document.getElementById('formId');
var listParentElement = document.getElementById('carInfoDiv');
var arrayOfCarObjects = [];

//constructor
function Car(name, category, year, img){
this.carName = name;
this.carCategory = category;
this.modelYear = year;
this.carImg = 'img/'+ img;
arrayOfCarObjects.push(this);
}

Car.prototype.renderCar = function(){
var img = document.createElement('img');
img.setAttribute('src',this.carImg );
listParentElement.appendChild(img);

var ul = document.createElement('ul');
var listName = document.createElement('li');
listName.textContent= this.carName;

var listYear = document.createElement('li');
listYear.textContent= this.modelYear;

ul.appendChild(listName);
ul.appendChild(listYear);

listParentElement.appendChild(ul);

}

//functions
function formSubmit(event){
    event.preventDefault();
    var nameOfCar = event.target.carName.value;
    var categoryOfCar = event.target.carsCategory.value;
    var yearOfModel = event.target.modelYear.value;

    for (let index = 0; index < arrayOfCarsImgs.length; index++) {
        var carNameImg = [];
        carNameImg[index] = arrayOfCarsImgs[index].split(".")[0];
        if (categoryOfCar.toLowerCase() === carNameImg [index]){
           var  chosenCar = arrayOfCarsImgs[index];
        }
        
    }

    var newCar = new Car(nameOfCar, categoryOfCar, yearOfModel, chosenCar);
    newCar.renderCar();
    console.log(newCar);
    localStorage.setItem('CarsInGarage', JSON.stringify(arrayOfCarObjects));
}

//Listener and functions call
formEvent.addEventListener('submit', formSubmit);