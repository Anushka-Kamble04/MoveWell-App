const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const appointmentButton = document.querySelectorAll(".appointment-btn");
const appointmentModal = document.querySelector(".appointment-modal");
const modalClose = document.querySelector(".modal-close");
const appointmentForm = document.querySelector(".appointment-form");
const nameError = document.querySelector("#name-error");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const phoneError = document.querySelector("#phone-error");
const phonePattern = /^\d{10}$/;
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const serviceInput = document.querySelector("#service");
const serviceError = document.querySelector("#service-error");
const dateInput = document.querySelector("#date");
const dateError = document.querySelector("#date-error");
const timeInput = document.querySelector("#time");
const timeError = document.querySelector("#time-error");
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
dateInput.min = `${year}-${month}-${day}`;
timeInput.min = "09:00";
timeInput.max = "19:00";
const appointmentSuccess = document.querySelector(".appointment-success");
const appointmentFormContainer = document.querySelector(".appointment-form-container");

// navigation
hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// appintment button
appointmentButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Appointment button clicked");
    appointmentModal.classList.add("active");
  });
});
// appointment close
modalClose.addEventListener("click", () => {
  appointmentModal.classList.remove("active");

    appointmentForm.reset();

    appointmentFormContainer.style.display = "block";
    appointmentSuccess.style.display = "none";
});
//form
appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstInvalidField = null;
  
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    if (firstInvalidField === null) {
    firstInvalidField = nameInput;
}
  } else {
    nameError.textContent = "";
  }

  if (
    phoneInput.value.trim() === "" ||
    phonePattern.test(phoneInput.value) === false
  ) {
    phoneError.textContent = "Please enter a valid 10-digit phone number";
    if (firstInvalidField === null) {
    firstInvalidField = phoneInput;
}
  } else {
    phoneError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter a valid Email address";
    if (firstInvalidField === null) {
    firstInvalidField = emailInput;
}
  } else {
    emailError.textContent = "";
  }

  if (serviceInput.value === "") {
    serviceError.textContent = "Please select a service";
    if (firstInvalidField === null) {
    firstInvalidField = serviceInput;
} 
}else {
    serviceError.textContent = "";
}

if (dateInput.value === "") {
    dateError.textContent = "Please select a preferred date";
    if (firstInvalidField === null) {
    firstInvalidField = dateInput;
} 
} else {
    dateError.textContent = "";
}

if (timeInput.value === "") {
    timeError.textContent = "Please select a preferred time";
    if (firstInvalidField === null) {
    firstInvalidField = timeInput;
} 
} else {
    timeError.textContent = "";
}
if (firstInvalidField) {
    firstInvalidField.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

if (firstInvalidField === null) {
    appointmentFormContainer.style.display = "none";
    appointmentSuccess.style.display = "block";
}

});
