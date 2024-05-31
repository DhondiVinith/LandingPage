// JavaScript for Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    if (name === "" || email === "") {
        alert("All fields are required.");
        return false;
    } else {
        alert("Form submitted successfully!");
        closeModal(event.target.parentElement.parentElement.id);
        return true;
    }
}

// JavaScript for Testimonial Slider
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".testimonial-slide");
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".testimonial-slide");
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll(".testimonial-slide");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
