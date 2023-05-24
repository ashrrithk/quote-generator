const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const lightMode = document.getElementById("toggleBtnSun");
const darkMode = document.getElementById("toggleBtnMoon");
const currentTheme = localStorage.getItem('theme');
const themeStyle = document.getElementById('theme-style');

btn.addEventListener("click", getQuote);
lightMode.addEventListener("click", toggleModeLight);
darkMode.addEventListener("click", toggleModeDark);

function getQuote() {
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = `- ${data.author}`;
    })
    .catch((err) => {
        console.error('Error:', err);
    
    });
}

if(currentTheme === 'light'){
    lightMode.hidden = true;
    darkMode.hidden = false;
    themeStyle.href = 'style-light.css';
}



function toggleModeLight() {
  themeStyle.href = 'style-light.css';
    lightMode.hidden = true;
    darkMode.hidden = false;
    localStorage.setItem('theme', 'light');

}

function toggleModeDark() {
    // document.body.classList.toggle("dark-mode");
    // document.getElementById("quote").classList.toggle("dark-mode");
    // document.getElementById("author").classList.toggle("dark-mode");
    // document.querySelector(".btn-white").classList.toggle("dark-mode");
    themeStyle.href = 'style.css';
    lightMode.hidden = false;
    darkMode.hidden = true;
    localStorage.setItem('theme', 'dark');

}

