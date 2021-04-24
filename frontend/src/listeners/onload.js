import { renderLayout } from "../views/render-layout.js";
import { getClassNumber } from "../handlers/create-class/get-class-number.js";

renderLayout();

document
  .getElementById("btn-add-class")
  .addEventListener("click", getClassNumber);
