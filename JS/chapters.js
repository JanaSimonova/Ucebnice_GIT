const chaptersData = {
    kap1: {
        html: `
        <h1>Úvod</h1>
        <p>Git je nejrozšířenější verzovací systém, pomáhá miliónům programátorů při jejich práci. Snadno se používá, je lehký na pochopení a je zdarma. </p>
        <p class="text-info">Verzovací systém = systém správy historie souborů, verzí</p>
        <p>Anglicky: <b>Version Control System</b>, VCS.</p>
        <p>Tento systém ukládá všechny změny do speciální databáze a můžeme se kdykoliv podívat a vrátit se do starší verze projektu/souboru.</p>
        <p>Také můžeme vytvářet tzv. větve, což jsou takové "odchylky" od hlavní cesty práce. 
        To se dá využít například když zkoušíme nový design a nechceme ztratit předchozí verzi.</p>
        <p>S Gitem velmi často také pracují týmy více lidí. Možnost větvení je proto skvělé řešení, protože každý člen má jen svou větev a tvoří si vlastní změny.</p>
        <div class="parent">
            <img src="images/kap1/git_branch.webp" class="learn-img-big-big">  <!-- dole https://www.g2.com/compare/phpstorm-vs-gitkraken-client -->
            <p class="image-descr">Příklad větvení v aplikaci GitKraken</p> 
            <p class="image-source">Zdroj obrázku: <a href="https://www.g2.com/compare/phpstorm-vs-gitkraken-client">g2.com</a></p>
        </div>

        <h2>Výhody VCS</h2>
        <h3>Kompletní historie změn každého souboru</h3>
        <p>Zaznamenávají se všechny změny. Vytváření, mazání a úprava souborů. Díky tomu se můžeme kdykoliv vrátit a podívat se na provedené změny.</p>
        <p>Změny se značí krátkými popisky, aby bylo snadné se v nich vyznat.</p>
        <p class="text-info"><b>Pozor!</b> Nezaznamenává se vše při každém uložení souboru. Uživatel si sám určuje kdy a co se bude zálohovat.</p>
            
        <h3>Práce v týmech</h3>
        <p>Verzovací systém umožňuje sdílení projektu mezi lidmi, takže při práci v týmech nebo ve firmě je to nejlepší řešení při spolupráci na projektu.
        Oprávněným spolupracovníkům se poskytne přístup a projekt vidí stejně jako ostatní, každý pak pracuje na své části.</p>

        <h3>Větvení</h3>
        <p>Větvení je skvělé při práci v týmech, ale může se hodit i samostatnému vývojáři. Provedené změny jsou pouze na jedné větvi.
        Větve se dají zase spojovat dohromady. Každý pracovník tak může pracovat na svojí větvi, a ty se pak spojí do jedné, výsledné.</p>

        <h2>Druhy VCS</h2>
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
            <img src="images/kap1/VCS-centralized.png" class="learn-img-small"> 
            <p class="image-source">Zdroj obrázku: <a href="https://www.researchgate.net/figure/Centralized-Version-Control-vs-Distributed-Version-Control_fig2_316553817" target="_blank">ResearchGate</a></p>
        </div>
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
            <img src="images/kap1/VCS-decentralized.png" class="learn-img-small"> 
            <p class="image-source">Zdroj obrázku: <a href="https://www.researchgate.net/figure/Centralized-Version-Control-vs-Distributed-Version-Control_fig2_316553817" target="_blank">ResearchGate</a></p>
        </div>
        `,
        title: "Git - Úvod",
        url: "/kapitola-1-uvod",
        aside:"Úvod"
    },
    kap2: {
        html: `   
        <h1>Ověření instalace</h1>
        
        <p class="margin_top">Pro ověření, zda Git nemáme už nainstalovaný, do Příkazového řádku (Command prompt) napíšeme tento příkaz: </p>
        <p class="code">git --version </p>

        <p>Pokud máme Git už nainstalovaný, zobrazí se vaše aktuální verze:</p>
        <div class="parent">
            <img src="/images/kap2/git--version_installed.jpg" class="learn-img-small">
        </div>
        <p>Pokud ještě nemáme, příkaz nebude rozpoznán:</p>
        <div class="parent">
            <img src="/images/kap2/git--version_not_installed.jpg" class="learn-img-medium">
        </div>

        <h1>Instalace</h1>
        
        <h2 style="margin-top:5px;">Git na Windows</h2>
        <h3>Stáhneme si nejnovější verzi Gitu na <a href="https://git-scm.com" class="underline" >git-scm.com</a> </h3>
        <div class="parent">
            <img src="/images/kap2/git_download2.jpg" class="learn-img-big">
        </div>
        
        <h3>Průvodce instalací:</h3>
        <p><b>Který editor vybrat: </b>Nejlepší je asi VS Code editor, když programujeme ve Visual Studio Code, konzoli máme přímo v aplikaci. 
        Při některých příkazech se bude otevírat soubor ve VSCode, přehledně. Vim editor se otevírá přímo v konzoli a není moc přehledný. Později to ale lze změnit.</p>
        <div class="parent">
            <img src="/images/kap2/git_editor_choose.jpg" class="learn-img-medium">
        </div>

        <p><b>Jak pojmenovat defaultní branch: </b>Můžeme použít starý název Master nebo novější a více používaný Main. Nebo úplně vlastní, ale to se moc nedělá.</p>
        <div class="parent">
            <img src="/images/kap2/git_branch_name.jpg" class="learn-img-medium">
        </div>
        <p><b>Ostatní: </b>Zbytek stačí už jen proklikat, nebo můžete případně vygooglit. A je to!</p>
        <div class="parent">
            <img src="/images/kap2/git_setup_finish.jpg" class="learn-img-medium">
        </div>

        <h2>Git na Linux Ubuntu</h2>
        <p>Do terminálu napíšeme tyto příkazy:</p>
        <div class="parent">
            <img src="/images/kap2/git_install_linux.jpg" class="learn-img-big">
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
        url:"/kapitola-2-instalace",
        aside:"Instalace"

    },
    kap3: {
        html: `
        <h1>Základní příkazy</h1>
        <p>Tyto příkazy nejsou spojené s Gitem. Jsou to základní příkazy pro manipulaci se soubory a složkami: vytváření, čtení, procházení...
        <br>
        Tyto příkazy se mohou hodit, pokud se například budeme potřebovat dostat v příkazové řádce do určité složky, nebo přes konzoli vytvořit soubor.
        <br>
        Pro ukázky je použita aplikace Git Bash, která se instaluje spolu s Gitem. Můžeme použít také terminal ve VSCode, který přepneme vpravo na Git Bash.<br> 
        Ve Windows Příkazovém řádku (cmd) nebudou fungovat všechny příkazy, protože GitBash je založen na prostředí Unix.</p>
             
        <h3>ls</h3>
        <p><b>List files.</b> Tento příkaz nám vypíše obsah složky, ve které se nacházíme. Výchozí složkou je náš adresář, tedy C:/Users/&ltjméno&gt. </p>
        <div class="parent">
            <img src="/images/kap3/ls2.jpg" class="learn-img-big" >
        </div>

        <h3>pwd</h3>
        <p><b>Print Working Directory.</b> Vypíše cestu ke složce, kde se právě nacházíme.</p>
        <div class="parent">
            <img src="/images/kap3/pwd.jpg" class="learn-img-big">
        </div>

        <h3>cd</h3>
        <p><b>Change directory.</b> Změní aktuální složku na jinou. Musí to být ale složka, která je v té, ve které se právě nacházíme.</p>
        <p>Samotné <b>cd</b> nás odkudkoliv přepne do výchozí složky = domovská složka uživatele.</p>
        <div class="parent">
            <img src="/images/kap3/cd.jpg" class="learn-img-big">
        </div>

        <h3>cd . .</h3>
        <p>Změní aktuální složku na nadřazenou.</p>
        <div class="parent">
            <img src="/images/kap3/cd2.jpg" class="learn-img-big">
        </div>
        
        <h3>mkdir</h3>
        <p><b>Make directory.</b> Vytvoří složku.  </p>
        <div class="parent">
            <img src="/images/kap3/mkdir.jpg" class="learn-img-big">
        </div>

        <h3>rmdir</h3>
        <p><b>Remove directory.</b> Odstraní jen prázdnou složku.  </p>
        <div class="parent">
            <img src="/images/kap3/rmdir.jpg" class="learn-img-big">
        </div>

        <h3>rm -r</h3>
        <p>Odstraní složku i s obsahem  </p>

        <h3>touch</h3>
        <p>Vytvoří soubor.  </p>
        <div class="parent">
            <img src="/images/kap3/touch2.jpg" class="learn-img-big" > <br>
            <img src="/images/kap3/touch(fileexp).jpg" class="learn-img-big" >
        </div>

        <h3>rm</h3>
        <p>Odstraní soubor.  </p>
        <div class="parent">
            <img src="/images/kap3/rm.jpg" class="learn-img-big" >
        </div>
    
        <h3>cat</h3>
        <p>Vypíše obsah souboru</p>
        <div class="parent">
            <img src="/images/kap3/cat.jpg" class="learn-img-big" ><br>
            <img src="/images/kap3/cat-file.jpg" class="learn-img-small" >
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
        exam:[
            {
                task: ` Vše řešte pomocí příkazů, začínáme v naší domovské složce: <br>
                <li> Vypište obsah složky </li>
                <li> Přejděte na plochu </li>
                <li> Vytvořte složku <i>Kniha</i> </li>
                <li> Přejděte do složky <i>Kniha</i> </li>
                <li> Vytvořte zde 3 soubory: uvod.txt, kapitola.txt, zaver.txt </li>
                <li> Otevřete soubor uvod.txt v poznámkovém bloku, něco do něj napište a uložte </li>
                <li> Vypište obsah souboru uvod.txt přes příkaz </li>
                <li> Smažte všechny sobory </li>
                <li> Vyjděte ze složky o jednu výš</li>
                <li> Smažte složku <i>Kniha</i> </li>
                `,
                solution:` Použity by měly být postupně tyto příkazy: <br>
                <li> ls </li>
                <li> cd Desktop/ </li>
                <li> mkdir Kniha </li>
                <li> cd Kniha/ </li>
                <li> touch uvod.txt kapitola.txt zaver.txt </li>
                <li> --- </li>
                <li> cat uvod.txt </li>
                <li> rm uvod.txt kapitola.txt zaver.txt </li>
                <li> cd ..</li>
                <li> rmdir Kniha </li>
                `
            }
        ],
        title: "Git - Základní příkazy",
        url:"/kapitola-3-zakladni-prikazy",
        aside:"Základní příkazy"

    },
    kap4: {
        html: `
        <h1>Nastavení jména a emailu</h1>
        <p>Pokud chceme používat Git, musíme si nejdříve nastavit <b>jméno a email</b>. Jméno se zobrazuje u každé provedené změny, aby bylo vidět, kdo změnu provedl, stejně tak email.
        Ten slouží ještě k pozdějšímu propojení s GitHubem.</p>
        <p class="margin_top">Otevřeme si Git Bash, příkazový řádek (cmd) nebo Terminal ve VSCode. Do konzole napíšeme tento příkaz: </p>

        <p class="code"> git config --global user.name "vaše jméno" </p>

        <p>Do uvozovek napíšeme jméno i příjmení, můžeme použít i mezery. Pokud po odentrování nedostaneme žádný eror, akce proběhla úspěšně. Zkontrolujeme pomocí: </p>
        <p class="code"> git config --global user.name </p>

        <p>Stejným způsobem teď nastavíme email:</p>
        <p class="code"> git config --global user.email "váš email" </p>

        <br>
        <h1>První inicializace</h1>
        <p>Abychom mohli používat Git, zaznamenávat změny a ukládat historii, potřebujeme <b>inicializovat složku.</b>
        Inicializovaná složka se nazývá <b>repozitář</b>.</p>
        <div class="text-info"> Repozitář = inicializovaná složka, ve které <b>pracujeme s</b> Gitem </div>
        <p>Složka se inicializuje příkazem <b>git init:</b> </p>
        <div class="parent" style="color:red">
            <img src="/images/kap4/init.jpg" class="learn-img-big" >
        </div>
        <p>Zde máme ukázku toho, jak v terminálu vypadá, když jsme v inicializované složce. Za cestou ke složce vidíme v závorce slovo <b>main</b>. To je náš název hlavní větve.</p>
        <div class="parent">
            <img src="/images/kap4/git_initialized.jpg" class="learn-img-big" >
        </div>
        <p>Takto vypadá repozitář v průzkumníku souborů. Přibyla zde skrytá složka s názvem <b>.git</b>. V ní se bude ukládat všechna naše historie a různé soubory Gitu.</p>
        <div class="parent">
            <img src="/images/kap4/git_initialized_pruzkumnik.jpg" class="learn-img-medium" >
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
        url:"/kapitola-4-inicializace",
        aside:"Inicializace"
    },
    kap5: {
        html: `
        <h1>Commit</h1>
        <h3>Co je to commit?</h3>
        <p>Commit je základní prvek verzovacího systému. Je to <b>záznam</b> (snapshot) o změnách, které jsme provedli.
        Každý commit má <b>popisek</b>, který by měl být krátký a výstižný. Pro přehlednost se udává maximální počet <b>50 znaků</b>, jinak omezen není. <br>
        Všechny commity se ukládají do historie projektu.
        Díky tomu se můžeme kdykoliv vrátit zpět a podívat se, jak projekt vypadal v minulosti. 
        Je dobré dělat commity celkem často nebo po logických částech, aby bylo snadnější se vyznat ve změnách a vrátit se k nim.</p>
        <div class="text-info"> Commit = záznam o změnách uložený do historie projektu </div>


        Při commitování pracujeme ve třech fázích:
        <div class="parent">
            <img src="/images/kap5/git_commit_scheme.png" class="learn-img-medium">
            <p class="image-source">Zdroj obrázku: <a href="https://dev.to/sublimegeek/git-staging-area-explained-like-im-five-1anh" target="_blank"> dev.to </a> </p>
        </div>

        <p> <b>Working directory </b> je složka, ve které pracujeme. Vytváříme soubory, upravujeme obsah, atd. 
        Poté se rozhodneme, že chceme nějaké změny uložit. Nejdříve je musíme přidat do tzv. <b>Staging Area </b>. 
        To je taková přípravná plocha, kam se dávají soubory připravené na commit. Můžeme tam přidat všechny upravené soubory najednou, nebo jen některé.
        Když máme všechny soubory, které chceme uložit, provedeme <b>commit</b> a vytvoří se záznam do historie. </p>
        
        <p class="margin_top">Do Staging Area přidáme <b>soubor</b> tímto příkazem: </p>
        <p class="code">git add <i>nazev-souboru</i> </p>
        
        <p> Můžeme také přidat <b>více souborů</b> najednou, stačí napsat názvy souborů oddělené mezerou, např.: </p>
        <p class="code">git add soubor1.txt soubor2.txt soubor3.txt</p>

        <p>Pro přidání <b>všech změněných souborů</b> najednou použijeme příkaz: </p>
        <p class="code">git add . </p>

        <p>Jestliže jsme omylem do Staging Area přidali soubor, který nechceme teď commitovat, <b>odebereme</b> ho příkazem: </p>
        <p class="code">git restore --staged <i>nazev-souboru</i> </p>

        <br>
        <p>Pokud už máme připravené všechny soubory, které chceme <b>commitnout</b>, napíšeme tento příkaz, do uvozovek patří popisek commitu:</p>
        <p class="code">git commit -m "popisek" </p>

        
        <h3 >Cyklus stavu souboru </h3>
        <p>Máme 4 stavy souboru:</p>
        <ul>
            <li>Untracked - nesledovaný soubor </li>
            <li>Unmodified/Commited - nezměněný = commitnutý </li> 
            <li>Modified - změněný, upravený soubor </li>
            <li>Staged - připravený soubor na commit </li>
        </ul>
        <div class="parent no-border-radius">
            <img src="images/kap5/git-lifecycle.png" class="learn-img-wide-medium ">
            <p class="image-source">Zdroj obrázku: <a href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" target="_blank"> git-scm.com </a> </p>
        </div>
        <p>Když vytvoříme nebo přidáme <b>nový soubor</b>, je <b>Untracked</b> - nesledovaný. A to i když ho upravíme. Pro Git je to (prostě) nový soubor, který ještě nikdy nebyl zaznamenáván.
        Pak ho přidáme do Staging area (přípravná plocha) - soubor je <b>Staged</b>, připravený na commit. 
        Provedeme <b>commit</b> a soubor je <b>Unmodified/Commited</b> - neupravený, commitnutý. Když ho znovu <b>upravíme</b>, stane se už <b>Modified</b> - upravený.
        A ten zase dáme do Staging Area a commitneme, a tak stále dokola.</p>
        <p>Soubor můžeme také <b>přestat sledovat</b> (šipka "Remove the file"). Soubor se nám neodstraní ze složky, pouze se přestane sledovat, jako kdyby byl nový.
        To se dělá příkazem: </p>
        <p class="code">git rm --cached <i>nazev-souboru</i></p>

        
        <h3>Stav souborů</h3>
        <p> Pro zobrazení stavu souborů v našem repozitáři existuje chytrý příkaz <b>git status</b>. 
        Ten nám ukáže, jaké soubory jsme od posledního commitu přidali, upravili, smazali, nebo jaké soubory máme ve Staging Area. 
        Pokud žádné změny ještě neproběhly, konzole vypíše, že není nic ke commitování.</p>
        <p class="code">git status </p>

        <p>Zde můžeme vidět upravený a už také stagenutý soubor "test.txt" a nově vytvořený, nesledovaný, soubor "new-file.txt":</p>
        <div class="parent">
            <img src="/images/kap5/git_status.jpg" class="learn-img-wide-medium">
        </div>

        <h3>Soubor .gitignore</h3>
        <p>Gitignore je soubor, do kterého se píšou názvy jiných souborů, které <b>nechceme</b> aby se <b>trackovali</b>. 
        Často jde o nějaké soubory s <b>nastavením</b> nebo moduly, např. konfigurační soubor <i>settings.json</i> pro VS Code Live Server, složka s moduly Node.js, nebo soubory s hesly a citlivými údaji.</p>
        <p>Soubor <b>vytváříme my</b> sami a dává se přímo do inicializované složky, ne do žádné podsložky. Soubor je tedy normálně <b>viditelný</b>, není skrytý jako složka .git. 
        Není povinné vytvářet gitignore, používá se, když ho potřebujeme.</p>
        <div class="parent">
            <img src="/images/kap5/gitignore.png" class="learn-img-big-big">
        </div>
        <p>Do souboru můžeme napsat  i více než jen název souboru. Existují pravidla např. pro přidání všech souborů s určitou příponou, složky, nebo když název obsahuje určený text. 
        Seznam těchto pravidel najdete na <a href="https://www.atlassian.com/git/tutorials/saving-changes/gitignore" target="_blank">Atlassian.com</a></p>

        <h3>Grafické zobrazení commitů</h3>
        <p>Abychom si lépe představili, jak vypadá náš repozitář s commity, můžeme si ho graficky znázornit. 
        Jednotlivé commity se zobrazují jako <b>kolečka spojená linkou</b>. 
        Na těchto ilustracích se ukazuje, jak fungují různé příkazy, co se děje s commity atd.
        Aktuální commit, na kterém se právě nacházíme (poslední, co jsme provedli) se označuje <b>HEAD</b>, také ukazatel nebo pointer. 
        <b>Main</b> (v minulosti master) je hlavní větev, <b>Feature</b> je druhá větev.</p>
        <div class="parent">
            <img src="/images/kap5/commits-ilustrated.png" class="learn-img-medium">
        </div>

        <h3>Historie commitů</h3>
        <p>Všechny commity se ukládají v našem repu a proto se můžeme kdykoliv podívat na jejich seznam.

        Příkaz <b>git&nbsplog</b> nám umožňuje <b>prohlížet historii</b> commitů v repozitáři. 
        Každý výpis commitu obsahuje jeho unikátní, 40 písmenný hash. Je to něco jako jeho ID, poznávací číslo. 
        Dále obsahuje jméno a email autora (které jsme zadávali v kapitole <a href="/kapitola-4-inicializace" >Inicializace</a>), 
        datum vytvoření a popisek. Nejnovější, poslední, commit je úplně nahoře, první úplně dole.</p>

        <p class="code"> git log </p>

        <div class="parent">
            <img src="/images/kap5/git_log.jpg" class="learn-img-big">
        </div>

        <p>Můžeme také použít zkrácenou formu <b>git log --oneline</b>, která vypíše zkrácený 7 písmenný hash commitu a popisek, vše hezky na <b>jednom řádku</b>. 
        To usnadňuje procházení historie commitů, což se vyplatí, když už máme commitů hodně.</p>
        <p class="code"> git log --oneline </p>
        <div class="parent">
            <img src="/images/kap5/git_log_oneline.jpg" class="learn-img-wide-medium">
        </div>

        <p>Později se nám také určitě stane to, že konzole neukáže všechny řádky, ale na konci zůstane jen <b>dvojtečka</b>. 
        Není to žádná chyba, nebo zaseknutí, je to zcela normální. Znamená to, že výpis má více řádků, než se vejde do okna konzole.
        Pokračování výpisu spustíme stiskem <b>mezerníku</b>, výpis jednoho dalšího řádku enterem. Poté ale stále nebudeme pryč, tentokrát se zobrazuje <b>(END)</b>. 
        Odsud vyjdeme zase do normální konzole stiskem <b>klávesy Q</b>.</p>
        
        <div class="parent">
            <img src="/images/kap5/git_log_notfull.jpg" class="learn-img-medium ">
            <br>
            <img src="/images/kap5/git_log_end.jpg" class="learn-img-medium ">
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
            <img src="/images/kap5/git-amend1.jpg" class="learn-img-big "> <br>
            <p class="image-descr">Zde vidíme nepřidaný soubor soubor3.txt, ale poslední commit má v názvu, že se přidal</p> <br><br>
            <img src="/images/kap5/git-amend2.jpg" class="learn-img-big "> <br>
            <p class="image-descr">Přidali jsme soubor do StageArea a napsali amend. Otevřel se soubor COMMIT_EDITMSG, zkontrolovali jsme změny</p> <br><br>
            <img src="/images/kap5/git-amend3.jpg" class="learn-img-wide-medium "><br>
            <p class="image-descr">Soubor jsme zavřeli, commit se tím opravil a název zůstal stejný</p> <br>
        </div>

        <p>Jestliže chceme změnit jen popisek commitu, nemusíme otevírat celý soubor. 
        Stačí příkaz napsat podobně, jako píšeme normální commit:</p>
        <p class="code">git commit --amend -m "novy popisek"</p>

        
        <h3>Smazání commitu</h3>
        <p>Pro smazání commitu existují <b>3 možnosti</b>: soft, mixed a hard.
        Tyto možnosti určují, jaké změny jsou zachovány v pracovní složce po provedení příkazu <b>git reset</b>. 
        K němu se připisuje, který typ chceme a na který commit se chceme přesunout. 
        Můžeme napsat zkrácený hash commitu, nebo "HEAD~1", což znamená předchozí commit.</p>

            <li> <b>Soft</b> = přesune aktuální pozici (head) na zadaný commit a zároveň zachová provedené změny ve StagingArea </li> 
            <li> <b>Mixed</b> = přesune head na zadaný commit, změny zachová, ale ne ve StagingArea. Výchozí možnost </li> 
            <li> <b>Hard</b> = úplně smaže poslední commit i se všemi provedenými změnami = nebezpečné, nedá se vrátit </li> 

        <p class="margin_top">Příkaz, který se používá je tento: </p>
        <p class="code"> git reset --soft  <i>hash-commitu</i> </p>
        <p> Jiný způsob může být: </p>
        <p class="code"> git reset --hard HEAD~1 </p>
        
        <h3>Info o commitu</h3>
        <p>V konzoli si můžeme příkazem ukázat informace o jednom commitu. 
        Vypíše se info jako s git log a k tomu provedené změny v souborech.
        Není to ale moc přehledné, takže to nejspíš moc používat nebudete. Kdyby přeci jen, příkaz je následující:</p>
        <p class="code">git show <i>hash-commitu</i></p>

        <h3>Přepínání commitů</h3>
        <p>Přepínání commitů je vlastně to stále zmiňované <b>vrácení se zpět v projektu </b>. 
        Naše pracovní složka a soubory se přepnou do podoby, jakou měly v daném commitu. 
        Pozor! Při přepnutí na commit se nacházíme v tzv. <b>detached HEAD</b> stavu, což znamená, 
        že nejsme na žádné větvi a naše změny se nebudou ukládat do repozitáře, 
        dokud se nepřepneme zpět na aktuální větev, nebo nevytvoříme novou. Přepnutí na poslední commit nepomůže.
        Můžeme dělat změny a zkoušet, ale nedoporučuje se poté dělat commity, je obtížné je najít.</p>
        <p class="code">git checkout <i>hash-commitu</i></p>
        <p> Přepnutí zpět do větve: </p>
        <p class="code">git switch <i>nazev-vetve</i></p>
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
        exam: [
            {
                task: `Vše řešte pomocí příkazů, začínáme v naší domovské složce: <br>  
                <li> Přejděte na plochu </li>
                <li> Vytvořte složku <i>Farma</i> a přejděte do ní </li>
                <li> Inicializujte složku </li>
                <li> Vytvořte soubor zvirata.txt </li>
                <li> Proveďte první commit se zprávou "inital commit" (nezapomeňte přidat do StageArea)</li>
                <li> Otevřete soubor a připište nějaké zvíře </li>
                <li> Podívejte se na změny </li>
                <li> Proveďte další commit </li>
                <li> Vytvořte soubor krmivo.txt </li>
                <li> Připište do něj nějaké krmivo </li>
                <li> Proveďte commit </li>
                <li> Vypište si všechny commit, dlouhým i zkráceným zápisem </li>
                <li> Udělejte několik dalších úprav a commitů, třeba i nové soubory, nebo smazat jiné, nové složky... </li>
                <li> Do posledního commitu přidejte nějaké změny. </li>
                <li> Přepněte se zpět na nějaký commit v minulosti.</li>
                <li> Trénujte, jak potřebujete </li>
                `,
                solution: ` Použity by měly být postupně tyto příkazy: 
                <li> cd Desktop/ </li>
                <li> mkdir Farma, cd Farma/ </li>
                <li> git init </li>
                <li> touch zvirata.txt </li>
                <li> git add zvirata.txt, git commit -m "inital commit"</li>
                <li> --- </li>
                <li> git status </li>
                <li> git commit -m "např: pridano zvire"</li>
                <li> touch krmivo.txt </li>
                <li> --- </li>
                <li> git commit -m "vytvoreno krmivo"</li>
                <li> git log, git log --oneline </li>
                <li> commit, touch, mkdir, rm... </li>
                <li> gut commit --amend </li>
                <li> git checkout <i>hash-commitu</i>, git switch <i>main</i> </li>
                <li> atd... </li>
                
                `
            }
        ],
        title: "Git - Commity",
        url:"/kapitola-5-commity",
        aside:"Commity"
    },
    kap6: {
        html:`
        <h1>Branches</h1>
        <p><b>Branch = větev</b>. Jak jsme si už řekli, je to taková odchylka od hlavního toku práce. 
        Ten hlavní tok je ale také větev, a to <b>hlavní větev</b>, pojmenovaná <b>MAIN</b> (nebo master). </p> 
        
        <div class="parent">
            <img src="/images/kap6/branch.png" class="learn-img-wide-medium ">
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
            <img src="/images/kap6/branch_name.jpg" class="learn-img-wide-medium ">
        </div>  

        <h3>Přepínání mezi větvemi</h3>
        <p>Na jinou větev přepneme pomocí příkazu:</p>
        <p class="code"> git switch <i>nazev-vetve</i> </p>
        <p>Toto je novější příkaz, někde můžete najít i starší příkaz <i><b>git checkout</b></i>.</p>
        <p>Pozor! Pokud uděláme nějaké změny, necommitneme a chceme se přepnout do jiné větve, git nám to nedovolí, protože by se změny mohly odstranit.<p/>

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
        To znamená právě to, že v ní jsou commity. A co je to to mergování, to se dozvíme v <a href=/kapitola-7-mergovani>příští kapitole</a>.</p>
        <p class="code"> git branch -D <i>nazev-vetve</i> </p>
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
        url:"/kapitola-6-branches",
        aside:"Branches"

    },
    kap7: {
        html: `
        <h1>Mergování</h1>
        <p>Mergování je <b>spojování větví</b> k sobě. 
        Spojujeme k sobě 2 větve (i více) a musíme být přepnutí na té, ke které chceme připojovat druhou. <br><u>Například:</u><br>
        Pracujeme na hlavní větvi, máme na ní commity. Poté vytvoříme novou větev, třeba kvůli nějaké chybě. Tu postupně opravíme. 
        A pak tu větev chceme spojit s hlavní, abychom mohli pracovat dál, s opravenou chybou. Přepneme se tedy na hlavní větev, mergneme je, a je to.</p>
        <div class="parent">
            <img src="/images/kap7/merging.png" class="learn-img-wide-medium ">
        </div> 

        <p>Základní příkaz pro mergování je:</p>
        <p class="code">git merge <i>vedlejsi-vetev</i></p>

        <p>Existuje více typů mergování, zde je jen pár nejznámějších a nejpoužívanějších:</p>
        
        <h3>Fast-forward</h3>
        <p>Tento typ se použije sám automaticky, pokud na větvi, ke které chceme mergovat, nemáme žádné nové commity od doby, co jsme vytvořili druhou větev. 
        Vedlejší větev se jakoby přesune na hlavní a je z nich jedna na stejné úrovni.</p>
        <div class="parent">
            <img src="/images/kap7/merging-FF.png" class="learn-img-medium ">
        </div> 

        <h3>Non-fast-forward (three-way)</h3>
        <p>Toto je základní typ mergování. Provede se, pokud jsme na hlavní větvi už udělali nějaké commity poté, co se vedlejší větev vytvořila. 
        V tomto typu merge se zachová větev na druhé úrovni a automaticky se vytvoří prázdný commit, který větve spojuje = mergovací commit. </p>
        <div class="parent">
            <img src="/images/kap7/merging-nonFF.png" class="learn-img-medium ">
        </div> 
        <p>Non-fast-forward můžeme použít sami, i když commity v hlavní branchi nemáme. Stačí do příkazu připsat:</p>
        <p class="code"> git merge --no-ff <i>vedlejsi-vetev</i> </p>
        <p>Zde se také vytvoří mergovací commit. Schéma by vypadalo takto:</p>
        <div class="parent">
            <img src="/images/kap7/merging-noFF.png" class="learn-img-medium ">
        </div> 

        <h3>Konflikt</h3>
        <p>Konflikty nastanou, když chceme mergovat k větvi, ve které máme nové commity, a v nějakém tom commitu jsme upravili ve stejném souboru a stejný řádek jako na druhé větvi.
        Git tedy neví, kterou verzi má uložit. To si musíme určit sami. Chybová hláška vypadá takto:</p>
        <div class="parent">
            <img src="/images/kap7/merging-conflict-error.png" class="learn-img-wide-medium ">
        </div> 
        <p>Ve VSCode se otevře daný soubor a ukáže se nám, kde přesně nastal konflikt. </p>
        <div class="parent">
            <img src="/images/kap7/merging-conflict-edit.png" class="learn-img-wide-medium ">
        </div> 
        <p>Zde si určíme, jaký text chceme zachovat. Buď klikneme na jednu z nabízených možností: 
        <ul>
            <li>Accept <b>Current</b> Change = přijme verzi na aktuální větvi,</li>
            <li>Accept <b>Incoming</b> Change = přijme verzi na vedlejší větve,</li>
            <li>Accept <b>Both</b> Changes = přijme obě verze, každá na jednom řádku,</li>
            <li><b>Compare</b> Changes = zobrazí konflikt přehledněji, oba soubory dá vedle sebe.</li>
        </ul>
        Nebo si sami odmažeme řádky, které tam nechceme. Nebo můžeme klidně napsat úplně nový text, prostě jak je to potřeba. </p>
        <p>Soubor poté zavřeme, přidáme do StageArea a commitneme. </p>

        <h3>Rebase</h3>
        <p>Tento typ není úplně normální mergování, ale dá se tak také použít. Funguje tak, že vezme všechny commity z vedlejší větve a přesune je za nejnovější commit v hlavní větvi.</p>
        <div class="parent">
            <img src="/images/kap7/merging-rebase.png" class="learn-img-medium ">
        </div> 
        <p>Pozor, zde je přepínání větví naopak. Nejdříve musíme být na vedlejší větvi. Z ní napíšeme příkaz:</p>
        <p class="code">git rebase <i>hlavni-vetev</i></p>
        <p>Má to své výhody i nevýhody. Výhodou je, že zachovává čistou historii commitů, ale nevýhodou, že není vidět, kdy byla vedlejší větev vytvořena, nebo ke které větvi commity vůbec patří.</p>


        <h3>Octopus</h3>
        <p>Tento typ merge se použije <b>automaticky</b> při mergování 3 a více větví k sobě. Všechny větve se spojí v jednom commitu. </p>
        <div class="parent">
            <img src="/images/kap7/merging-octopus.png" class="learn-img-medium ">
        </div> 
        `,
        quiz: [
            {
                question: "Jaký je základní příkaz pro mergování?",
                answers: ["git merging 'nazev-vetve'", "git merge 'nazev-vetve'","git mrg 'nazev-vetve'"],
                correctAnswer:2
            },
            {
                question: "Na jaké větvi musíme být, abychom správně mergovali?",
                answers: ["Na té, ke které chceme mergovat druhou", "Na té, kterou chceme mergovat k jiné","Je to jedno"],
                correctAnswer:1
            },
            {
                question: "Jaký je rozdíl mezi Fast-forward a Non-fast-forward?",
                answers: ["Fast-forward se provede rychleji", "Non-fast-forward je bezpečnější","Fast-forward nemá mergovací commit"],
                correctAnswer:3
            }
        ],
        title: "Git - Mergování",
        url:"/kapitola-7-mergovani",
        aside:"Mergování"
    },
    kap8: {
        html: `
        <h1>GUI</h1>
        <p>Git <b>není</b> pouze příkazový řádek a VSCode. Existují programy, které nám graficky a v reálném čase zobrazují, jak náš repozitář vypadá. 
        Můžeme přes ně <b>spouštět</b> i různé <b>příkazy</b>, přepínat mezi větvemi, nebo se <b>podívat na změny</b> v souborech u commitů. 
        Grafické rozhraní nám celkově může <b>pomoct</b> a usnadnit práci. </p>
        <h3>Git GUI</h3>
        <p>Přímo s Gitem se nainstaloval tento program s hodně jednoduchým GUI. Po otevření vypadá úvodní strana takto:</p>
        <div class="parent">
            <img src="/images/kap8/GitGUI.png" class="learn-img-medium ">
        </div>
        <p>Otevřeme si náš repozitář a zobrazí se v tomto okně:</p>
        <div class="parent">
            <img src="/images/kap8/GitGUI2.png" class="learn-img-big ">
        </div>

        <u class="margin-bottom">Popis jednotlivých částí:</u> <br>
        <ul>
            <li> <b>Unstaged Changes (oranžová)</b> = Zde se zobrazují soubory, které jsme upravili, nejsou ve Staging Area.</li>
            
            <li><b>Staged Changes (zelená)</b> = Soubory ve Staging Area, budou v commitu.</li>
            
            <li><b>Žluté pole</b> = Když klikneme na soubor, tady se ukážou informace o něm. Jeho obsah, změny od posledního commitu, název... Soubor se zde nedá upravovat.</li>
            
            <li> <b>Dolní pole Commit Message</b> = Sem se píše zpráva pro commit.</li>
        </ul>

        <u class="margin_top">5 tlačítek vedle Commit Message:</u>
        <ul>
            <li> <b>Rescan</b> = aktualizuje informace, soubory. Program se neaktualizuje sám, vždy musíme zmáčknout toto tlačítko pro zobrazení nových změny</li>
            <li> <b>Stage Changed</b> = všechny upravené soubory přesune do Staged Changes (Staging area)</li>
            <li> <b>Sign Off</b> = podepíše commit jménem a emailem. Lze změnit v nastavení (Edit➙Options...)</li>
            <li> <b>Commit</b> = vytvoří commit</li>
            <li> <b>Push</b> = pushne vybranou branch</li>
        </ul>
        
        <u class="margin_top">Horní lišta:</u>
        <ul>
            <li> <b>Repository</b> = odsud můžeme například otevřít GitBash nebo průzkumník souborů</li>
            <li> <b>Edit </b> = zpět, znovu, vložit, vyjmout... a nastavení</li>
            <li> <b>Branch</b> = vytvořit novou větev, přepnout se na větev (checkout), přejmenovat...</li>
            <li> <b>Commit</b> = amend, stage, unstage, commit</li>
            <li> <b>Merge</b> = mergovat větve</li>
            <li> <b>Remote</b> = přidat remote, pushnout...</li>
        </ul>
        
        <h3>VSCode</h3>
        <p>VSCode podporuje Git, proto má už předinstalované lehké GUI. Nachází se v liště nalevo.</p>
        <div class="parent">
            <img src="/images/kap8/gui-vscode.png" class="learn-img-wide-medium">
        </div>
        <p>Můžeme zde vidět všechny provedené <b>změny</b> i stagenuté soubory. Po kliknutí na soubor se zobrazí tzv. <b>diff</b> souboru, neboli porovnání souboru teď a v posledním commitu. To je velice užitečná věc.
        Tlačítky, které se objeví při najetí na soubor, můžeme soubor <b>přidat</b> do StageArea, zrušit změny nebo ho <b>odebrat</b> ze StageArea. 
        Také je tu pole pro zprávu commitu a tlačítko na <b>commitování</b>. Šipečkou můžeme dokonce zvolit třeba možnost Commit&Push.<br>
        Na tomto GUI je skvělé to, že je <b>přímo v prostředí</b>, kde se programuje a není to další aplikace.</p>
        <div class="parent">
            <img src="/images/kap8/gui-vscode2.png" class="learn-img-small">
        </div>

        <h3>GitKraken</h3>
        <div class="parent">
            <img src="/images/kap8/GitKraken-logo.svg" class="gui-logo">
        </div>
        <p>GitKraken je jedním z <b>nejznámějších</b> GUI pro Git. Má moderní a velice přehledný vzhled a k tomu <b>širokou</b> nabídku funkcí pro práci s Gitem. 
        Názorně zobrazuje commity a větve v našem repozitáři v <b>reálném čase</b> bez potřeby manuálně refreshovat.
        Velice <b>snadno</b> se zde vytváří, přepínají a mazají větve, lze provádět commity, zapisovat do souborů, porovnávat změny v souborech, pushovat, pullovat... 
        Je vhodný i pro práci v týmech, umožňuje přímé propojení s <b>GitHubem</b>, GitBucketem nebo nástroji jako Jira a Trello. Také kompatibilní s Linuxem i macOS.
        Má verze zdarma i placené, pro domácí použití ale bohatě stačí jen ty <b>bezplatné</b>.</p>
        <div class="parent">
            <img src="/images/kap8/GitKraken-app.png" class="learn-img-big-big">
        </div>

        <h3>Tower</h3>
        <div class="parent">
            <img src="/images/kap8/Tower-logo.svg" class="gui-logo">
        </div>
        <p>Velice podobný program jako GitKraken, má stejně tak plno funkcí ke Gitu. Chybí mu ale kompatibilita s Linuxem a není zdarma, pouze 30denní zkušební doba.
        Používají ho například společnosti: Apple, Google, Amazon, Twitter, Facebook... </p>
        <div class="parent">
            <img src="/images/kap8/Tower-app.png" class="learn-img-big-big">
        </div>

        <h3>Fork</h3>
        <div class="parent">
            <img src="/images/kap8/Fork-logo.png" class="gui-logo">
        </div>
        <p>Má bezplatnou i placenou verzi. Má základní funkce jako správa více repozitářů, řešení konfliktů při mergování a porovnání souborů, ale chybí mu nějaké pokročilejší.
        I tak ale pro základy postačí.</p>

        <h3>Sourcetree</h3>
        <div class="parent">
            <img src="/images/kap8/Sourcetree-logo.png" class="gui-logo">
        </div>
        <p>Toto GUI je zcela zdarma, vytvořila ho firma Atlassian. Je také dobrou volbou pro grafické rozhraní. Podporuje jak Git, tak i Mercurial. 
        Nevýhodou je ne moc přehledné prostředí.</p>        
        `,
        title:"Git - GUI",
        url:"/kapitola-8-gui",
        aside:"GUI"
    },
    kap9: {
        html: `
        <div class="align-center"> 
            <h1 class="display-inline">GitHub</h1> 
            <img src="/images/kap9/github-logo-black.svg" class="padding_left padding-bottom">
        </div>
        <p> GitHub je <b>webová</b> služba pro Gitové repozitáře. Spolupracuje s lokálním Gitem a slouží jako <b>cloudová záloha</b> ale i jako <b>sociální</b> síť nebo platforma pro spolupráci ve firmě. 
        Můžeme sem nahrát svůj vlastní repozitář, ale zároveň vidět i veřejná repa jiných lidí a oni můžou vidět naše. </p>

        <p class="margin_top">Jsou tedy 2 druhy repozitářů: <b>veřejný</b> (public) a <b>soukromý</b> (private). Veřejný vidí kdokoliv a může si ho "stáhnout" k sobě, soukromý vidíme pouze my a lidé, kterým dáme přístup.</p>
        <p class="margin_top"> Jelikož je GitHub cloudový, používá se právě při spolupráci mezi lidmi a ve firmách. Ostatní mají k repozitáři přístup a mohou ho upravovat a společně v něm pracovat.</p>
        <p class="margin_top">GitHub je v základu zdarma, má sice placené verze, ale ty mají hodně pokročilejší vlastnosti a jsou spíše pro firmy. 
        Důležité je, že i ve verzi zdarma máme <b>neomezený počet</b> soukromých i veřejných repozitářů.</p>
        <p class="margin_top"> Další využití GitHubu může být jako takové <b>portfolio</b> k životopisu. 
        Je dobré nějaké lepší projekty dát veřejně, aby třeba náš budoucí zaměstnavatel mohl vidět, co umíme a s čím pracujeme.</p>
        <div class="parent">
            <img src="/images/kap9/github-profile.png" class="learn-img-big-big">
            <p class="image-descr">ukázka profilu na GitHubu</p>
        </div>
        
        <h3>Založení účtu</h3>
        <p> Na stránce <a href="https://github.com">github.com</a> si založíme účet. K registraci není potřeba nic speciálního, pouze <b>email</b>. Na ten přijde ověřovací kód, zadáme ho, a je to!</p>
        <p>Měli bychom být na hlavní stránce GitHubu. V pravém horním rohu je ikonka s obrázkem, to je náš profilový obrázek. Přes něj se dostaneme na <b>profil</b> a tam si můžeme upravit jméno, profilový obrázek, bio, atd.
        <div class="parent">
            <img src="/images/kap9/github-to-profile.png" class="learn-img-medium">
        </div>
        
        <h3>Lokální a vzdálené repo</h3>
        <p>Když jsme doteď pracovali pouze na našem počítači, pracovali jsme v <b>lokálním</b> repozitáři. Na GitHubu si můžeme vytvořit <b>vzdálený repozitář</b>, anglicky <b>remote</b>
        A tyto dva repozitáře na sebe můžeme napojit. Pak jen jediným příkazem pošleme změny z lokálního na vzdálené repo a máme na GitHubu aktuální verzi projektu. 
        Nebo naopak, z GitHubu příkazem stáhnout změny do lokálního repa.</p>

        <h3>SSH klíč</h3>
        <p>Abychom si mohli posílat změny na GitHub na naše repo, potřebujeme k tomu SSH klíč. SSH = Secure Shell Protocol. Slouží k ověření, že náš počítač má <b>oprávnění</b> upravovat naše repo na GitHubu a ne kdokoliv jiný.
        V našem počítači se vygenerují 2 klíče, jeden private a jeden public. Ten public se zapisuje do GitHubu. Při připojení se porovná klíč na GitHubu a klíč na počítači, a pokud jsou stejné, spojíme se s GitHubem.</p>
        <p class="margin_top">Příkaz pro ověření, jestli už máme nějaké klíče vygenerované nebo ne, se píše do aplikace GitBash nebo do terminálu VSCode s GitBashem, a je to:</p>
        <p class="code">ls -al ~/.ssh </p>
        <p> Pokud už nějaký klíč máme, zobrazí se aspoň jeden z těchto názvů: </p>
        <ul>
            <li>id_rsa.pub</li>
            <li>id_ecdsa.pub</li>
            <li>id_ed25519.pub</li>
        </ul>

        <p class="margin_top"> Pokud ne a dostaneme error, musíme si klíče vygenerovat. Nové klíče si můžeme vygenerovat i když je už máme.</p>
        <p class="margin_top"> SSH klíče se vygenerují tímto příkazem, zase v GitBash: (dosaďte svůj email)</p>
        <p class="code">ssh-keygen -t ed25519 -C "your_email@example.com" </p>
        <p>Klíče se tímto vygenerují.<br> Příkaz ale pokračuje dál, chce abychom napsali soubor, kam klíče uložit. Stačí pouze stisknout enter, uloží se sami.
        Dále je potřeba zadat heslo (passphrase). Můžeme si vymyslet jakékoliv. <b>Pozor!</b> Když budeme psát, neukáže se, že píšeme, ale heslo se normálně zadává. Pak ho ještě musíme napsat znovu. </p>
        <p>Potom si musíme zapnout <b>ssh-agenta</b>. To je program, který běží na pozadí a uchovává dešifrované klíče v paměti pro použití. </p>
        <p class="code">eval "$(ssh-agent -s)"</p>
        <p>Po zadání příkazu by se mělo vypsat něco podobného, jen s jiným číslem: </p>
        <div class="parent">
            <img src="/images/kap9/ssh-agent.png" class="learn-img-small">
        </div>
        <p>Do ssh-agenta přidáme náš privátní klíč: </p>
        <p class="code">ssh-add ~/.ssh/id_ed25519 </p>
        <p>Teď už zbývá vložit klíč do našeho GitHub účtu. Public klíč si zkopírujeme do schránky příkazem: </p>
        <p class="code">clip < ~/.ssh/id_ed25519.pub </p>
        <p>Místo, kam na GitHubu vložit klíč, najdeme po kliknutí na ikonku v pravém horním rohu, dáme <b>Settings</b> a vlevo v nabidce nejdeme <b>SSH and GPG keys</b>. 
        Klikneme na tlačítko <b>New SSH key</b>.</p>
        <div class="parent">
            <img src="/images/kap9/github-to-ssh.png" class="learn-img-medium">
            <img src="/images/kap9/github-new-ssh.png" class="learn-img-big-big">
        </div>
        <p>Jako <b>Title</b> si dáme nějaký název toho klíče, je to jen informace pro nás, např. Můj počítač doma. <b>Typ</b> klíče necháme Authentication. A do pole <b>Key</b> vložíme náš zkopírovaný klíč. 
        Pak potvrdíme tlačítkem <b>Add SSH key</b>, zadáme heslo máme hotovo.</p>
        <div class="parent">
            <img src="/images/kap9/github-add-ssh.png" class="learn-img-big">
        </div>
        
        `,
        title: "Git - Github",
        url:"/kapitola-9-github",
        aside:"GitHub"
    },
    kap10: {
        html: `
        <h1>Založení repa na Githubu</h1>
        <p>Jako si zakládáme repozitáře lokální, tak si můžeme založit repozitář na GitHubu. Přes náš profil dojdeme na záložku <b>Repositories</b> a dáme <b>New</b>.</p>
        <div class="parent">
            <img src="/images/kap10/github-repo.png" class="learn-img-big-big">
        </div>
        <p>Zde vyplníme <b>jméno</b> našeho repository, to je jako název složky. Repozitáře se pojmenovávají <b>bez mezer</b> a jiných znaků, můžeme použít pouze tečky, pomlčky, podtržítka a čísla.
        Pokud to neuděláme, GitHub si jiné znaky převede sám na pomlčky. <br>
        Dále můžeme vyplnit <b>Popis</b> = Description, bližší popis repozitáře. Není povinný.<br>
        Také zvolíme, jestli chceme naše repo public nebo private (rozdíly jsou v <a href="/kapitola-9-github#:~:text=Jsou%20tedy%202%20druhy%20repozit%C3%A1%C5%99%C5%AF">kapitole 9</a>). <br>
        S repozitářem můžeme založit zároveň i <b>README</b> nebo .gitignore soubor. 
        README soubor se v GitHubu zobrazí při otevření repozitáře a obvykle se v něm projekt popisuje více, nebo jsou v něm instrukce, jak s projektem pracovat. <br>
        Pokud máme určené vše co potřebujeme, vytvoříme repozitář.</p>
        <div class="parent">
            <img src="/images/kap10/github-repo2.png" class="learn-img-wide-medium">
        </div>
        
        <h1>Propojení lokálního repa s Githubem</h1>
        <p>Po vytvoření repozitáře se ocitneme na této stránce: </p>
        <div class="parent">
            <img src="/images/kap10/github-repo3.png" class="learn-img-big-big">
        </div>
        <p>Šipka ukazuje na URL adresu našeho repozitáře. Tu budeme potřebovat pro napojení lokálního repozitáře na tento vzdálený. To se dělá příkazem:</p>
        <p class="code">git remote add origin <i>url-adresa</i></p>
        <p>Origin je název připojení, můžeme si dát vlastní, ale používá se tento. Za URL adresu dosadíme zkopírovanou adresu repozitáře. </p>
        <p>Zkontrolovat můžeme příkazy:</p>
        <p class="code">git remote </p>
        <p class="code">git remote -v</p>
        <p> První příkaz vypíše název napojení, druhý zobrazí i adresu.</p>
        <div class="parent">
            <img src="/images/kap10/git-remote.png" class="learn-img-wide-medium">
        </div>
        <p>Pokud bychom chtěli napojení smazat, nebo přejmenovat, jsou na to příkazy: </p>
        <p class="code">git remote remove origin </p>
        <p class="code">git remote rename origin <i>novy-nazev</i></p>

        <h3>Push</h3>
        <p><b>Git push</b> je příkaz pro poslání změn do vzdáleného repozitáře. </p>
        <p class="code">git push</p>
        <p>Když příkaz napíšeme poprvé, tak se nám zobrazí error:</p>
        <div class="parent">
            <img src="/images/kap10/git-push-error.png" class="learn-img-wide-medium">
        </div>
        <p>Jak nám radí, musíme vytvořit tzv. Upstream. Je to takový odkaz na vzdálené napojení, aby git věděl, kam má pushovat. 
        Vytvoří se zmíněným příkazem:</p>
        <p class="code">git push --set-upstream origin main</p>
        <p>Poté už není potřeba ho zadávat znovu a stačí psát pouze git push.<br>
        Někde se totiž používá zápis:</p>
        <p class="code">git push origin main</p>
        <p> Zde pokaždé musíte napsat název napojení a větve, což je zdlouhavé. Proto se nastavuje Upstream.</p>
        <p class="margin_top">Pro každou větev se musí nastavit Push zvlášť, po pushnutí se větev na GitHubu vytvoří sama.</p>

        <h3>Pull</h3>
        <p><b>Git pull</b> je naopak stažení změn z GitHubu do lokálního repozitáře. 
        Nejdříve otestuje, jestli na vzdáleném repozitáři jsou změny, pokud ano, tak je stáhne a rovnou aktualizuje soubory v pracovní složce.</p>
        <p class="code">git pull</p>

        <h3>Fetch</h3>
        <p><b>Git fetch</b> je podobný git pull, také otestuje a stáhne změny z GitHubu, ale <b>neaktualizuje</b> pracovní složku. Je tím pádem bezpečnější.
        <p class="code">git fetch</p>
        
        <p> Na změny (commity) ze vzdáleného repa se můžeme podívat příkazem:  </p>
        <p class="code"> git log origin/main </p>
        <p> Aktuální pozice je označena HEAD -> main, pozice remote je označena origin/main.</p>
        
        <p class="margin_top"> Pokud chceme změny nahrát do pracovní složky, mergneme origin/main do naší lokální větve main: </p>
        <p class="code"> git merge origin/main </p>

        <p class="margin_top">Jestliže ale pracujeme sami, a přesně víme, jaké změny se staly, nemusíme se pullování bát. </p>

        <h3>Clone</h3>
        <p> <b>Git clone</b> se používá k nakopírování repozitáře z GitHubu k nám na počítač. Takto si můžeme naklonovat vlastní repozitář ale i cizí.</p>
        <p> Potřebujeme k tomu být ve složce, která <b>není inicializovaná</b>. A také URL adresu GitHubového repa, které chceme klonovat. Tu získáme na stránce s repozitářem zde:
        <div class="parent">
            <img src="/images/kap10/git-clone.png" class="learn-img-big-big">
        </div>
        <p> Pak napíšeme příkaz: </p>
        <p class="code"> git clone <i>url-adresa</i> </p>
        <p> V neinicializované složce se vytvoří složka s repozitářem, inicializovaná. A repozitář je u nás!
         Pokud je náš, nebo na něj máme oprávnění, můžeme do něj pushovat změny.</p>
        `,
        title:"Git - Push, Pull",
        url: "/kapitola-10-push-pull",
        aside:"Push & Pull"
    },
}

export { chaptersData }