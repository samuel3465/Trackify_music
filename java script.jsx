let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-change every 10 seconds
setInterval(() => {
  nextSlide();
}, 10000);

// Show first slide initially
showSlide(slideIndex);

  document.getElementById("subscribeBtn").addEventListener("click", function () {
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("message");

    if (email.trim() === "") {
      message.style.color = "red";
      message.textContent = "Please enter a valid email!";
    } else {
      message.style.color = "green";
      message.textContent = Thankyouforsubscribingwit.email};
      // You can send this email to a server using fetch or AJAX here
    }
  );
