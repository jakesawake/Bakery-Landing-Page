"use strict";

import "./css/style.css";
import { foodArr, foodContentContainer } from "./foods.js";
import { container } from "./index.js";

// function to create divs based on number of objects in foodArr
// - display information about each object
export const displayMenu = function () {
  foodArr.forEach((element) => {
    const cell = document.createElement("div");
    cell.classList.add("food-container");

    const cellText = document.createElement("div");
    cellText.classList.add("food-container-text");

    const cellIngredients = document.createElement("div");
    cellIngredients.classList.add("food-container-ingredients");

    cell.textContent = element.foodName;

    foodContentContainer.appendChild(cell);
    container.appendChild(foodContentContainer);

    const img = element.foodImage(element.imgUrl);
    cell.appendChild(img);

    cellText.textContent = element.foodStr();
    cell.appendChild(cellText);

    cell.appendChild(cellIngredients);
    cellIngredients.textContent = element.ingredients;
  });
};
