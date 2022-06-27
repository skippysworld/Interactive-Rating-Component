const ratePage = document.querySelector("#rate");
const thanksPage = document.querySelector("#thanks");
const formElement = document.querySelector("form");
const formButtons = document.querySelectorAll(".rating-value");
const thanksBanner = document.querySelector(".thanks-banner");

let selectedValue = 0;

formButtons.forEach((formButton) => {
  formButton.addEventListener("click", (event) => {
    formButtons.forEach((formButton) => {
      formButton.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");
    selectedValue = event.currentTarget.value;
  });
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (selectedValue !== 0) {
    ratePage.classList.add("hidden");
    thanksPage.classList.remove("hidden");
    thanksBanner.textContent = `You selected ${selectedValue} out of 5`;
  }
});
