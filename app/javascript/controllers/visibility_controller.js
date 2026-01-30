import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

// Connects to data-controller="visibility"
export default class extends Controller {
  static targets = ["image"]

  static values = {
    notice: String,
  }


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
      this.notice()

    }

    next() {
      clearInterval(this.interval_Exercice);
      this.rotation();
      this.startTimer();

    }

      notice() {
        Swal.fire({title: "good job !",
          background: '#3e3e3e',
          color: '#ffffff',
          showConfirmButton: false,
          imageHeight: 1500,
          icon: "success",
          timer: 1500
    });
  }


}
