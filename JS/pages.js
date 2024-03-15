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
        <div class="misc-div">
        <div class="misc-container">

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
                    <td>Vypíše obsah složky</td>
                </tr>
                <tr>
                    <td>pwd</td>
                    <td>Vypíše cestu ke složce</td>
                </tr>
                <tr>
                    <td>cd</td>
                    <td>Změní aktuálni složku na jinou</td>
                </tr>
                <tr>
                    <td> cd ..</td>
                    <td> Změní aktuální složku na nadřazenou </td>
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
                    <td>Nastaví jméno</td>
                </tr>
                <tr>
                    <td>git config --global user.email "váš email"</td>
                    <td>Nastaví email</td>
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
                    <td>Přidá soubor do Stage Area</td>
                </tr>
                <tr>
                    <td>git add .</td>
                    <td>Přidá všechny soubory do Stage Area</td>
                </tr>
                <tr>
                    <td>git restore --staged "nazev souboru"</td>
                    <td>Odebere soubor ze Stage Area</td>
                </tr>
                <tr>
                    <td>git commit -m "popisek"</td>
                    <td>Vytvoří commit</td>
                </tr>
                <tr>
                    <td>git status</td>
                    <td>Zobrazí stav souborů</td>
                </tr>
                <tr>
                    <td>git commit --amend</td>
                    <td>Upraví poslední commit</td>
                </tr>
                <tr>
                    <td>git reset ...</td>
                    <td>Smaže commit</td>
                </tr>
                <tr>
                    <td>git checkout "hash commitu"</td>
                    <td>Přepne na commit</td>
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
                    <td>Vypíše seznam větví</td>
                </tr>
                <tr>
                    <td>git branch "nova-vetev"</td>
                    <td>Vytvoří novou větev</td>
                </tr>
                <tr>
                    <td>git switch nazev-vetve</td>
                    <td>Přepne do větve</td>
                </tr>
                <tr>
                    <td>git branch -m novy-nazev</td>
                    <td>Přejmenuje větev</td>
                </tr>
                <tr>
                    <td>git branch -d nazev-vetve</td>
                    <td>Smaže prázdnou větev</td>
                </tr>
                <tr>
                    <td>git branch -D nazev-vetve</td>
                    <td>Smaže větev i s commity</td>
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
                    <td>Merguje vedlejší větev do té, ve které jsme</td>
                </tr>
                <tr>
                    <td>git merge --no-ff vedlejsi-vetev</td>
                    <td>Mergne stylem Non-fast-forward</td>
                </tr>
                <tr>
                    <td>git rebase hlavni-vetev</td>
                    <td>Speciální typ merge</td>
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
                    <td>Vytvoří napojení na repo na GitHubu</td>
                </tr>
                <tr>
                    <td>git remote -v</td>
                    <td>Vypíše napojení</td>
                </tr>
                <tr>
                    <td>git remote remove origin</td>
                    <td>Smaže napojení</td>
                </tr>
                <tr>
                    <td>git push</td>
                    <td>Pošle změny do vzdáleného repozitáře</td>
                </tr>
                <tr>
                    <td>git push --set-upstream origin main</td>
                    <td>Umožní pushovat bez specifikace napojení a větve</td>
                </tr>
                <tr>
                    <td>git pull</td>
                    <td>Stáhne změny z GitHubu do lokálního repozitáře</td>
                </tr>
                <tr>
                    <td>git fetch</td>
                    <td>Stáhne informace o změnách z GitHubu do lokálního repozitáře</td>
                </tr>
                <tr>
                    <td>git clone url-adresa</td>
                    <td>Naklonuje repozitář z GitHubu</td>
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
        <div class="misc-div">
        
        <div class="misc-container">
        
            <h1>O webu</h1>
            <p class="margin_top" >Tento web vznikl jako Individuální maturitní práce. <br>
                Slouží jako učebnice Gitu a GitHubu pro žáky. Jejím cílem je žáky seznámit s verzovacími systémy, seznámit je s Gitem a naučit je s ním pracovat.</p>
                
                <p class="margin_top"> <b>Autor:</b> Jana Šimonová</p>
                <p class="margin_top"> <b>Škola:</b> <a href="https://prumyslovkajicin.cz/" target="_blank">Vyšší odborná škola a Střední průmyslová škola, Jičín &nbsp;<img src="/images/misc/link.svg" style="width: 10px;" > </a></p>
                <p class="margin_top"> <b>Rok vytvoření:</b> 2023/2024</p>
                <p class="margin_top"> <b>Poskytovatel hostingu</b>: <a href="https://www.endora.cz/" target="_blank">Endora.cz &nbsp;<img src="/images/misc/link.svg" style="width: 10px;" > </a></p>
        </div>
        </div>

        `,
        title:"O webu",
        url: "/o-webu"
    },
    ...chaptersData



}

export { pagesData };