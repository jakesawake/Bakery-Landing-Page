"use strict";

export const foodArr = [];

// creating Food class
// - contains an ingredients array containing the ingredients for the current food
export class Food {
  constructor(name, type, price, imgUrl) {
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
    this.imgUrl = imgUrl;
  }
  foodImage(imgUrl, classListName) {
    this.imgEl = document.createElement("img");
    this.imgEl.src = imgUrl;
    this.imgEl.classList.add(classListName);
  }
  foodStr() {
    return `${this.foodName} is a ${this.foodType} and is currently selling for ${this.foodPrice}`;
  }
  ingredients = [];
}

const lecheFlan = new Food(
  "Leche Flan",
  "Desert",
  "$7.00",
  "https://cdn-icons-png.flaticon.com/128/8065/8065209.png",
);
const tteokbokki = new Food("Tteokbokki", "Meal", "$12.00");
const sisig = new Food("Sisig", "Meal", "$5.00");
const takoyaki = new Food("Takoyaki", "Snack", "$2.00");

// TODO: create function to create food objects
const foodMaker = function (name, type, price) {
  return new Food(`${name}`, `${type}`, `${price}`);
};
console.log(foodMaker("Tacos", "Meal", "$8.00"));

// array pusher function
// - takes any array and using rest parameter for foods
// - creates array of params
// - looping over that array of params
// - pushing that current food to whatever arr we pass in
const arrPusher = function (arr, ...foods) {
  foods.forEach((food) => {
    arr.push(food);
  });
};

arrPusher(foodArr, lecheFlan, tteokbokki, sisig, takoyaki);
