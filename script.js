document.getElementById('billingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Perform form validation
    if (name === '' || email === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Process the form data (e.g., send it to a server)
    // ...
  
    // Clear the form after submission
    document.getElementById('billingForm').reset();
  
    // Show a success message
    alert('Billing information submitted successfully!');
  });
  