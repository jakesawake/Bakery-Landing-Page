"use strict";

import { container } from "./index.js";

// - creating function for inquiry form
// - exporting to index.js for main logic
export const displayInquiryForm = function () {
  const inquiryContainer = document.createElement("div");
  inquiryContainer.classList.add("inquiry-container");
  container.appendChild(inquiryContainer);

  const inquiryHeader = document.createElement("h1");
  inquiryHeader.classList.add("inquiry-header");
  inquiryHeader.innerText = "Wanna do business?";

  const cateringForm = document.createElement("form");
  cateringForm.setAttribute("method", "GET");

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name:";
  nameLabel.setAttribute("for", "name");
  nameLabel.id = "name-label";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");
  nameInput.id = "name-input";

  const numberLabel = document.createElement("label");
  numberLabel.innerText = "Number:";
  numberLabel.setAttribute("for", "number");
  numberLabel.id = "number-label";

  const numberInput = document.createElement("input");
  numberInput.setAttribute("type", "number");
  numberInput.setAttribute("name", "number");
  numberInput.setAttribute("id", "number");
  numberInput.id = "number-input";

  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email:";
  emailLabel.setAttribute("for", "email");
  emailLabel.id = "email-label";

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("id", "email");
  emailInput.id = "email-input";

  const textAreaLabel = document.createElement("label");
  textAreaLabel.innerText = "What I'm inquiring about:";
  textAreaLabel.setAttribute("for", "text-area");
  textAreaLabel.id = "text-area";

  const textAreaInput = document.createElement("input");
  textAreaInput.setAttribute("type", "text");
  textAreaInput.setAttribute("name", "text");
  textAreaInput.setAttribute("id", "text-area");
  textAreaInput.id = "text-area-input";

  inquiryContainer.appendChild(inquiryHeader);
  inquiryContainer.appendChild(nameLabel);
  inquiryContainer.appendChild(nameInput);
  inquiryContainer.appendChild(numberLabel);
  inquiryContainer.appendChild(numberInput);
  inquiryContainer.appendChild(emailLabel);
  inquiryContainer.appendChild(emailInput);
  inquiryContainer.appendChild(textAreaLabel);
  inquiryContainer.appendChild(textAreaInput);
};
