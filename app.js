// Wait for the DOM
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('regForm');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission / page reload

    // Check HTML5 form validity
    if (!form.checkValidity()) {
      form.classList.add('was-validated'); // show validation feedback
      return;
    }

    // If valid, show the success modal
    successModal.show();

    // Reset the form after submission
    form.reset();
    form.classList.remove('was-validated');
  });
});
