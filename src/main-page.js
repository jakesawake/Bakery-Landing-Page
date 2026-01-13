"use strict";

const container = document.querySelector("#content");

const foodArr = [];

// creating Food class
// - contains an ingredients array containing the ingredients for the current food
class Food {
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

foodArr.push(lecheFlan);

const displayItems = function () {
  const cell = document.createElement("div");
  cell.classList.add("food-container");
  container.forEach((element) => {
    if (typeof element === "string") {
      container.appendChild(cell);
    }
  });
};
displayItems();
