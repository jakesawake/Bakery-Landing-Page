"use strict";

export const foodArr = [];

const mainPageHeader = document.querySelector(".main-page-header");

const chefIcon = document.createElement("img");
chefIcon.classList.add("chef-icon");
chefIcon.src =
  "https://png.pngtree.com/png-clipart/20250108/original/pngtree-cartoon-female-chef-icon-for-culinary-branding-png-image_19753703.png";
mainPageHeader.appendChild(chefIcon);

const foodContentContainer = document.createElement("div");
foodContentContainer.classList.add("food-content-container");
export { foodContentContainer };

// creating Food class
// - contains an ingredients array containing the ingredients for the current food
export class Food {
  constructor(name, type, price, imgUrl, ingredients) {
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
    this.imgUrl = imgUrl;
    this.ingredients = ingredients;
  }
  foodImage(imgUrl) {
    let imgEl = document.createElement("img");
    imgEl.src = imgUrl;
    imgEl.classList.add("container-img");
    return imgEl;
  }
  foodStr() {
    return `${this.foodName} is a ${this.foodType} and is currently selling for ${this.foodPrice}`;
  }
}

const lecheFlan = new Food(
  "Leche Flan",
  "Desert",
  "$7.00",
  "https://cdn-icons-png.flaticon.com/128/8065/8065209.png",
  "Contains: Egg yolks, sweetened condensed milk, evaporated milk, sugar",
);
const tteokbokki = new Food(
  "Tteokbokki",
  "Meal",
  "$12.00",
  "https://cdn-icons-png.flaticon.com/512/6609/6609199.png",
  "Contains: Rice cake, Gochujang, Gochugaru",
);
const sisig = new Food(
  "Sisig",
  "Meal",
  "$5.00",
  "https://cdn-icons-png.flaticon.com/512/8065/8065273.png",
  "Contains: Pork, Aromatics, Spice, Umami, Egg",
);
const takoyaki = new Food(
  "Takoyaki",
  "Snack",
  "$2.00",
  "https://cdn-icons-png.flaticon.com/128/2322/2322326.png",
  "Contains: Flour, Dashi, Eggs, Soy Sauce & Salt, Octopus",
);

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
