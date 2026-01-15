"use strict";

import "./css/style.css";
import { foodArr } from "./main-page";
export const container = document.querySelector("#content");

// function to create divs based on number of objects in foodArr
// - display information about each object
export const displayItems = function () {
  foodArr.forEach((element) => {
    const cell = document.createElement("div");
    cell.classList.add("food-container");
    const cellText = document.createElement("div");
    cellText.classList.add("food-container-text");
    // const cellImg = element.foodImage(element.imgUrl, element.name);
    cell.textContent = element.foodName;
    container.appendChild(cell);
    // cell.appendChild(cellImg);
    cellText.textContent = element.foodStr();
    cell.appendChild(cellText);
  });
};
