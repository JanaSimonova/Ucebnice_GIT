const pagesData = {
    notFound: {
        html: `
        <div class="error">
        <h1>Error 404: Stránka nebyla nalezena</h1>
        <p>Ale ne! Vypadá to, že tato stránka neexistuje. </p>
        <a href="/"> Zpět na hlavní stranu </a>
        </div>
        <script>
            document.title = "Error"
        </script>

        `,
        title: "Error 404",
        url: null,
    },
    index: {
        html: ` 
        <div class="landing">
            <div class="container">
                <img src="images/miscellaneous/landing-image.svg" class="landing-image" />
            
        
            
                <div class="text-box">
                    <h1>GIT</h1>
                    <p>Nejpoužívanější verzovací systém na světě. </p> 
                        <a href="/uvod">Nauč se ho používat i ty!</a> 
                </div>
            </div>
        </div>
        `,
        title: "Učebnice GITu",
        url: "/",
    },
    uvod: {
        html: `

        <h1>Úvod</h1>
        <p>Git je nejrozšířenější verzovací systém, pomáhá miliónům programátorů při jejich práci. 
            Snadno se používá, je lehký na pochopení a je zdarma. </p>
        <p class="text-info">Verzovací systém = systém správy historie souborů, verzí</p>
        <p>Anglicky: Version Control System, VCS.</p>
        <p>Tento systém ukládá všechny změny do speciální databáze a můžete se kdykoliv podívat a vrátit se do starší verze projektu/souboru.</p>
        <p>Také můžete vytvářet tzv. větve, což jsou takové "odchylky" od hlavní cesty práce. 
            To se dá využít například když zkoušíte nový design a nechcete ztratit předchozí verzi.</p>
        <p>S Gitem velmi často také pracují týmy více lidí.
            Možnost větvení je proto skvělé řešení, protože každý člen má jen svou větev a tvoří si vlastní změny.</p>
        <div class="parent">
            <img src="images/uvod/git_branch.webp" class="learn-img-big">  <!-- dole https://www.g2.com/compare/phpstorm-vs-gitkraken-client -->
            <div class="image-descr">Příklad větvení v aplikaci GitKraken</div>
        </div>

        <!-- <h2>Verzovací systém</h2>
        <p>neco o VCS </p>
        <a href="https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20Control%20Systems%20(VCS,control%20are%20as%20follows.">
            odkaz</a> -->

        <h2>Výhody VCS</h2>
            <h3>Kompletní historie změn každého souboru</h3>
                <p>Zaznamenávají se všechny změny. Vytváření, mazání a úprava souborů. Díky tomu se můžete kdykoliv vrátit a podívat se na provedené změny.</p>
                <p>Změny se značí krátkými popisky, aby bylo snadné se v nich vyznat.</p>
                <p class="text-info"><b>Pozor!</b> Nezaznamenává se vše při každém uložení souboru. Uživatel si sám určuje kdy a co se bude zálohovat.</p>            
            <h3>Větvení</h3>
                <p>Je skvělé při práci v týmech, ale může se hodit i samostatnému vývojáři. Provedené změny jsou pouze na jedné větvi.
                    Větve se dají zase spojovat dohromady, což umožňuje zkontrolovat kolize mezi nimi a řešit je.
                    Každý pracovník tak může pracovat na svojí větvi, a ty se pak spojí do jedné.</p>
            <h3>Oprava chyb</h3>
                <p>Při výskytu chyby se můžete jednoduše podívat do historie a najít, čím je chyba způsobena.</p>


        <h2>Druhy VCS</h2>
        <!-- https://digilib.k.utb.cz/bitstream/handle/10563/41264/novos%C3%A1d_2017_dp.pdf?sequence=1&isAllowed=y -->
            <h3>Centralizované (CVCS)</h3>
                <p>Existuje jeden centrální server, na kterém je kompletní historie změn. Každý uživatel má na svém počítači jen nejaktuálnější verzi.</p>
                <p class="margin_top">Výhodou je, že všichni členové mohou vidět, na čem pracují ostatní, a je jednodušší na naučení. Administrátoři mohou definovat různá oprávnění.</p>
                <p class="margin_top">Nevýhodou je, že při výpadku centrálního serveru nelze ukládat ani stahovat žádné verze, a při poškození dat na serveru je vše pryč.</p>
                <ul>
                    <li>Subversion</li>
                    <li>CVS</li>
                    <li>Perforce</li>
                </ul>
                <div class="parent">
                    <img src="images/uvod/VCS-centralized.png" class="learn-img-small"> </div>
                    <!-- https://www.researchgate.net/figure/Centralized-Version-Control-vs-Distributed-Version-Control_fig2_316553817 -->
                    
            <h3>Distribuované (decentralizované, DVCS)</h3>
                <p>Nemá centrální databázi, každý uživatel má celou kopii u sebe. Poté změny "pushne" do sítě, nebo centrálního repozitáře.</p>
                <p class="text-info">Repozitář = úložiště s historií všech uložených změn, všechny soubory a složky, celý "projekt"</p>
                <p class="margin_top">Hlavními výhodami je možnost pracovat offline, protože každý uživatel má celý repozitář na svém počítači, což urychluje proces. 
                    Snadnější přepínání mezi větvemi a verzemi, řešení konfliktů. Větší bezpečnost.</p>
                <p class="margin_top">Nevýhodou je pak trochu složitější fungování, stále ale určitě pochopitelné.</p>
                <ul>
                    <li><b><u>Git</u></b></li>
                    <li>Mercurial</li>
                    <li>Bazaar</li>
                </ul>
                <div class="parent">
                    <img src="images/uvod/VCS-decentralized.png" class="learn-img-small"> </div>

        <h2>Další verzovací systémy</h2>
        <h3>Kdjfkl</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum! Incidunt quos eum corrupti, rem architecto ipsum ducimus 
            consectetur sequi adipisci, beatae obcaecati debitis eaque qui atque eveniet dolores harum.</p>
        `,
        title: "Git - Úvod",
        url: "/uvod",
        aside:"Úvod"
    },
    kap1: {
        html: `   
        <h1>Ověření instalace</h1>
        
        <p class="margin_top">Pro ověření, zda Git nemáme už nainstalovaný, do Příkazového řádku (Command prompt) napíšeme tento příkaz: </p>
        <p class="code">git --version </p>
        <!-- <br>Nebo zkráceně: <br> git -v -->

        <p>Pokud máme Git už nainstalovaný, zobrazí se vaše aktuální verze:</p>
        <div class="parent">
            <img src="/images/kap1/git--version_installed.jpg" class="learn-img-small">
        </div>
        <p>Pokud ještě nemáme, příkaz nebude rozpoznán:</p>
        <div class="parent">
            <img src="/images/kap1/git--version_not_installed.jpg" class="learn-img-medium">
        </div>

        <h1>Instalace</h1>
        
        <h2 style="margin-top:5px;">Git na Windows</h2>
        <h3>Stáhněte si nejnovější verzi Gitu na <a href="https://git-scm.com" class="underline" >git-scm.com</a> </h3>
        <div class="parent">
            <img src="/images/kap1/git_download2.jpg" class="learn-img-big">
        </div>
        
        <h3>Průvodce instalací:</h3>
        <p><b>Který editor vybrat: </b>Nejlepší je asi VS Code editor, když programujete ve Visual Studio Code, konzoli máte přímo v aplikaci??REAL??. 
        HLAVNě: při některých příkazech se bude otevírat soubor ve VSCode, přehledný. Vim editor se otevírá přímo v konzoli a je složitější na práci.
        Na Macu možná Sublime text. Později to ale lze změnit.</p>
        <div class="parent">
            <img src="/images/kap1/git_editor_choose.jpg" class="learn-img-medium">
        </div>
        <p><b>Jak pojmenovat defaultní branch: </b>Můžete použít starý název Master nebo novější a více používaný Main. Nebo úplně vlastní, ale to se moc nedělá.</p>
        <div class="parent">
            <img src="/images/kap1/git_branch_name.jpg" class="learn-img-medium">
        </div>
        <p><b>Ostatní: </b>Zbytek stačí už jen proklikat, nebo můžete případně vygooglit. A je to!</p>
        <div class="parent">
            <img src="/images/kap1/git_setup_finish.jpg" class="learn-img-medium">
        </div>

        <h2>Git na Linux Ubuntu</h2>
        <p>Do terminálu napište tyto příkazy:</p>
        <div class="parent">
            <img src="/images/kap1/git_install_linux.jpg" class="learn-img-big">
        </div>
    `,
        quiz: [
            {
                question: "Jak ověříme, zda máme Git nainstalovaný?",
                answers: ["git --version", "git -v", "git --help"],
                correctAnswer: 1,
            },
        ],
        title: "Git - Instalace",
        url:"/kapitola-1-instalace",
        aside:"Instalace"

    },
    kap2: {
        html: `
        
        <h1>Základní příkazy</h1>
        <p>Základní příkazy Gitu jsou stejné jako v Linuxu. Pro ukázky je použita aplikace Git Bash, která se instaluje spolu s Gitem. Můžete použít také terminal ve VSCode, který přepnete vpravo na Git Bash.</p>
        
        <h3>ls</h3>
        <p><b>List files.</b> Tento příkaz nám vypíše složky a soubory ze složky ve které se nacházíme. Výchozí složkou je náš adresář, tedy C:/Users/&ltjméno&gt. </p>
        <div class="parent">
            <img src="/images/kap2/ls2.jpg" class="learn-img-big" >
        </div>

        <h3>pwd</h3>
        <p><b>Print Working Directory.</b> Vypíše cestu ke složce, kde se právě nacházíme.</p>
        <div class="parent">
            <img src="/images/kap2/pwd.jpg" class="learn-img-big">
        </div>

        <h3>cd</h3>
        <p><b>Change directory.</b> Změní aktuální složku na jinou. Musí to být ale složka, která je v té, ve které se právě nacházíme.</p>
        <!-- Nebo se muze napsat Documents/test/ -->
        <p>Samotné <b>cd</b> nás odkudkoliv přepne do výchozí složky = domovská složka uživatele.</p>
        <div class="parent">
            <img src="/images/kap2/cd.jpg" class="learn-img-big">
        </div>

        <h3>cd . .</h3>
        <p>Změní aktuální složku na nadřazenou.</p>
        <div class="parent">
            <img src="/images/kap2/cd...jpg" class="learn-img-big">
        </div>
        
        <h3>mkdir</h3>
        <p><b>Make directory.</b> Vytvoří složku.  </p>
        <div class="parent">
            <img src="/images/kap2/mkdir.jpg" class="learn-img-big">
        </div>

        <h3>rmdir</h3>
        <p><b>Remove directory.</b> Odstraní jen prázdnou složku.  </p>
        <div class="parent">
            <img src="/images/kap2/rmdir.jpg" class="learn-img-big">
        </div>

        <h3>rm -r</h3>
        <p>Odstraní složku i s obsahem  </p>

        <h3>touch</h3>
        <p>Vytvoří soubor.  </p>
        <div class="parent">
            <img src="/images/kap2/touch2.jpg" class="learn-img-big" > <br>
            <img src="/images/kap2/touch(fileexp).jpg" class="learn-img-big" >
        </div>

        <h3>rm</h3>
        <p>Odstraní soubor.  </p>
        <div class="parent">
            <img src="/images/kap2/rm.jpg" class="learn-img-big" >
        </div>
    
        <h3>cat</h3>
        <p>Vypíše obsah souboru</p>
        <div class="parent">
            <img src="/images/kap2/cat.jpg" class="learn-img-big" ><br>
            <img src="/images/kap2/cat-file.jpg" class="learn-img-small" >
        </div>
        `,
        quiz: [
            {
                question: "Jakým příkazem změníme aktuální složku?",
                answers: ["ls", "cat", "cd"],
                correctAnswer: 3,
            },
            {
                question: "Co děla příkaz touch?",
                answers: ["vytvoří soubor", "vypíše obsah souboru", "odstraní soubor"],
                correctAnswer: 1,
            }
        ],
        title: "Git - Základní příkazy",
        url:"/kapitola-2-zakladni-prikazy",
        aside:"Základní příkazy"

    },
    kap3: {
        html: `

            <h1>Založení jména a emailu</h1>
            <p>Pokud chceme používat Git, musíme si nejdříve uložit/založit jméno a email. Jméno se zobrazuje u každé provedené změny, aby bylo vidět, kdo změnu provedl.
                Email se později propojuje s GitHubem(??real).</p>
            <p>Otevřeme si Git Bash, příkazový řádek (cmd) nebo Terminal ve VSCode. Do konzole napíšeme tento příkaz: </p>

            <p class="code"> git config --global user.name "vaše jméno" </p>

            <p>Do uvozovek napíšeme jméno i příjmení, můžeme použít i mezery. Pokud po odentrování nedostaneme žádný eror, akce proběhla úspěšně. Zkontrolujeme pomocí: </p>
            <p class="code"> git config --global user.name </p>

            <p>Stejným způsobem teď nastavíme email:</p>
            <p class="code"> git config --global user.email "váš email" </p>

            <br>
            <h1>První inicializace</h1>
            <p>Abychom mohli používat Git, zaznamenávat změny a ukládat historii, potřebujeme <b>inicializovat složku.</b>
                Inicializovaná složka se nazývá <b>repozitář</b>.</p>
            <div class=text-info> Repozitář = inicializovaná složka, ve které <i>funguje/je/běží/ <b>pracujeme s </b></i> Gitem </div>
            <p>Složka se inicializuje příkazem <b>git init:</b> </p>
            <div class="parent" style="color:red">
                <img src="/images/kap3/init.jpg" class="learn-img-big" >
            </div>
            <p>Zde máme ukázku toho, jak v terminálu vypadá, když jsme v inicializované složce. Za cestou ke složce vidíme v závorce slovo <b>main</b>. To je náš název hlavní větve.</p>
            <div class="parent">
                <img src="/images/kap3/git_initialized.jpg" class="learn-img-big" >
            </div>
            <p>Takto vypadá repozitář v průzkumníku souborů. Přibyla zde skrytá složka s názvem <b>.git</b>. V ní se bude ukládat všechna naše historie a různé soubory Gitu.</p>
            <div class="parent">
                <img src="/images/kap3/git_initialized_pruzkumnik.jpg" class="learn-img-medium" >
            </div>
            <p>A můžeme se pustit do práce (s Gitem)!</p>
            `,
        quiz: [
            {
                question: "Čím se inicializuje složka?",
                answers: ["initialize git", "git init", "git --init"],
                correctAnswer: 2,
            },
        ],
        title: "Git - Inicializace",
        url:"/kapitola-3-inicializace",
        aside:"Inicializace"
    },
    kap4: {
        html: `

            <h2 style="color: red";> ROZPOZNÁVAT KDY JE V PŘÍKAZU "" A KDY JEN SLOVO, píšu to stejně. 
            Změna=např. \< nazev souboru \>  == nwbo neřešit. <br><br>
            UDělat barevně h3?? <br><br> Dořešit label result u kvizu - position a cursor
            </h2>

            <h1>Commit</h1>
            <h3>Co je to commit?</h3>
            <p>Commit je základní prvek verzovacího systému. Je to záznam (snapshot) o změnách, které jsme provedli.
            Každý commit má popisek, který by měl být krátký a výstižný. 
            Všechny commmity se ukládají do historie projektu.
            Díky tomu se můžeme kdykoliv vrátit zpět a podívat se, jak projekt vypadal v minulosti. 
            Je dobré dělat commity celkem často nebo po logických částech, aby bylo snadnější se vyznat ve změnách a vrátit se k nim.</p>
            <div class=text-info> Commit = záznam o změnách uložený do historie projektu </div>


            Při commitování pracujeme ve třech fázích:
            <div class="parent">
                <img src="/images/kap4/git_commit_scheme.png" class="learn-img-medium">
            </div>

            <!-- https://dev.to/sublimegeek/git-staging-area-explained-like-im-five-1anh -->

            <p> <b>Working directory </b> je složka, ve které pracujeme. Vytváříme soubory, upravujeme obsah, atd. 
            Poté se rozhodneme, že chceme nějaké změny uložit. Nejdříve je musíme přidat do tzv. <b>Staging Area </b>. 
            To je taková přípravná plocha, kam se dávají soubory připravené na commit. Můžeme tam přidat všechny upravené soubory najednou, nebo jen některé.
            Když máme všechny soubory, které chceme uložit, provedeme <b>commit</b> a vytvoří se záznam do historie. </p>
            
            <p class="margin_top">Do Staging Area přidáme <b>soubor</b> tímto příkazem: </p>
            <p class="code">git add "název souboru" </p>
            
            <p> Můžeme také přidat <b>více souborů</b> najednou, stačí do uvozovek napsat názvy souborů oddělené mezerou, např.: </p>
            <p class="code">git add "soubor1.txt soubor2.txt soubor3.txt"</p>

            <p>Pro přidání <b>všech změněných souborů</b> najednou použijeme příkaz: </p>
            <p class="code">git add . </p>

            <p>Jestliže jsme omylem do Staging Area přidali soubor, který nechceme teď commitovat, <b>odebereme</b> ho příkazem: </p>
            <p class="code">git restore --staged "nazev souboru" </p>

            <br>
            <p>Pokud už máme připravené všechny soubory, které chceme <b>commitnout</b>, napíšeme tento příkaz:</p>
            <p class="code">git commit -m "popisek" </p>

            <br>
            <h3>Cyklus stavu souboru </h3>
            Máme 4 stavy souboru:
            <ul>
                <li>Untracked - nesledovaný soubor</li>
                <li>Unmodified/Commited - nezměněný = commitnutý</li> 
                <li>Modified - změněný, upravený soubor</li>
                <li>Staged - připravený soubor na commit</li>
            </ul>
            <div class="parent no-border-radius">
                <img src="images/kap4/git-lifecycle.png" class="learn-img-wide-medium ">
            </div>
            <p>Když vytvoříme nebo přidáme <b>nový soubor</b>, je <b>Untracked</b> - nesledovaný. A to i když ho upravíme. Pro Git je to (prostě) nový soubor, který ještě nikdy nebyl zaznamenáván.
            Pak ho přidáme do Staging area (přípravná plocha) - soubor je <b>Staged</b>, připravený na commit. 
            Provedeme <b>commit</b> a soubor je <b>Unmodified/Commited</b> - neupravený, commitnutý. Když ho znovu <b>upravíme</b>, stane se už <b>Modified</b> - upravený.
            A ten zase dáme do Staging Area a commitneme, a tak stále dokola.</p>
            <p>Soubor můžeme také <b>přestat sledovat</b> (šipka "Remove the file"). Soubor se nám neodstraní ze složky, pouze se přestane sledovat, jako kdyby byl nový.
            To se dělá příkazem: </p>
            <p class="code">git rm --cached "název souboru"</p>

            
            <br>
            <h3>Stav souborů</h3>
            <p> Pro zobrazení stavu souborů v našem repozitáři existuje chytrý příkaz <b>git status</b>. 
            Ten nám ukáže, jaké soubory jsme od posledního commitu přidali, upravili, smazali, nebo jaké soubory máme ve Staging Area. 
            Pokud žádné změny ještě neproběhly, konzole vypíše, že není nic ke commitování.</p>
            <p class="code">git status </p>

            <p>Zdě můžeme vidět upravený a už také stagenutý soubor "test.txt" a nově vytvořený, nesledovaný, soubor "new-file.txt":</p>
            <div class="parent">
                <img src="/images/kap4/git_status.jpg" class="learn-img-wide-medium">
            </div>

            <!-- Grafická ukázka/ vyobrazení commitů -->

            <h3>Grafické zobrazení commitů</h3>
            <p>Abychom si lépe představili, jak vypadá náš repozitář s commity, můžeme si ho graficky znázornit. 
            Jednotlivé commity se zobrazují jako <b>kolečka spojená linkou</b>. 
            Na těchto ilustracích se ukazuje, jak fungují různé příkazy, co se děje s commity atd.
            Aktuální commit, na kterém se právě nacházíme (poslední, co jsme provedli) se označuje <b>HEAD</b>, také ukazatel nebo pointer. 
            <b>Main</b> (v minulosti master) je hlavní větev, <b>Feature</b> je druhá větev.</p>
            <div class="parent">
                <img src="/images/kap4/commits-ilustrated.png" class="learn-img-medium">
            </div>


            
            <h3>Historie commitů</h3>
            <p>Všechny commity se ukládají v našem repu a proto se můžeme kdykoliv podívat na jejich seznam.

            Příkaz <b>git&nbsplog</b> nám umožňuje <b>prohlížet historii</b> commitů v repozitáři. 
            Každý výpis commitu obsahuje jeho unikátní, 40 písmenný hash. Je to něco jako jeho ID, poznávací číslo. 
            Dále obsahuje jméno a email autora (které jsme zadávali v kapitole <a href="/kapitola3" >Inicializace</a>), 
            datum vytvoření a popisek. Nejnovější, poslední, commit je uplně nahoře, první uplně dole.</p>

            <p style="color:grey;">JE to DULEzity?? Pokud jsme ještě žádný commit neprovedli a máme úplně nové repo, zobrazí se error: your current branch 'main' does not have any commits yet.</p>

            <div class="parent">
                <img src="/images/kap4/git_log.jpg" class="learn-img-big">
            </div>

            <p>Můžeme také použít zkrácenou formu <b>git log --oneline</b>, která vypíše zkrácený 7 písmenný hash commitu a popisek, vše hezky na <b>jednom řádku</b>. 
            To usnadňuje procházení historie commitů, což se vyplatí, když už máme commitů hodně.</p>

            <div class="parent">
                <img src="/images/kap4/git_log_oneline.jpg" class="learn-img-wide-medium">
            </div>

            <p>Později se vám také určitě stane to, že konzole neukáže všechny řádky, ale na konci zůstane jen <b>dvojtečka</b>. 
            Není to žádná chyba, nebo zaseknutí, je to zcela normální. Znamená to, že výpis má více řádků než se vejde do okna konzole.
            Pokračování výpisu spustíte stiskem <b>mezerníku</b>, výpis jednoho dalšího řádku enterem. Poté ale stále nebudete pryč, tentokrát se zobrazuje <b>(END)</b>. 
            Odsud vyjdete zase do normální konzole stiskem <b>klávesy Q</b>.</p>
            
            <div class="parent">
                <img src="/images/kap4/git_log_notfull.jpg" class="learn-img-medium ">
                <br>
                <img src="/images/kap4/git_log_end.jpg" class="learn-img-medium ">
            </div>
            
            
            <h3>Upravení posledního commitu</h3>
            <p>Pokud se nám stane, že provedeme commit, ale <b>zapomněli</b> jsme do něj například přidat soubor, nebo jsme commit špatně pojmenovali, můžeme to ještě napravit.
            To lze ale <b>pouze s posledním</b> commitem.
            Pomůže nám příkaz: </p>
            <p class="code">git commit --amend</p>
            <p>Zapomenutý <b>soubor</b> nejdříve přidáme do <b>StageArea</b> jako kdybychom dělali normální commit. 
            Napíšeme příkaz a otevře se soubor COMMIT_EDITMSG.
            Na <b>prvním řádku</b> je náš <b>popisek</b> posledního commitu. Ten můžeme také přepsat, pokud potřebujeme. 
            Kousek níže si zkontrolujeme, jestli v "Changes to be commited" máme ten soubor, který jsme zapomněli.
            Pak křížkem soubor <b>zavřeme</b>, tím se <b>potvrdí</b> změny commitu. Můžeme zkontrolovat git log, že se commit opravil. </p>
            
            <div class="parent">
                <i>Zde vidíme nepřidaný soubor soubor3.txt, ale poslední commit má v názvu, že se přidal</i> <br>
                <img src="/images/kap4/git-amend1.jpg" class="learn-img-big "> <br>
                <i>Přidali jsme soubor do StageArea a napsali amend. Otevřel se soubor COMMIT_EDITMSG, zkontrolovali jsme změny</i> <br>
                <img src="/images/kap4/git-amend2.jpg" class="learn-img-big "> <br>
                <i>Commit se opravil, název zůstal stejný</i> <br>
                <img src="/images/kap4/git-amend3.jpg" class="learn-img-wide-medium ">
            </div>

            <p>Jestliže chceme změnit jen popisek commitu, nemusíme otevírat celý soubor. 
            Stačí příkaz napsat podobně, jako píšeme normální commit:</p>
            <p class="code">git commit --amend -m "novy popisek"</p>

            
            <h3>Smazání commitu</h3>
            <p>Pro smazání commitu existují <b>3 možnosti</b>: soft, mixed a hard.
            Tyto možnosti určují, jaké změny jsou zachovány v pracovní složce po provedení příkazu <b>git reset</b>. 
            K němu se připisuje, který typ chceme a na který commit se chceme přesunout. 
            Můžeme napsat zkrácený hash commitu, nebo "HEAD~1", což znamená předchozí commit.</p>

            <li> <b>Soft</b> = přesune aktuální pozici (head) na zadaný commit a zároveň zachová provedené změny ve StagingArea

            <li> <b>Mixed</b> = přesune head na zadaný commit, změny zachová, ale ne ve StagingArea. Výchozí možnost

            <li> <b>Hard</b> = úplně smaže poslední commit i se všemi provedenými změnami = nebezpečné, nedá se vrátit

            <p class="margin_top">Příkaz, který se používá je tento: </p>
            <p class="code"> git reset --soft "hash commitu" </p>
            <p> Jiný způsob může být: </p>
            <p class="code"> git reset --hard HEAD~1 </p>
            

            <h3>Info o commitu</h3>
            <p>V konzoli si můžeme příkazem ukázat informace o jednom commitu. 
            Vypíše se info jako s git log a k tomu provedené změny v souborech.
            Není to ale moc přehledné, takže to nejspíš moc používat nebudete. Kdyby přeci jen, příkaz je následující:</p>
            <p class="code">git show "hash commitu"</p>


            <h3>Přepínání commitů</h3>
            <p>Přepínání commitů je vlastně to stále zmiňované <b>vrácení se zpět v projektu </b>. 
            Naše pracovní složka a soubory se přepnou do podoby, jakou měly v daném commitu. 
            Pozor! Při přepnutí na commit se nacházíme v tzv. <b>detached HEAD</b> stavu, což znamená, 
            že nejsme na žádné větvi a naše změny se nebudou ukládat do repozitáře, 
            dokud se nepřepneme zpět na aktuální větev, nebo nevytvoříme novou. Přepnutí na poslední commit nepomůže.
            Můžeme dělat změny a zkoušet, ale nedoporučuje se poté dělat commity, je obtížné je najít.</p>
            <p class="code">git checkout "hash commitu"</p>
            Přepnutí zpět do větve:
            <p class="code">git switch "název větve"</p>




             <!--

            <hr style="border-top: 1px solid grey">
            <div style="color:grey;">
            VS CODE: 
            <ul >
            <li style="color:grey;"> Untracked - zelené U </li>
            <li style="color:grey;"> Staged - zelené A (jen když byl ted untracked) </li>
            <li style="color:grey;"> Modified - oranžové M </li>
            <li style="color:grey;"> Commited/Unmodified - nic, bílý text </li>
            </ul>
            </div>
            
            
            <p>Working directory = složka, ve které pracujeme <br>
            Staging Area = přípravná plocha, kam se dávají soubory připravené na commit <br>
            Commit = záznam o změnách, které jsme provedli. </p>
            
            
            <br>
            
            
            <p>Abychom mohli provést commit, potřebujeme nejdříve změněné soubory přidat do tzv. Staging Area.
            Staging Area je taková přípravná plocha, kam se dávají soubory připravené na commit. </p>
            
            <p>Soubory se do Staging Area přidají příkazem:
            <p class="code">git add "název souboru"</p>
            
            EXIT = Q Nepanikařte, pokud se nemůžete dostat pryč. Stačí stisknout klávesu Q a zobrazí se nám zase ...zadavaci plocha..


            -->


            
            
            `,
            quiz: [
            {
                question: "Který příkaz nám ukáže, jaké změny se staly od posledního commitu?",
                answers: ["git log", "git state", "git status"],
                correctAnswer: 3,
            },
            {
                question: "Co označuje head? (v Gitu)",
                answers: ["hlavní větev ", "aktuální commit", "první commit"],
                correctAnswer: 2,
            },
            {
                question: "Co zmáčkneme, pokud nám konzole nevypíše vše?",
                answers: ["mezerník a pak Q", "mezerník a pak X", "enter a pak Z "],
                correctAnswer: 1,
            },
        ],
        title: "Git - Commity",
        url:"/kapitola-4-commity",
        aside:"Commity"
    },
    kap5: {
        html:`
        
        <h1>Branches</h1>
        <p><b>Branch = větev</b>. Jak jsme si už řekli, je to taková odchylka od hlavního toku práce. 
        Ten hlavní tok je ale také větev, a to <b>hlavní větev</b>, pojmenovaná <b>MAIN</b> (nebo master). </p> 
        
        <div class="parent">
            <img src="/images/kap5/branch.png" class="learn-img-wide-medium ">
        </div>

        <p> Další větve se používají například při <b>opravách chyb</b> ve starších commitech, nebo když chceme vyzkoušet nějakou <b>novou funkci</b>. 
        Také se často nepracuje přímo v hlavní větvi, ale ve vedlejších a do hlavní se <b>slučují</b>, aby v ní byl jen čistý a funkční kód.
        To se dá uplatnit i v <b>týmu</b> více lidí, každý pak pracuje s vlastní větví a svým prostředím. </p>


        <h3>Vytvoření větve</h3>
        <p>Novou větev můžeme buď vytvořit přímo na commitu, kde právě jsme, nebo se vrátit na nějaký v historii a tam ji vytvořit.
        Obojí se ale dělá stejným příkazem:</p>
        <p class="code"> git branch <i>nova-vetev</i></p>
        
        <p>Název větve nesmí obsahovat mezery, ale můžeme použít pomlčky, lomítka, čísla a tečky. Více znaků se nedoporučuje kvůli přehlednosti.  <p> 
        <p  class="margin_top" > Při vytvoření větve tímto způsobem stále zůstáváme v naší původní větvi.</p>

        <p class="margin_top">Seznam všech větví si zobrazíme následujícím příkazem:</p>
        <p class="code"> git branch </p>

        <p>Větev, na které se právě nacházíme je označena hvězdičkou a jinou barvou. Na jaké jsme větvi poznáme také podle názvu v závorce za cestou.</p>
        <div class="parent">
            <img src="/images/kap5/branch_name.jpg" class="learn-img-wide-medium ">
        </div>  


        <h3>Přepínání mezi větvemi</h3>
        <p>Na jinou větev přepneme pomocí příkazu:</p>
        <p class="code"> git switch <i>nazev-vetve</i> </p>
        <p>Pozor! Pokud uděláme nějaké změny, necommitneme a chceme se přepnout do jiné větve, git nám to nedovolí, protože by se změny mohly odstranit.<p/>
        <p>Pozor! Pokud uděláme nějaké změny, necommitneme a chceme se přepnout do jiné větve, změny se přepnou i s námi. <p/>

        <p class="margin_top">Příkazem git switch také můžeme vytvořit novou větev a rovnou se do ní přepnout. Jen příkaz trochu upravíme:</p>
        <p class="code"> git switch -c <i>nazev-vetve</i> </p>


        <h3>Přejmenování větve</h3>
        <p>Jestli jsme omylem pojmenovali větev jinak, než jsme chtěli, nemusíme ji hned mazat a vytvářet novou. Můžeme ji přejmenovat. 
        Podmínkou je, že v té větvi musíme být, protože se v příkazu neurčuje, co chceme přejmenovat. </p>
        <p class="code"> git branch -m <i>novy-nazev</i> </p>
        

        <h3>Smazání větve</h3>
        <p>Prázdná větev bez commitů se maže příkazem:</p>
        <p class="code"> git branch -d <i>nazev-vetve</i> </p>

        <p>Pokud už máme ve větvi commity, tímto příkazem se nám to nepodaří. Git nám sám poradí napsat velké D a důvod "The branch '<i>nazev-vetve</i>' is not fully merged".
        To znamená právě to, že v ní jsou commity. A co je to to mergování, to se dozvíme v <a href=/kapitola6>příští kapitole</a>.</p>
        <p class="code"> git branch -D <i>nazev-vetve</i> </p>

        
        <!-- https://www.atlassian.com/git/tutorials/using-branches -->

        `,
        quiz: [
            {
                question: "Jakým příkazem si vypíšeme seznam větví?",
                answers: ["git branch", "git show branch", "git branches"],
                correctAnswer: 1
            },
            {
                question: "Jakým příkazem přepneme na jinou větev?",
                answers: ["git alter", "git change", "git switch"],
                correctAnswer: 3
            }

        ],
        title: "Git - Branches",
        url:"/kapitola-5-branches",
        aside:"Branches"

    },
    kap6: {
        html: `
            <h1>udelast swsitch na dark a light rezim</h1>
        
        `,
        quiz: [
            {
                question: "a,fndf",
                answers: ["Sdfsdf", "Sdfdf","ysgf"],
                correctAnswer:1
            }

        ],
        title: "Git - Mergování",
        url:"/kapitola-6-mergovani",
        aside:"Mergování"

    }
}

export { pagesData };