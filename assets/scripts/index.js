const btnFecho = document.querySelector("#btn_fecho");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");

btnFecho.addEventListener('click', () => {
    window.open('./assets/images/material/fecho.gif', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://linkedin.com/in/', '_blank');
});

btnTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});


btnEmail.addEventListener('click', () => {
    window.open('mailto:labs-l@pitang.com');
});

btnWebsite.addEventListener('click', () => {
    window.open('https://www.pitang.com/', '_blank');
});