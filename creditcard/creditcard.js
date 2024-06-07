document.getElementById('submit-button').addEventListener('click', function() {
    // Get all the input fields
    const cardNumber = document.getElementById('card-number');
    const cardHolder = document.getElementById('card-holder');
    const cardMonth = document.getElementById('card-month');
    const cardYear = document.getElementById('card-year');
    const cardCVC = document.getElementById('card-cvc-back');

    // Array to hold all input fields except cardholder
    const inputs = [
        { field: cardNumber, length: 16 },
        { field: cardMonth, length: 2 },
        { field: cardYear, length: 2 },
        { field: cardCVC, length: 3 }
    ];

    // Variable to track if all fields are valid
    let allValid = true;

    // Loop through each input field
    inputs.forEach(input => {
        // Check if the input is empty or if it doesn't have the correct length
        if (input.field.value.trim() === '' || input.field.value.length != input.length) {
            input.field.classList.add('invalid');
            allValid = false;
        } else {
            // Remove 'invalid' class if input is filled correctly
            input.field.classList.remove('invalid');
        }
    });

    // Check cardholder input separately
    if (cardHolder.value.trim() === '' || cardHolder.value.length < 3) {
        cardHolder.classList.add('invalid');
        allValid = false;
    } else {
        // Remove 'invalid' class if input is filled correctly
        cardHolder.classList.remove('invalid');
    }

    // If all fields are valid, proceed with form submission (here, you can add form submission code)
    if (allValid) {
        alert('Form submitted successfully!');
        // You can add your form submission code here
    } else {
        alert('Please fill out all required fields correctly.');
    }
});
