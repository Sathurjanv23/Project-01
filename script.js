// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.setAttribute('data-theme', currentTheme);
}

darkModeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('#navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Typed.js Animation
document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('.typed-text', {
    strings: ['Sathurjan', 'a Developer', 'a Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});

// Animate Stats Counter
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
  const target = +stat.getAttribute('data-count');
  const increment = target / 100;
  let current = 0;
  
  const updateNumber = () => {
    current += increment;
    stat.textContent = Math.floor(current);
    
    if (current < target) {
      setTimeout(updateNumber, 10);
    } else {
      stat.textContent = target;
    }
  };
  
  updateNumber();
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('contact.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert('Message sent successfully!');
      contactForm.reset();
    })
    .catch(error => {
      alert('Error sending message. Please try again later.');
      console.error('Error:', error);
    });
  });
}

// Initialize Chart.js
const ctx = document.getElementById('skillsChart');

if (ctx) {
  const skillsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'UI/UX'],
      datasets: [{
        data: [95, 90, 85, 80, 75],
        backgroundColor: [
          '#e34c26',
          '#264de4',
          '#f0db4f',
          '#61dbfb',
          '#9b59b6'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();