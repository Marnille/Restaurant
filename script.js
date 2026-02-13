// Form Validation
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        
        // Basic validation
        if (!name || !email || !date) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show confirmation
        alert(`Thank you, ${name}! Your reservation has been submitted.`);
        
        // Reset form
        bookingForm.reset();
    });
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

// Mobile Menu Toggle (simple version)
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Set active link based on current page
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', setActiveLink);
