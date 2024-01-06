import { notFound, index, uvod, kap1, kap2 } from "./pages.js";
import { kapitoly } from "./kapitoly.js";

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "notFound": notFound,
    "/": index,
    "/index": index,
    "/learn" : uvod,
    "/learn/uvod": uvod,  // nefunguje, je to jen napůl načtený
    "/uvod/kap1": kap1,
    "/learn/kap1": kap1,
    "/uvod/kap2": kap2,
    "/learn/kap2": kap2,
};


const handleLocation = () => {
    const path = window.location.pathname;
    const pathInt = parseInt(path.substring(1)); //removes slash and parses into int
    const pathString = path.substring(1)

    // load aside, because it's just loading the content and not reloading full page. So it didn't work anywhere else
    $(function(){
        $("#aside").load("aside.html"); 
    });

    console.log(path)

    // if  the number is in the array of kapitoly
    if (pathInt > 0 && pathInt <= kapitoly.length) {

        // make dynamic page with number of page
        const html = `
        <div>
            <h1>Vlastní strana</h1>
            <p>Toto je stránka číslo ${pathInt}.</p>
        </div>`;
        document.getElementById("main").innerHTML = html;
        
        // + add content of kapitola
        const kapitola = kapitoly[pathInt-1];
        document.getElementById("main").innerHTML += kapitola.text;
        
        // makes a title
        document.title = kapitoly[pathInt-1].title
    }
    // else = when its not a number, and the path matches with route. OR it's not found (not  number of kapitola or not defined path)
    else {
        const html = routes[path] || routes["notFound"];
        document.getElementById("main").innerHTML = html;
        
        // makes a title
        document.title = pathString
        // document.title = kap2[0].title
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();