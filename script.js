
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };

  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};



function toggleReadMore() {
  const moreText = document.getElementById("more");
  const dots = document.getElementById("dots");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.classList.contains("show")) {
    moreText.classList.remove("show");
    dots.style.display = "inline";
    btn.innerText = "Read More";
  } else {
    moreText.classList.add("show");
    dots.style.display = "none";
    btn.innerText = "Read Less";
  }
}


ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-columns', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.certifications-container', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.timeline', { origin: 'left', distance: '60px', duration: 1200, delay: 200 });
ScrollReveal().reveal('.leadership-box', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200, interval: 200 });




const typed = new Typed('.multiple-text', {
  strings: ['Software Engineer', 'Frontend Developer', 'Data Analyst'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  if (!toggleButton) return; // Safety check

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'dark';
  rootElement.setAttribute('data-theme', savedTheme);

  // Set initial icon
  toggleButton.innerHTML = savedTheme === 'dark'
    ? "<i class='bx bx-sun'></i>"
    : "<i class='bx bx-moon'></i>";

  // Toggle logic
  toggleButton.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    toggleButton.innerHTML = newTheme === 'dark'
      ? "<i class='bx bx-sun'></i>"
      : "<i class='bx bx-moon'></i>";
    localStorage.setItem('theme', newTheme);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "❌ Oops! There was an error.";
      status.style.color = "red";
    }
  });
});


let debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

window.onscroll = debounce(() => {
}, 100);


document.querySelectorAll('.navbar a').forEach(link =>
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  })
);
