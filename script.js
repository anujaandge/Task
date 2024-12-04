// Select all offer options and the total price element
const offers = document.querySelectorAll('input[name="offer"]');
const totalPriceElement = document.getElementById('total-price');

// Object to store prices for each offer
const offerPrices = {
  1: 10.0, // Price for 1 Unit
  2: 18.0, // Price for 2 Units
  3: 24.0, // Price for 3 Units
};

// Function to update total price and toggle visibility of size/color options
offers.forEach((offer) => {
  offer.addEventListener('change', (e) => {
    // Hide options for all blocks
    document.querySelectorAll('.options').forEach((options) => {
      options.style.display = 'none';
    });

    // Show options for the selected block
    const selectedBlock = e.target.closest('.offer-option');
    const options = selectedBlock.querySelector('.options');
    if (options) {
      options.style.display = 'block';
    }

    // Update the total price based on the selected offer
    const selectedValue = e.target.value;
    const updatedPrice = offerPrices[selectedValue];
    totalPriceElement.textContent = `$${updatedPrice.toFixed(2)} USD`;
  });
});
