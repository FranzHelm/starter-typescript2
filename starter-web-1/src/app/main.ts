import { Utils } from "./common/utils";

function processButtonClick() {  
  console.log("processButtonClick");

  let inputElement = (<HTMLInputElement>document.getElementById("hlc-input"));
  let outputElement = (<HTMLElement>document.getElementById("hlc-output"));

  let output = Utils.kebabStyle(inputElement.value);

  outputElement.innerText = new Date().toLocaleTimeString() + " : " + output;
}

window.onload = function () {
  (<HTMLInputElement>document.getElementById("hlc-btn-process")).onclick = processButtonClick;
}
