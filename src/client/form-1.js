//Form handling step 1
const notRequireClass = "label__paragraph--not-required";
const wrongDataClass = "wrong-data";

const inputs = document.querySelectorAll(".label__input");
const notRequireElements = document.querySelectorAll(`.${notRequireClass}`);

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
