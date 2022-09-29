const toggleTheme=document.getElementById("toggle-theme"),toggleIcon=document.getElementById("toggle-icon"),toggleText=document.getElementById("toggle-text"),sections=document.getElementById("section-page"),btnLanguage=document.getElementById("section-item-language"),languageContent=document.getElementById("section-language-content"),btnSpanish=document.getElementById("spanish-language"),btnEnglish=document.getElementById("english-language"),textInPage=document.querySelectorAll("[data-section]"),btnHamburger=document.getElementById("hamburger-btn"),desMenu=document.getElementById("desplegable-menu"),langOptions=document.getElementById("change-language-options"),btnLanguageMenuSmall=document.getElementById("btn-option-languages"),btnSpanishSmallMenu=document.getElementById("spanish-language-small-menu"),btnEnglishSmallMneu=document.getElementById("english-language-small-menu");let stateIconMode=!0;const changeLanguage=async e=>{let t=await fetch(`./languages/${e}.json`),n=await t.json();for(let a of textInPage){let g=a.dataset.section,l=a.dataset.value;a.textContent=n[g][l]}};btnSpanishSmallMenu.addEventListener("click",()=>{changeLanguage("es")}),btnEnglishSmallMneu.addEventListener("click",()=>{changeLanguage("en")}),btnLanguageMenuSmall.addEventListener("click",()=>{langOptions.classList.toggle("change-language--show")}),btnHamburger.addEventListener("click",()=>{desMenu.classList.toggle("desplegable-menu--show"),langOptions.classList.remove("change-language--show")}),document.addEventListener("click",e=>{console.log(e.target),null===e.target.closest("#section-item-language")&&null===e.target.closest("#section-language-content")&&languageContent.classList.remove("language-content--show"),null===e.target.closest("#option-languages-desplegable-menu")&&null===e.target.closest("#hamburger-btn")&&null===e.target.closest("#btn-option-languages")&&"desplegable-menu"!==e.target.id&&(desMenu.classList.remove("desplegable-menu--show"),langOptions.classList.remove("change-language--show"))}),btnLanguage.addEventListener("click",()=>{languageContent.classList.toggle("language-content--show")}),toggleTheme.addEventListener("click",()=>{document.body.classList.toggle("dark"),stateIconMode?(toggleIcon.src="./assets/icon/sun-regular.svg",toggleText.textContent="light mode",stateIconMode=!stateIconMode):(toggleIcon.src="./assets/icon/moon-regular.svg",toggleText.textContent="Dark mode",stateIconMode=!stateIconMode)}),btnEnglish.addEventListener("click",()=>{languageContent.classList.remove("language-content--show"),changeLanguage("en")}),btnSpanish.addEventListener("click",()=>{languageContent.classList.remove("language-content--show"),changeLanguage("es")});