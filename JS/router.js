import { pagesData } from "./pages.js";
// import { kapitoly } from "./kapitoly.js";
import QuizModule from './QuizModule.js';

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "notFound": pagesData.notFound,
    "/": pagesData.index,
    "/index": pagesData.index,
    "/uvod": pagesData.uvod,
    "/kapitola1": pagesData.kap1,
    "/kapitola2": pagesData.kap2,
    "/kapitola3": pagesData.kap3,  // udělat dynamicky do pole
    "/kapitola4": pagesData.kap4,
    "/kapitola5": pagesData.kap5,
    "/kapitola6": pagesData.kap6,

    // I can do it like  "/vehicles": "./pages/vehicles.html",
};


const handleLocation = async() => {
    const path = window.location.pathname;
    // const pathInt = parseInt(path.substring(1)); //removes slash and parses into int
    const pathString = path.substring(1)

    // load aside, because it's just loading the content and not reloading full page. So it didn't work anywhere else
    $(function () {
        $("#aside").load("aside.html");
    });

    const aside = `<div id="aside" class="hidden"></div>`
    const learnText = `<div id="learntext" class="learn-text"></div> `
    const container =  `<div id="learn-container" class="learn-container"></div>`

    const page = routes[path] || routes["notFound"];
    const html = page.html;
    const kapitolaExists = routes[path] != null;

    if (kapitolaExists && (pathString.includes("kapitola") || pathString.includes("learn") || pathString.includes("uvod"))) {
        // možná neni potřeba ten uvod

        document.getElementById("main").innerHTML = container;

        document.getElementById("learn-container").innerHTML = aside;
        document.getElementById("learn-container").innerHTML += learnText
        document.getElementById("learntext").innerHTML += html // kapitola

        if (page.quiz && page.quiz.length > 0) {
            const quiz = new QuizModule(page.quiz, "learntext");
            quiz.generate();
        }


    }
    else {
        document.getElementById("main").innerHTML = html;
        document.getElementById("header").classList.toggle("toggle-aside-hidden");
        // makes a title
        // var toggle = document.getElementsByClassName("toggle-aside-open")
        // toggle.style.display = "none";

    }

    document.title = page.title

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();