"use strict";

export const container = document.querySelector("#content");

export const foodArr = [];

// creating Food class
// - contains an ingredients array containing the ingredients for the current food
export class Food {
  constructor(name, type, price) {
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
  }
  foodStr() {
    console.log(
      `${this.foodName} is a ${this.foodType} and is currently selling for ${this.foodPrice}`,
    );
  }
  ingredients = [];
}

const lecheFlan = new Food("Leche Flan", "Desert", "$7.00");
const tteokbokki = new Food("Tteokbokki", "Meal", "$12.00");
const sisig = new Food("Sisig", "Meal", "$5.00");

// TODO: create function to push food to array instead of calling individually
foodArr.push(lecheFlan);
foodArr.push(tteokbokki);
foodArr.push(sisig);

console.log(foodArr);

// function to create divs based on number of objects in foodArr
const displayItems = function () {
  foodArr.forEach((element) => {
    const cell = document.createElement("div");
    cell.classList.add("food-container");
    cell.textContent = element.foodName;
    container.appendChild(cell);
  });
};
