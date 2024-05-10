const pricingToggle = document.getElementById('pricing-toggle');
const priceAmounts = document.querySelectorAll('.price .amount');
const priceDurations = document.querySelectorAll('.price .duration');

// Currency and Unit Customization
const currencySelect = document.getElementById('currency');
const unitSelect = document.getElementById('unit');

// Set initial pricing values
const monthlyPrices = {
  USD: ['$19', '$29', '$39'],
  EUR: ['€17', '€26', '€36'],
  DNR: ['د. ك6', 'د. ك9', 'د. ك12'],
  INR: ['₹1580', '₹2420', '₹3256']
};

const annualPrices = {
  USD: ['$99', '$199', '$499'],
  EUR: ['€88', '€177', '€444'],
  DNR: ['د. ك30', 'د. ك61', 'د. ك153'],
  INR: ['₹6999', '₹14999', '₹34999']
};

function updatePricing(currency, isAnnual) {
  const prices = isAnnual ? annualPrices[currency] : monthlyPrices[currency];
  const duration = isAnnual ? '/ year' : '/ month';

  priceAmounts.forEach((amount, index) => {
    amount.textContent = prices[index];
  });

  priceDurations.forEach((durationElement) => {
    durationElement.textContent = duration;
  });
}

// Set initial pricing
updatePricing('USD', false);

// Update pricing on currency or unit change
currencySelect.addEventListener('change', () => {
  const currency = currencySelect.value;
  const isAnnual = unitSelect.value === 'annually';
  updatePricing(currency, isAnnual);
});

unitSelect.addEventListener('change', () => {
  const currency = currencySelect.value;
  const isAnnual = unitSelect.value === 'annually';
  updatePricing(currency, isAnnual);
});

// Toggle pricing on checkbox change
pricingToggle.addEventListener('change', () => {
  const isAnnual = pricingToggle.checked;
  const currency = currencySelect.value;
  updatePricing(currency, isAnnual);
});
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach((card) => {
  const planDetails = card.querySelector('.plan-details');

  card.addEventListener('mouseenter', () => {
    planDetails.classList.add('show');
  });

  card.addEventListener('mouseleave', () => {
    planDetails.classList.remove('show');
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});