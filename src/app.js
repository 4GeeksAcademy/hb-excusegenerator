/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["My dog", "My landlord", "My grandma", "My Mother in Law"];
const action = ["ate", "took", "sold", "sat on"];
const what = ["my car", "my cash", "my phone", "the mortgage"];
const when = [
  "this morning",
  "during rush hour",
  "late last night",
  "yesterday"
];

function randomIndex(len) {
  return Math.floor(Math.random() * len);
}
window.onload = function() {
  //write your code here
  console.log("Hello Mdc-25!");

  // TODO: create random excuse
  const indexWho = randomIndex(who.length);
  const indexAction = randomIndex(action.length);
  //..

  const excuse =
    who[indexWho] + " " + action[indexAction] + " " + what[2] + " " + when[3];

  //change the html page tp show the random excuse
  document.querySelector("div").innerText = excuse;
};
