import { notFound, index, uvod, kap1, kap2, kap3  } from "./pages.js";
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
    "/uvod" : uvod,
    "/kapitola1":kap1,
    "/kapitola2": kap2,
    "/kapitola3": kap3,  // udělat dynamicky do pole
};


const handleLocation = () => {
    const path = window.location.pathname;
    const pathInt = parseInt(path.substring(1)); //removes slash and parses into int
    const pathString = path.substring(1)

    // load aside, because it's just loading the content and not reloading full page. So it didn't work anywhere else
    $(function(){
        $("#aside").load("aside.html"); 
    });

    // console.log(path)

    // if url path is number in array kapitoly
    if (pathInt > 0 && pathInt <= kapitoly.length) {

        // make dynamic page with number of page
        // const html = `
        // <div>
        //     <h1>Vlastní strana</h1>
        //     <p>Toto je stránka číslo ${pathInt}.</p>
        // </div>`;
        // document.getElementById("main").innerHTML = html;
        
        // + add content of kapitola
        const kapitola = kapitoly[pathInt-1];
        document.getElementById("main").innerHTML = kapitola.text;
        
        // makes a title
        document.title = kapitoly[pathInt-1].title
    }

    // else = when its NOT A NUMBER, and the path MATCHES with ROUTE. OR it's NOT FOUND (not  number of kapitola or not defined path)
    else {

        const aside = `<div id="aside"></div>`
        const learnText =   `<div id="learntext" class="learn-text"></div> `
        const html = routes[path] || routes["notFound"];
        const quiz = `<div id="quiz"></div>`

        // console.log(html)

        if(pathString.includes("kapitola") || pathString.includes("learn")  || pathString.includes("uvod") ){
            // možná neni potřeba ten uvod

            document.getElementById("main").innerHTML = aside;
            document.getElementById("main").innerHTML += learnText
            document.getElementById("learntext").innerHTML += html

            if(pathString.includes("kapitola")){
                document.getElementById("learntext").innerHTML += quiz
            }

        }
        else{
            document.getElementById("main").innerHTML = html;            
            // makes a title
            
        }

        // document.title = pathString
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();