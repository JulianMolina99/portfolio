const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const sections = document.getElementById('section-page');
const btnLanguage = document.getElementById('section-item-language');
const languageContent = document.getElementById('section-language-content');
const btnSpanish = document.getElementById('spanish-language');
const btnEnglish = document.getElementById('english-language');
const textInPage = document.querySelectorAll("[data-section]");
const btnHamburger = document.getElementById('hamburger-btn');
const desMenu = document.getElementById('desplegable-menu');
const langOptions = document.getElementById('change-language-options');
const btnLanguageMenuSmall = document.getElementById('btn-option-languages');

let stateIconMode = true;

const changeLanguage = async (language) => {
    const json = await fetch(`./languages/${language}.json`);
    const text = await json.json();
    console.log(text);
    for(const element of textInPage){
        const section = element.dataset.section;
        const value = element.dataset.value;
        element.textContent = text[section][value];
    }
}

btnLanguageMenuSmall.addEventListener('click', ()=>{
    langOptions.classList.toggle('change-language--show');
});

btnHamburger.addEventListener('click', ()=>{
    desMenu.classList.toggle('desplegable-menu--show');
    langOptions.classList.remove('change-language--show');
});

document.addEventListener('click', (e)=>{
    if(e.target.closest('#section-item-language') === null && e.target.closest('#section-language-content') === null){
        languageContent.classList.remove('language-content--show');
    }
    if(e.target.closest('#option-languages-desplegable-menu') === null && e.target.closest('#hamburger-btn') === null && e.target.closest('#btn-option-languages') === null){
        desMenu.classList.remove('desplegable-menu--show');
        langOptions.classList.remove('change-language--show');
    }
});

btnLanguage.addEventListener('click', ()=>{
    languageContent.classList.toggle('language-content--show');
});

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(stateIconMode){
        toggleIcon.src = './assets/icon/sun-regular.svg'
        toggleText.textContent = 'light mode'
        stateIconMode = !stateIconMode;
    } else{
        toggleIcon.src = './assets/icon/moon-regular.svg'
        toggleText.textContent = 'Dark mode';
        stateIconMode = !stateIconMode;
    }
});

btnEnglish.addEventListener('click', ()=>{
    languageContent.classList.remove('language-content--show');
    changeLanguage("en");
})

btnSpanish.addEventListener('click', ()=>{
    languageContent.classList.remove('language-content--show');
    changeLanguage("es");
});

