function submitForm() {
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Ensure all fields are filled
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Example: Send form data via fetch to a backend API
    const formData = { name, email, message };
  
    fetch('https://your-backend-api-url.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Reset form fields
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
  }
  