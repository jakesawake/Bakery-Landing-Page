"use strict";

import "./css/style.css";
import { foodArr } from "./main-page";
import { container } from "./main-page";

// function to create divs based on number of objects in foodArr
export const displayItems = function () {
  foodArr.forEach((element) => {
    const cell = document.createElement("div");
    cell.classList.add("food-container");
    cell.textContent = element.foodName;
    container.appendChild(cell);
  });
};
