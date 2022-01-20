const modal = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll(".modal__close");
const modalMain = document.getElementById("modal_main");

modalMain.className += " modal_active";

if (closeModal.length > 0) {
  for(let i = 0; i < closeModal.length; i++) {
    const elemen = closeModal[i];
    elemen.addEventListener('click', function(e) {
      modalClose(elemen.closest(".modal"));
    })
  }
}

function modalClose(modal) {
  modal.classList.remove("modal_active");
}

const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

showSuccess.onclick = function() {
  modalSuccess.className += " modal_active";
}