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
    const audio = new Audio('/beep.mp3');
    audio.play();

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
    const elem = this.imageTargets[this.index];
    const container = this.rectTargets[this.index];
    const rect = elem.getBoundingClientRect();

    const w = rect.width;
    const h = rect.height;
    const r = 35; // rayon augmenté pour compenser l'effet visuel du squircle

    // Squircle : la courbe commence plus tôt pour une transition douce
    // Coefficients augmentés pour plus de smoothing
    const p = r * 2;
    const l = r * 0.2;

    const d = `
      M ${p+1},0
      L ${w - p},0
      C ${w - l},0 ${w},${l} ${w},${p}
      L ${w},${h - p}
      C ${w},${h - l} ${w - l},${h} ${w - p},${h}
      L ${p},${h}
      C ${l},${h} 0,${h - l} 0,${h - p}
      L 0,${p}
      C 0,${l} ${l},0 ${p},0
      Z
    `;

    container.setAttribute("d", d);

    const perimeter = 2 * (w + h);
    container.style.strokeDasharray = perimeter;
    container.style.strokeDashoffset = perimeter;
  }



}
