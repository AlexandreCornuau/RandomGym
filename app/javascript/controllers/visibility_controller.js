import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";

// Connects to data-controller="visibility"
export default class extends Controller {
  static targets = ["image", "rect"]

  connect() {
    this.index = 0
    this.imageTargets[this.index].classList.remove("hidden")
    this.startTimer()
    this.updateSvg();
  }

  disconnect() {
    clearInterval(this.interval_Exercice);
  }

  startTimer() {
    this.interval_Exercice = setInterval(() => { this.rotation() }, 120000);
  }

  rotation() {
    this.imageTargets[this.index].classList.add("hidden")
    if (this.index < this.imageTargets.length - 1) {
      this.index++
      this.imageTargets[this.index].classList.remove("hidden")
      this.updateSvg();
      this.notice()
      const audio = new Audio('/beep.mp3');
      audio.play();
    } else {
      this.imageTargets[this.index].classList.remove("hidden")
      this.finish()
    }
  }

  reverseRotation() {
    this.imageTargets[this.index].classList.add("hidden")
    if (this.index > 0) this.index -= 1
    this.imageTargets[this.index].classList.remove("hidden")
    this.updateSvg();
  }

  prev() {
    clearInterval(this.interval_Exercice);
    this.reverseRotation();
    this.startTimer();
  }

  next() {
    clearInterval(this.interval_Exercice);
    this.rotation();
    this.startTimer();
  }

  notice() {
    Swal.fire({
      title: "next!",
      background: '#3e3e3e',
      color: '#ffffff',
      showConfirmButton: false,
      icon: "success",
      timer: 1500,
    });
  }

  finish() {
    const successIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#FFD43B" d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z"/></svg>'

    Swal.fire({
      title: 'good joob!',
      background: '#3e3e3e',
      color: '#ffffff',
      icon: 'success',
      confirmButtonColor: 'rgb(113, 190, 19)',
      iconHtml: successIcon,
      iconColor: '#ffd43b',
      customClass: {
        icon: 'rotate-y',
      },
    })
  }

  updateSvg() {
    const elem = this.imageTargets[this.index];
    const container = this.rectTargets[this.index];
    const rect = elem.getBoundingClientRect();

    const w = rect.width;
    const h = rect.height;
    const r = 35;

    const p = r * 2;
    const l = r * 0.2;

    const d = `
      M ${p + 1},0
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
