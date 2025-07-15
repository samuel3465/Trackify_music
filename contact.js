document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");
  
    // Basic validation
    if (name && email && message) {
      formStatus.textContent = "✅ Thank you! Your message has been sent.";
      formStatus.style.color = "#66ff66";
  
      // Reset form (optional)
      document.getElementById("contactForm").reset();
    } else {
      formStatus.textContent = "❌ Please fill in all fields.";
      formStatus.style.color = "#ff6666";
    }
  });
  