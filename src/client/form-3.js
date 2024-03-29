const addOnsInput = document.querySelectorAll('.add-ons-section__input');
const addOnsTarget = document.querySelectorAll('.add-ons-section__target');
const addOnsPrices = document.querySelectorAll('.add-ons-section__parapraph');
const addOnsMap = {
  onlineService: { index: 0 },
  largerStorage: { index: 1 },
  customizableProfile: { index: 2 },
};

addOnsInput.forEach(element => {
  element.addEventListener('change', function () {
    const { name, checked } = element;
    const addOnIndex = addOnsMap[name].index;

    data.addOns[addOnIndex] = checked ? name : undefined;
    addOnsTarget[addOnIndex].classList.toggle('choice-selected', checked);
  });
});

addOnsPrices.forEach((element, index) => {
  element.textContent = addOnsPriceInfo[data.planTime][index];
});
