import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

// Connects to data-controller="visibility"
export default class extends Controller {
  static targets = ["image" , "rect"]

  static values = {
    notice: String,
  }


  connect() {
    this.index = 0
    this.imageTargets[this.index].classList.remove("hidden")
    this.startTimer()
    this.updateSvg();

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
      this.updateSvg();


    }

      notice() {
        Swal.fire({title: "good job !",
          background: '#3e3e3e',
          color: '#ffffff',
          showConfirmButton: false,
          icon: "success",
          timer: 1500,
    });
  }

  updateSvg() {
  // récupérer les dimensions de la card
  const elem =  this.imageTargets[this.index];
  //récupérer l'element Svg
  const container = this.rectTargets[this.index];
  // donner les dimension de la card au svg
  const rect = elem.getBoundingClientRect();
  console.log(elem);
  console.log(rect.height);
  container.setAttribute("width", rect.width);
  container.setAttribute("height", rect.height);

  const perimeter = 2 * (rect.width + rect.height);
  container.style.strokeDasharray = perimeter;
  container.style.strokeDashoffset = perimeter;

}



}
