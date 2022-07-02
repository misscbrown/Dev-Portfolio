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

document.getElementById("hack-deploy-btn").onclick = function () {
    location.href = "https://salty-woodland-88670.herokuapp.com/"
}

document.getElementById("repo-btn").onclick = function () {
    location.href = "https://github.com/LanguageBytes/Junior-Dev-Job-Search-Engine";
}

document.getElementById("dev-deploy-btn").onclick = function () {
    location.href = "https://languagebytes.github.io/Junior-Dev-Job-Search-Engine/";
}

document.getElementById("readme-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/Readme-Creator";
}

document.getElementById("weather-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/weather-forecast-app";
}

document.getElementById("dep-weather-btn").onclick = function () {
    location.href = "https://misscbrown.github.io/weather-forecast-app/";
}

document.getElementById("ecommerce-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/e-commerce-back-end";
}

document.getElementById("scheduler-btn").onclick = function () {
    location.href = "https://github.com/misscbrown/Work-Day-Scheduler";
}

document.getElementById("dep-scheduler-btn").onclick = function () {
    location.href = "https://misscbrown.github.io/Work-Day-Scheduler/Develop/"
}
