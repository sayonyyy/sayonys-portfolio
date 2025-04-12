// Select the toggle button
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('theme-light');

  // Save the selected theme to localStorage
  localStorage.setItem('theme', body.classList.contains('theme-light') ? 'light' : 'dark');
});

// Load theme from localStorage on page load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('theme-light');
}

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // About section animation
  const aboutDetails = document.querySelector('.about-details');
  if (aboutDetails) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutDetails.style.animation = 'slideInBounceGlow 1.5s ease forwards';
          observer.unobserve(aboutDetails); // Trigger only once
        }
      });
    }, { threshold: 0.2 });

    observer.observe(aboutDetails);
  }

  // Typing effect
  const text = `ata Science Student & a Web Developer!`;
  const typeTarget = document.querySelector('.typewriter-text');
  let i = 0;
  let isDeleting = false;
  let speed = 100;

  function typeEffect() {
    if (isDeleting) {
      i--;
    } else {
      i++;
    }

    typeTarget.textContent = "D" + text.substring(0, i);

    if (!isDeleting && i === text.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && i === 0) {
      isDeleting = false;
    }

    let typingSpeed = isDeleting ? 50 : speed;
    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
});
