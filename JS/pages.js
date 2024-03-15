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
                <img src="images/misc/landing-image.svg" class="landing-image" draggable="false" />   
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
        <div class="table-container">
        <div class="table-div">

            <h1>Příkazy</h1>
            <p>Zde je tabulka nejpoužívanějších příkazů a jejich popis.<br>
                Jsou seřazeny podle toho, jak byly postupně vypsány v seznamu kapitol a rozděleny do kategorií. </p>
                <a href="about.html">abput</a>

            <table>
                <caption>Terminálové příkazy</caption>
                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>
                <tr>
                    <td>ls</td>
                    <td>vypíše obsah složky</td>
                </tr>
                <tr>
                    <td>pwd</td>
                    <td>vypise cestu ke slozce</td>
                </tr>
                <tr>
                    <td>cd</td>
                    <td>Zmeni aktualni slozku na jinou</td>
                </tr>
                <tr>
                    <td>cd ..</td>
                    <td>
                        Změní aktuální složku na nadřazenou
                    </td>
                </tr>
                <tr>
                    <td>mkdir</td>
                    <td>Vytvoří složku</td>
                </tr>
                <tr>
                    <td>rmdir</td>
                    <td>Odstraní prázdnou složku</td>
                </tr>
                <tr>
                    <td>rm -r</td>
                    <td>odstraní složku i s obsahem</td>
                </tr>
                <tr>
                    <td>touch</td>
                    <td>Vytvoří soubor</td>
                </tr>
                <tr>
                    <td>rm</td>
                    <td>Odstraní soubor</td>
                </tr>
                <tr>
                    <td>cat</td>
                    <td>Vypíše obsah souboru</td>
                </tr>
            </table>

            <table>
                <caption>Konfigurační příkazy</caption>

                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>

                <tr>
                    <td>git --version</td>
                    <td>Vypíše aktuální verzi Gitu</td>
                </tr>
                <tr>
                    <td>git config --global user.name "vaše jméno"</td>
                    <td>nastaví jméno</td>
                </tr>
                <tr>
                    <td>git config --global user.email "váš email"</td>
                    <td>nastaví email</td>
                </tr>
                <tr>
                    <td>git init</td>
                    <td>Inicializuje složku</td>
                </tr>
            </table>

            <table>
                <caption>Commity</caption>

                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>

                <tr>
                    <td>git add "název souboru"</td>
                    <td>prida soubor do stage area</td>
                </tr>
                <tr>
                    <td>git add .</td>
                    <td>prida vsechny soubory do stage area</td>
                </tr>
                <tr>
                    <td>git restore --staged "nazev souboru"</td>
                    <td>odebere soubor ze Stage Area</td>
                </tr>
                <tr>
                    <td>git commit -m "popisek"</td>
                    <td>vytvoří commit</td>
                </tr>
                <tr>
                    <td>git status</td>
                    <td>zobrazí stav souborů</td>
                </tr>
                <tr>
                    <td>git commit --amend</td>
                    <td>upravi poslední commit</td>
                </tr>
                <tr>
                    <td>git reset ...</td>
                    <td>smaze commit</td>
                </tr>
                <tr>
                    <td>git checkout "hash commitu"</td>
                    <td>přepne na commit</td>
                </tr>
            </table>

            <table>
                <caption>Branches</caption>

                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>

                <tr>
                    <td>git branch</td>
                    <td>seznam vetvi</td>
                </tr>
                <tr>
                    <td>git branch "nova-vetev"</td>
                    <td>vytvori novou vetev</td>
                </tr>
                <tr>
                    <td>git switch nazev-vetve</td>
                    <td>prepne do vetve</td>
                </tr>
                <tr>
                    <td>git branch -m novy-nazev</td>
                    <td>prejmenuje vetev</td>
                </tr>
                <tr>
                    <td>git branch -d nazev-vetve</td>
                    <td>smaze prazdnou vetev</td>
                </tr>
                <tr>
                    <td>git branch -D nazev-vetve</td>
                    <td>smaze vetev s commity</td>
                </tr>
            </table>

            <table>
                <caption>Mergování</caption>

                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>

                <tr>
                    <td>git merge vedlejsi-vetev</td>
                    <td>merguje vedlejsi vetev do te ve ktere jsme</td>
                </tr>
                <tr>
                    <td>git merge --no-ff vedlejsi-vetev</td>
                    <td>mergne Non-fast-forward</td>
                </tr>
                <tr>
                    <td>git rebase hlavni-vetev</td>
                    <td>speciální typ merge</td>
                </tr>
            </table>

            <table>
                <caption>Remote</caption>

                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>

                <tr>
                    <td>git remote add origin url-adresa</td>
                    <td>vytvori napojeni na repo na githubu</td>
                </tr>
                <tr>
                    <td>git remote -v</td>
                    <td>vypíše napojení</td>
                </tr>
                <tr>
                    <td>git remote remove origin</td>
                    <td>smaze napojeni</td>
                </tr>
                <tr>
                    <td>git push</td>
                    <td>posle změny do vzdáleného repozitáře</td>
                </tr>
                <tr>
                    <td>git push --set-upstream origin main</td>
                    <td>umožní pushovat bez specifikace napojeni a vetve</td>
                </tr>
                <tr>
                    <td>git pull</td>
                    <td>stahne zmeny z GitHubu do lokálního repozitáře</td>
                </tr>
                <tr>
                    <td>git fetch</td>
                    <td>stahne informace o zmenach z GitHubu do lokálního repozitáře</td>
                </tr>
                <tr>
                    <td>git clone url-adresa</td>
                    <td>naklonuje repozitář z GitHubu</td>
                </tr>
            </table>

        </div>
        </div>


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