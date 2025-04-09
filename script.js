// About animation trigger on scroll
const aboutDetails = document.querySelector(".about-details");

const aboutSection = document.querySelector(".about-sec");

function revealAboutSection() {
  const rect = aboutSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight - 100;

  if (isVisible) {
    aboutSection.classList.add("reveal");
  }
}



// Trigger when page loads or scrolls
document.addEventListener('DOMContentLoaded', () => {
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
});




// Typing effect with "I" fixed
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

document.addEventListener('DOMContentLoaded', typeEffect);
