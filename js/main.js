const navbarHeight = 80;

function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const yOffset = -navbarHeight;
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}

function setActiveLinkById(targetId) {
  const links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    link.classList.remove('active');
    if (
      (targetId === 'home' && link.getAttribute('href') === '#') ||
      link.getAttribute('href') === `#${targetId}`
    ) {
      link.classList.add('active');
    }
  });
}

function navigateTo(event, targetId) {
  event.preventDefault();
  smoothScroll(targetId);
  setActiveLinkById(targetId);
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop - navbarHeight - 10 &&
      scrollPos < section.offsetTop + section.offsetHeight - navbarHeight
    ) {
      setActiveLinkById(section.id);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setActiveLinkById('home');
});


const launchDate = new Date('2024-01-31T00:00:00').getTime();

function updateCountdown() {
  const launchDate = new Date("April 11, 2027 12:00:00").getTime();
  const now = new Date().getTime();
  const distance = launchDate - now;

  const daysElem = document.getElementById("days");
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElem.innerHTML = days + "<br/>Days";
    hoursElem.innerHTML = hours + "<br/>Hrs";
    minutesElem.innerHTML = minutes + "<br/>Mins";
    secondsElem.innerHTML = seconds + "<br/>Secs";

    sessionStorage.setItem("isLaunched", "false");
  } else {

    document.querySelectorAll(".cta-button a").forEach(btn => {
      btn.textContent = "Book Now";
    });
    document.querySelector(".sale").innerHTML = "*Sale Started on <strong>11 April 2024</strong>*";
    document.querySelector(".coming h1").textContent = "";
    document.getElementById("timer").style.display = "none";

    sessionStorage.setItem("isLaunched", "true");
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();


const aboutImage = document.getElementById('aboutImage');
const imageArray = ['../images/about1.jpg', '../images/about2.jpg', '../images/about3.jpg', '../images/about4.jpg', '../images/about5.jpg', '../images/about6.jpg', '../images/about7.jpg', '../images/about8.jpg', '../images/about9.jpg', '../images/about10.jpg', '../images/about11.jpg'];

let currentIndex = 0;

function rotateImages() {
  aboutImage.src = imageArray[currentIndex];
  currentIndex = (currentIndex + 1) % imageArray.length;
}

setInterval(rotateImages, 5000);
rotateImages();


const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  setActiveLinkById('home');
});
