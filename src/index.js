"use strict";

import "./css/style.css";
import { displayMenu } from "./display-menu.js";
import { displayHome } from "./display-home.js";
import { displayInquiryForm } from "./display-inquiry.js";
export const container = document.querySelector("#content");

// selecting all nav buttons
const navBtns = document.querySelectorAll(".nav-link");

// function to clear the container
const clearContent = function () {
  container.textContent = "";
};

// calling displayHome() to show home page on initial page load
displayHome();

// - dynamically looping through the nav elements
// - listening for click on each nav button
// - depending on which nav element is clicked -> call the function for the corresponding module
navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "Menu-Btn") {
      clearContent();
      displayMenu();
    } else if (e.target.id === "Home-Btn") {
      clearContent();
      displayHome();
    } else if (e.target.id === "Inquiry-Btn") {
      clearContent();
      displayInquiryForm();
    }
  });
});
