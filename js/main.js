function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var homeLink = document.querySelector('.menu a[href="#"]');
    setActiveLink(homeLink);
});

function setActiveLink(link) {
    // Remove active class from all links
    var links = document.querySelectorAll('.menu a');
    links.forEach(function (el) {
        el.classList.remove('active');
    });

    // Add active class to the clicked link
    link.classList.add('active');
}


const launchDate = new Date('2024-01-31T00:00:00').getTime();

const updateCountdown = () => {

    const targetDate = new Date("April 11, 2027 12:00:00");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Convert the time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + "<br>Days";
    document.getElementById('hours').innerHTML = hours + "<br>Hrs";
    document.getElementById('minutes').innerHTML = minutes + "<br>Mins";
    document.getElementById('seconds').innerHTML = seconds + "<br>Secs";

    if (timeDifference < 0) {
        document.getElementById('timer').innerHTML = 'Launched!';
    }
};

setInterval(updateCountdown, 1000);
updateCountdown();


const aboutImage = document.getElementById('aboutImage');
const imageArray = ['../images/about1.jpg', '../images/about2.jpg', '../images/about3.jpg', '../images/about4.jpg', '../images/about5.jpg', '../images/about6.jpg', '../images/about7.jpg', '../images/about8.jpg', '../images/about9.jpg', '../images/about10.jpg', '../images/about11.jpg'];

let currentIndex = 0;

function rotateImages() {
    aboutImage.src = imageArray[currentIndex];
    currentIndex = (currentIndex + 1) % imageArray.length;
}

// Change image every 5 seconds 
setInterval(rotateImages, 5000);

rotateImages();
