//Form handling step 2
// --Choice Section--
const choiceSection = document.querySelector('.choice-section');
const choiceSectionTargets = document.querySelectorAll(
  '.choice-section__target'
);

choiceSection.addEventListener('click', function (e) {
  const target = e.target.closest('.choice-section__target');

  if (target) {
    choiceSectionTargets.forEach(otherTarget => {
      otherTarget.classList.remove('choice-selected');
    });

    target.classList.add('choice-selected');

    data.plan = target.dataset.name;
  }
});

// --Slider--
const slider = document.querySelector('.slider');
const previousSliderElement = slider.previousElementSibling;
const nextSliderElement = slider.nextElementSibling;
const prices = document.querySelectorAll('.info__price');
const specialOfferElements = document.querySelectorAll('.info__special-offer');

slider.addEventListener('input', function (e) {
  const isYearly = +slider.value === 1;

  previousSliderElement.classList.toggle('non-active-color');
  nextSliderElement.classList.toggle('non-active-color');

  specialOfferElements.forEach(element => {
    element.style.display = isYearly ? 'inline' : 'none';
  });

  if (isYearly) {
    prices.forEach(element => {
      element.classList.toggle('info__non-actual-price');
    });
  } else {
    prices.forEach(element => {
      element.classList.toggle('info__non-actual-price');
    });
  }
  data.planTime = isYearly ? 'Yearly' : 'Monthly';
});
