document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".go-down");
  const secondPage = document.querySelector(".second-page");
  const clickableArea = button.parentElement; // Assuming the parent element is the desired area

  clickableArea.addEventListener("click", function (event) {
    const buttonRect = button.getBoundingClientRect();
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Check if the click is within 100px (or your desired distance) of the button
    if (
      clickX >= buttonRect.left - 100 &&
      clickX <= buttonRect.right + 100 &&
      clickY >= buttonRect.top - 100 &&
      clickY <= buttonRect.bottom + 100
    ) {
      secondPage.scrollIntoView({ behavior: "smooth" });
    }
  });
});
