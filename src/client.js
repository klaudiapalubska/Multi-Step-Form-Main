//Summary info

const summary = document.querySelector('.summary');
const summaryPlan = document.querySelector('.summary__arcade__plan');
const summaryTime = document.querySelectorAll('.kind-of-time');
const summaryPlanPrice = document.querySelector('.summary__price__heading');
const summaryTotalPrice = document.querySelector('.summary__info__paragraph');

let totalPrice = 0;

//AddOns & (Time)
summaryPlan.textContent = `${data.plan} (${data.planTime})`;

const timeText =
  data.planTime === 'Monthly' ? '/mo' : data.planTime === 'Yearly' ? '/yr' : '';

summaryTime.forEach(element => {
  element.textContent = timeText;
});

//Price of AddOns
let priceAddOns =
  data.plan === 'Arcade'
    ? 0
    : data.plan === 'Advanced'
    ? 1
    : data.plan === 'Pro'
    ? 2
    : '';
priceAddOns = addOnsPriceInfo[data.planTime][priceAddOns].replace(
  /[+\$,/mory]/g,
  ''
);
summaryPlanPrice.innerHTML = `$${priceAddOns}<span class="kind-of-time">${timeText}</span>`;

totalPrice += +priceAddOns;

//Others cost
const planPriceInfoKeys = Object.keys(planPriceInfo);
data.addOns.forEach(element => {
  if (element !== undefined) {
    const priceKey =
      data.planTime === 'Monthly' ? 0 : data.planTime === 'Yearly' ? 1 : '';

    if (priceKey !== '') {
      totalPrice += +planPriceInfo[element][priceKey].replace(
        /[+\$,/mory]/g,
        ''
      );
      const addOnsTemplate = `
        <div class="summary__info">
          <p class="paragraph">${element}</p>
          <p class="paragraph primary-marine summary__info__paragraph">
            ${planPriceInfo[element][priceKey]}<span class="kind-of-time">${timeText}</span>
          </p>
        </div>`;
      summary.insertAdjacentHTML('beforeend', addOnsTemplate);
    }
  }
});

//Total Price
summaryTotalPrice.innerHTML = `$${totalPrice}<span class="kind-of-time">${timeText}</span>`;
