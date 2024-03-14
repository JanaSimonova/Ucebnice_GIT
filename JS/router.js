import { pagesData } from "./pages.js";
import QuizModule from './QuizModule.js';

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = () => {

    const path = window.location.pathname;
    const pathString = path.substring(1)

    const aside = `<div id="aside" class="hidden"></div>`
    const learnText = `<div id="learntext" class="learn-text"></div> `
    const container =  `<div id="learn-container" class="learn-container"></div>`

    const page = Object.values(pagesData).find(page => page.url === path) || pagesData.notFound;

    const html = page.html;

    // find path route in pagesData
    // const kapitolaExists = routes[path] != null;
    const kapitolaExists = Object.values(pagesData).find(page => page.url === path);


    if (kapitolaExists && (pathString.includes("kapitola"))) {
        // možná neni potřeba ten uvod

        document.getElementById("main").innerHTML = container;

        document.getElementById("learn-container").innerHTML = aside;
        document.getElementById("learn-container").innerHTML += learnText
        document.getElementById("learntext").innerHTML += html // kapitola

        // function ↓ (div id=aside, path=url)
        generateAside(document.getElementById("aside"),path);

        // if 
        if (page.quiz && page.quiz.length > 0) {
            const quiz = new QuizModule(page.quiz, "learntext");
            quiz.generate();
        }
        
        
    }
    else {
        document.getElementById("main").innerHTML = html;
        document.getElementById("header").classList.toggle("toggle-aside-hidden");
        
    }
    document.title = page.title
    window.scrollTo(0,0)
};


window.onpopstate = handleLocation;
window.route = route;


handleLocation();



function generateAside(asideContainer, url) {

    const aside = document.createElement("aside");
    const ul = document.createElement("ul");

    for (const key in pagesData) {
        const page = pagesData[key];
        // pokud url není jen / a není null = vytvori se aside
        if (page.url !== "/" && page.url !== null && page.url !== "/o-webu" && page.url !== "/prikazy") {
            const a = document.createElement("a");
            a.href = page.url;
            a.textContent = page.aside;
            a.onclick = route;
            if(page.url == url){
                a.classList.add("current")
            }

            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    aside.appendChild(ul);
    asideContainer.appendChild(aside);
}

