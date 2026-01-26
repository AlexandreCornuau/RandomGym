import { Controller } from "@hotwired/stimulus";
import Swal from "sweetalert2";


// Connects to data-controller="alert"
export default class extends Controller {
    static values = {
    message: String
  }
  connect() {
    Swal.fire({title: this.messageValue,
       background: '#3e3e3e',
    showConfirmButton: false,
    icon: "success",
    timer: 1500

    });
  }
}
