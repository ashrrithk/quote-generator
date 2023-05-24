const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const lightMode = document.getElementById("toggleBtnSun");
const darkMode = document.getElementById("toggleBtnMoon");
const currentTheme = localStorage.getItem('theme');
const themeStyle = document.getElementById('theme-style');
const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("quote");




//Get quote from API
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

//Check for theme in local storage
if(currentTheme === 'light'){
    lightMode.hidden = true;
    darkMode.hidden = false;
    themeStyle.href = 'style-light.css';
}

//Toggle to light mode
function toggleModeLight() {
  themeStyle.href = 'style-light.css';
    lightMode.hidden = true;
    darkMode.hidden = false;
    localStorage.setItem('theme', 'light');

}

//Toggle to dark mode
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

btn.addEventListener("click", getQuote);
lightMode.addEventListener("click", toggleModeLight);
darkMode.addEventListener("click", toggleModeDark);
copyBtn.addEventListener("click", () => {
navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
      // Alert the user that the text has been copied
      alert("Quote copied to clipboard!");
    })
    .catch((error) => {
      console.error("Could not copy text: ", error);
    });
});

