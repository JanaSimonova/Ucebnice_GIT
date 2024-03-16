import { pagesData } from "./pages.js";
import QuizModule from './QuizModule.js';
import examModule from './examModule.js'

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = () => {

    const path = window.location.pathname;
    const pathString = path.substring(1)

    const container = document.createElement('div');
    container.id = 'learn-container';
    container.className = 'learn-container';
    
    const aside = document.createElement('aside');
    aside.id = 'aside';
    aside.className = 'hidden';
    
    const learnText = document.createElement('div');
    learnText.id = 'learntext';
    learnText.className = 'learn-text';


    const page = Object.values(pagesData).find(page => page.url === path) || pagesData.notFound;

    const html = page.html;

    // find path route in pagesData
    const kapitolaExists = Object.values(pagesData).find(page => page.url === path);


    if (kapitolaExists && (pathString.includes("kapitola"))) {
        
        document.getElementById("main").innerHTML = '';
        document.getElementById("main").appendChild(container);

        document.getElementById("learn-container").appendChild(aside); 

        document.getElementById("learn-container").appendChild(learnText)

        document.getElementById("learntext").innerHTML = html;

        // // function ↓ (div id=aside, path=url)
        generateAside(document.getElementById("aside"), path);

        if (page.quiz && page.quiz.length > 0) {
            // makes instance of class QuizModule
            const quiz = new QuizModule(page.quiz, "learntext");
            quiz.generate();
        }

        if (page.exam && page.exam.length > 0) {
            const exam = new examModule(page.exam, "learntext");
            exam.generate2();
        }
    }
    else {
        document.getElementById("main").innerHTML = html;

    }
    document.title = page.title
    window.scrollTo(0, 0)
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
            if (page.url == url) {
                a.classList.add("current")

                const header = document.getElementById("header");
                header.classList.remove("active");
            }

            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    aside.appendChild(ul);
    asideContainer.appendChild(aside);
}

