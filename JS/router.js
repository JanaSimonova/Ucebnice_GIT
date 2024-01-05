import { notFound, index, uvod, kap1 } from "./pages.js";
import {kapitoly} from "./kapitoly.js";

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "notFound": notFound,
    "/": index,
    "/uvod": uvod,
    "/kap1": kap1,
};


const handleLocation = () => {
    const path = window.location.pathname;
    const pathInt = parseInt(path.substring(1)); //removes slash and parses into int

    // if  the number is more than 0 and in the array of kapitoly
    if (pathInt>0 && pathInt<=kapitoly.length){

        // make dynamic page with number of page
        const html = `
        <div>
            <h1>Vlastní strana</h1>
            <p>Toto je stránka číslo ${pathInt}.</p>
        </div>`;
        document.getElementById("main-page").innerHTML = html;
        
        // + add content of kapitola
        const kapitola = kapitoly[pathInt-1];
        document.getElementById("main-page").innerHTML += kapitola.text;
    }
    // else = if its not a number, and the path matches with route. OR it's not found (not  number of kapitola or not defined path)
    else {
        const html = routes[path] || routes["notFound"];
        document.getElementById("main-page").innerHTML = html;
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();