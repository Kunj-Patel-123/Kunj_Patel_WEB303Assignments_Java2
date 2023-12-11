document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const countrySelect = document.querySelector('select[name="country"]');
    const submitButton = document.querySelector('input[type="submit"]');
    const form = document.querySelector('form');

    // Disable submit button by default
    submitButton.disabled = true;

    // Function to check if all conditions are met to enable submit button
    function checkFormValidity() {
        const isUsernameValid = usernameInput.value.trim().length > 0;
        const isPasswordValid = passwordInput.value.length >= 12;
        const isConfirmPasswordValid = confirmPasswordInput.value === passwordInput.value;
        const isTermsChecked = termsCheckbox.checked;
        const isCountrySelected = countrySelect.value !== 'default';

        // Enable submit button if all conditions are met
        submitButton.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked && isCountrySelected);
    }

    // Event listeners to check validity on input/change
    usernameInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);
    confirmPasswordInput.addEventListener('input', checkFormValidity);
    termsCheckbox.addEventListener('change', checkFormValidity);
    countrySelect.addEventListener('change', checkFormValidity);

    // Prevent form submission and display welcome message
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const countryCode = countrySelect.value;
        const countryName = countrySelect.options[countrySelect.selectedIndex].text;

        const welcomeMessage = document.createElement('p');
        welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${countryCode}`;
        form.insertAdjacentElement('afterend', welcomeMessage);
    });
});
