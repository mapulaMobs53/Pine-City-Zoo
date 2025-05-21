document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.querySelector('textarea');

    submitBtn.addEventListener('click', function (event) {
        // Check if any field is empty
        if (
            nameField.value.trim() === '' ||
            emailField.value.trim() === '' ||
            messageField.value.trim() === ''
        ) {
            event.preventDefault(); // Stop link from navigating
            alert('Please fill in all fields before submitting.');
        }
    });
});
