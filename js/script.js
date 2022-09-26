const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const sections = document.getElementById('section-page');
const btnLanguage = document.getElementById('section-item-language');
const languageContent = document.getElementById('section-language-content');
const btnSpanish = document.getElementById('spanish-language');
const btnEnglish = document.getElementById('english-language');
const textInPage = document.querySelectorAll("[data-section]");


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


document.addEventListener('click', (e)=>{
    if(e.target.closest('#section-item-language') === null && e.target.closest('#section-language-content') === null){
        languageContent.classList.remove('language-content--show');
    }
});

btnLanguage.addEventListener('click', ()=>{
    languageContent.classList.toggle('language-content--show');
});

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.classList.contains('fa-moon')){
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        toggleText.innerHTML = 'light mode'
    } else{
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
        toggleText.innerHTML = 'Dark mode';
    }
});

btnEnglish.addEventListener('click', ()=>{
    languageContent.classList.remove('language-content--show');
    changeLanguage("en");
})

btnSpanish.addEventListener('click', ()=>{
    languageContent.classList.remove('language-content--show');
    changeLanguage("es");
})