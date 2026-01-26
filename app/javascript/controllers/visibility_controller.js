import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="visibility"
export default class extends Controller {
  static targets = ["image"]
  connect() {
    this.index = 0
    this.imageTargets[this.index].classList.remove("hidden")
    this.startTimer();
  }

  startTimer() {
    this.interval_Exercice = setInterval(() => {this.rotation()}, 120000);

  }

  rotation() {
    this.imageTargets[this.index].classList.add("hidden")
    if (this.index < this.imageTargets.length - 1) {
      this.index ++
      } else {
      this.index = 0
      }
      this.imageTargets[this.index].classList.remove("hidden")

    }

    next() {
      clearInterval(this.interval_Exercice);
      this.rotation();
      this.startTimer();

    }


}
