class Validation {
  constructor() {
    this.name = "";
    this.email = "";
    this.number = "";
    this.plan = "";
    this.planTime = "";
  }

  validateInput(
    value,
    validationFunction,
    inputElement,
    notRequireElement,
    notRequireClass
  ) {
    const isValid = validationFunction(value);
    this.wrongData(isValid, inputElement, notRequireClass, notRequireElement);
    if (isValid) {
      this[inputElement.name] = value;
    }
  }

  nameValidation(name) {
    name = name.replace(/\s/g, "");
    return name.length >= 5;
  }

  emailValidation(email) {
    const pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return pattern.test(email);
  }

  numberValidation(number) {
    number = number.toString().replace(/[-+]/g, "");
    return (
      (number.length <= 11 && number.substring(0, 2) === "48") ||
      number.substring(0, 1) === "1"
    );
  }

  wrongData(isValid, inputElement, notRequireClass, notRequireElement) {
    inputElement.classList.toggle("wrong-data", !isValid);
    notRequireElement.classList.toggle(notRequireClass, isValid);
  }
}

//Form handling step 1
const notRequireClass = "label__paragraph--not-required";
const wrongDataClass = "wrong-data";

const inputs = document.querySelectorAll(".label__input");
const notRequireElements = document.querySelectorAll(`.${notRequireClass}`);

const data = new Validation();

inputs.forEach((input, index) => {
  input.addEventListener("change", function () {
    data.validateInput(
      input.value,
      data[input.name + "Validation"].bind(data),
      input,
      notRequireElements[index],
      notRequireClass
    );
  });
});

//Form handling step 2
// --Choice Section--
const choiceSection = document.querySelector(".choice-section");
const choiceSectionTargets = document.querySelectorAll(
  ".choice-section__target"
);

choiceSection.addEventListener("click", function (e) {
  const target = e.target.closest(".choice-section__target");

  if (target) {
    choiceSectionTargets.forEach((otherTarget) => {
      otherTarget.classList.remove("choice-selected");
    });

    target.classList.add("choice-selected");

    data.plan = target.dataset.name;
  }
});

// --Slider--
const slider = document.querySelector(".slider");
const previousSliderElement = slider.previousElementSibling;
const nextSliderElement = slider.nextElementSibling;
const prices = document.querySelectorAll(".info__price");
const specialOfferElements = document.querySelectorAll(".info__special-offer");
data.planTime = "Monthly"; // Protect from not being changed by the user

slider.addEventListener("input", function (e) {
  const isYearly = +slider.value === 1;

  previousSliderElement.classList.toggle("non-active-color");
  nextSliderElement.classList.toggle("non-active-color");

  specialOfferElements.forEach((element) => {
    element.style.display = isYearly ? "inline" : "none";
  });

  if (isYearly) {
    prices.forEach((element) => {
      element.classList.toggle("info__non-actual-price");
    });
  } else {
    prices.forEach((element) => {
      element.classList.toggle("info__non-actual-price");
    });
  }
  data.planTime = isYearly ? "Yearly" : "Monthly";
});
