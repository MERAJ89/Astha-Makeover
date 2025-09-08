// Banner animation on page load
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.querySelector('.banner');
  if (banner) {
    setTimeout(function() {
      banner.classList.add('animated');
    }, 100);
  }
});
// Hamburger menu toggle for mobile with animation and auto-hide on scroll
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('navbar-hamburger');
  const menu = document.getElementById('navbar-menu');
  let lastScrollY = window.scrollY;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile UX)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Hide menu on scroll
  window.addEventListener('scroll', function() {
    if (menu.classList.contains('active')) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
    lastScrollY = window.scrollY;
  });
});
function showContact() {
  var info = document.getElementById("contactInfo");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    info.scrollIntoView({behavior: 'smooth', block: 'center'});
  } else {
    info.style.display = "none";
  }
}
