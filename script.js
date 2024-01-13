const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const errorElement = document.getElementById("error");
const phoneNumber = document.getElementById("phone_number");
const lastName = document.getElementById("last_name");
const userEmail = document.getElementById("user_email");
const UserPassword = document.getElementById("user_password");
const confirmPassword = document.getElementById("confirm_password");
const isNumber = /\d/;

document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const button = document.querySelector(".go-down");
  const secondPage = document.querySelector(".second-page");

  // Log the elements for debugging
  console.log("Button:", button, "Second Page:", secondPage);

  // Only add event listeners if elements are found
  if (button && secondPage) {
    const clickableArea = button.parentElement;

    clickableArea.addEventListener("click", function (event) {
      const buttonRect = button.getBoundingClientRect();
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Check if the click is within 100px of the button
      if (
        clickX >= buttonRect.left - 100 &&
        clickX <= buttonRect.right + 100 &&
        clickY >= buttonRect.top - 100 &&
        clickY <= buttonRect.bottom + 100
      ) {
        secondPage.scrollIntoView({ behavior: "smooth" });
      }
    });
  } else {
    console.error("Button or second page element not found!");
  }
});
function checkInputs() {
  const firstNameValue = firstName.value.trim();

  const lastNameValue = lastName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const userPasswordValue = UserPassword.value.trim();
  const onfirmPasswordValue = confirmPassword.value.trim();
  if (isNumber.test(firstNameValue)) {
    setErrorFor(firstName, "Name cannot have a number in it");
  } else {
    setSuccessFor(firstName);
  }
}
console.log("Form element:", form);

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });
} else {
  console.error("Form element not found!");
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");

  small.innerText = message;
  input.classList.add("error"); // Add the error class to the input for styling
}

function setSuccessFor(input) {
  input.className = "succeess";
}
