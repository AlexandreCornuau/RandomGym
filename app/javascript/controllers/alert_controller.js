import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";


// Connects to data-controller="alert"
export default class extends Controller {
    static values = {
    notice: String,
    warning: String
  }
  connect() {
    //appeler la methode notice si il y a une notice
    if (this.hasNoticeValue) {
      this.notice()
    }

    if (this.hasWarningValue) {
      this.warning()
    }
  }

  // defifinir la methode notice
  notice() {
    Swal.fire({title: this.noticeValue,
      background: '#3e3e3e',
      color: '#ffffff',
      showConfirmButton: false,
      icon: "success",
      timer: 1500
    });
  }
  // définir la methode alert

  warning() {
    Swal.fire({title: this.warningValue,
      icon: "warning",
      iconColor:'#dd1f1f',
      confirmButtonColor: 'rgb(113, 190, 19)',
      background: '#3e3e3e',
      color: '#ffffff',
    }).then(() => {
      const emailField = document.getElementById('user_email');
      if (emailField) {
        emailField.focus();
      }
    });
  }


}
