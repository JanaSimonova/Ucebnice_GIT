import { chaptersData } from "./chapters.js"

const pagesData = {
    notFound: {
        html: `
        <div class="error">
        <h1>Error 404: Stránka nebyla nalezena</h1>
        <p>Ale ne! Vypadá to, že tato stránka neexistuje. </p>
        <a href="/"> Zpět na hlavní stranu </a>
        </div>

        `,
        title: "Error 404",
        url: null,
    },
    index: {
        html: ` 
        <div class="landing">
            <div class="container">
                <img src="images/misc/landing-image.svg" class="landing-image" />   
                <div class="text-box">
                    <h1>GIT</h1>
                    <p>Nejpoužívanější verzovací systém na světě. </p> 
                        <a href="/kapitola-1-uvod">Nauč se ho používat i ty!</a> 
                </div>
            </div>
        </div>
        `,
        title: "Učebnice GITu",
        url: "/",
    },
    prikazy: {
        html: `
        <h1>Příkazy</h1>

        `,
        title:"Příkazy",
        url: "/prikazy"
    },
    about: {
        html: `
        <h1>Abozt thus web</h1>

        `,
        title:"O webu",
        url: "/o-webu"
    },
    ...chaptersData



}

export { pagesData };