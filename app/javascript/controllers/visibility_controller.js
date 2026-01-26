import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="visibility"
export default class extends Controller {
  static targets = ["image"]
  connect() {
    this.index = 0
    this.imageTargets[this.index].classList.remove("hidden")

    this.interval_Exercice = setInterval(() => {this.rotation()}, 12<0);
  }

  rotation() {
    this.imageTargets[this.index].classList.add("hidden")
    if (this.index < this.imageTargets.length - 1) {
      this.index ++
      } else {
      this.index = 0
      }
    clearInterval(this.interval_Exercice);
    this.interval_Exercice;
    this.imageTargets[this.index].classList.remove("hidden")

  }


}


// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }
