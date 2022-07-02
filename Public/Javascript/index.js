const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// repository and deployment button


document.getElementById("hack-btn").onclick = function () {
    location.href = "https://github.com/Farhiya1/Hackathon-Suite";
}

document.getElementById("repo-btn").onclick = function () {
    location.href = "https://github.com/LanguageBytes/Junior-Dev-Job-Search-Engine";
}

document.getElementById("readme-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/Readme-Creator";
}

document.getElementById("ecommerce-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/e-commerce-back-end";
}

document.getElementById("scheduler-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/Work-Day-Scheduler";
}


