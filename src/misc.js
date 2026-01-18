"use strict";

import { container } from ".";

export const aboutParagraph = `Welcome to Jarcui’s Bakery—where every bite is crafted with care,
and every day starts with the warm aroma of fresh, from‑scratch baking.
I’m Jarcui, a passionate baker dedicated to creating beautiful, delicious treats that bring people together.
From golden, crusty loaves to delicate pastries and celebration cakes, my kitchen blends time‑honoured techniques with a touch of modern creativity. Handcrafted daily using quality, locally sourced ingredients. Small‑batch baking for consistent freshness and flavour, seasonal menus that highlight the best of each harvest, Custom orders tailored to your tastes, allergies, and occasions
For me, baking is more than a recipe—it’s a relationship. I believe in simple ingredients, honest flavours, and the joy of sharing something made by hand. Whether you’re stopping by for your morning pastry, planning a special event, or just craving something sweet, I’m honoured to be part of your table.
Thank you for supporting a local bakery. I can’t wait to bake for you!`;

// array of objects containing daily hours of operations
export const hoursOfOperation = [
  { day: "Monday", hours: "9:00AM - 5:00PM" },
  { day: "Tuesday", hours: "9:00AM - 5:00PM" },
  { day: "Wednesday", hours: "9:00AM - 5:00PM" },
  { day: "Thursday", hours: "9:00AM - 5:00PM" },
  { day: "Friday", hours: "9:00AM - 5:00PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

// exporting our table created below
export let table;

// - exporting function that takes hoursOfOperation as arguement
// - dynamically creating table element with data found in hoursOfOperation
export const tableOfHours = function (data) {
  table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const thDay = document.createElement("th");
  thDay.textContent = "Day";
  const thHours = document.createElement("th");
  thHours.textContent = "Hours";

  headerRow.appendChild(thDay);
  headerRow.appendChild(thHours);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  data.forEach((element) => {
    const row = document.createElement("tr");
    const tdDay = document.createElement("td");
    tdDay.textContent = element.day;
    const tdHours = document.createElement("td");
    tdHours.textContent = element.hours;

    row.appendChild(tdDay);
    row.appendChild(tdHours);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
};
