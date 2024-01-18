
const notFound = `
<h1>404 Not Found</h1>
<p>Oh no! It looks like the page you're trying to get to is missing!</p>

<script>
    document.title = "Error"
</script>

`;

const index = `
    <div class="first">
        <div class="left">
            <img src="/images/home_image.jpg" class="home_image">
        </div>
        <div class="right">
            <h1>GIT</h1>
            <p>Nejpoužívanější verzovací systém na světě. </p> 
                <a href="#">Nauč se ho používat i ty!</a>
            
        </div>
    </div>
`;


const uvod = `

        <h1>Úvod</h1>
        <p>Git je nejpoužívanější verzovací systém, pomáhá miliónům programátorů při jejich práci. 
            Snadno se používá, je lehký na pochopení a je zdarma. </p>
        <p class="text-info">Verzovací systém = systém správy historie souborů, verzí</p>
        <p>Anglicky: Version Control System, VCS.</p>
        <p>Tento systém ukládá všechny změny do speciální databáze a můžete se kdykoliv podívat a vrátit se do starší verze projektu/souboru.</p>
        <p>Také můžete vytvářet tzv. větve, což jsou takové "odchylky" od hlavní cesty práce. 
            To se dá využít například když zkoušíte nový design a nechcete ztratit předchozí verzi.</p>
        <p>S Gitem velmi často také pracují týmy více lidí.
            Možnost větvení je proto skvělé řešení, protože každý člen má jen svou větev a tvoří si vlastní změny.</p>
        <div class="parent">
            <img src="images/git_branch.webp" class="learn_img_big">  <!-- dole https://www.g2.com/compare/phpstorm-vs-gitkraken-client -->
            <div class="image_descr">Příklad větvení v aplikaci GitKraken</div>
        </div>

        <!-- <h2>Verzovací systém</h2>
        <p>neco o VCS </p>
        <a href="https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20Control%20Systems%20(VCS,control%20are%20as%20follows.">
            odkaz</a> -->

        <h2>Výhody VCS</h2>
            <h3>Kompletní historie změn každého souboru</h3>
                <p>Zaznamenávají se všechny změny. Vytváření, mazání a úprava souborů. Díky tomu se můžete kdykoliv vrátit a podívat se na provedené změny.</p>
                <p>Změny se značí krátkými popisky, aby bylo snadné se v nich vyznat.</p>
                <p class="text-info"><strong>Pozor!</strong> Nezaznamenává se vše při každém uložení souboru. Uživatel si sám určuje kdy a co se bude zálohovat.</p>            
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
                    <img src="images/image_part_001v2.png" class="learn_img_small"> </div>
                    <!-- https://www.researchgate.net/figure/Centralized-Version-Control-vs-Distributed-Version-Control_fig2_316553817 -->
            <h3>Distribuované (decentralizované,DVCS)</h3>
                <p>Nemá centrální databázi, každý uživatel má celou kopii u sebe. Poté změny "pushne" do sítě, nebo centrálního repozitáře.</p>
                <p class="text-info">Repozitář = úložiště s historií všech uložených změn, všechny soubory a složky, celý "projekt"</p>
                <p class="margin_top">Hlavními výhodami je možnost pracovat offline, protože každý uživatel má celý repozitář na svém počítači, což urychluje proces. 
                    Snadnější přepínání mezi větvemi a verzemi, řešení konfliktů. Větší bezpečnost.</p>
                <p class="margin_top">Nevýhodou je pak trochu složitější fungování, stále ale určitě pochopitelné.</p>
                <ul>
                    <li><strong><u>Git</u></strong></li>
                    <li>Mercurial</li>
                    <li>Bazaar</li>
                </ul>
                <div class="parent">
                    <img src="images/image_part_002v2.png" class="learn_img_small"> </div>

        <h2>Další verzovací systémy</h2>
        <h3>Kdjfkl</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum! Incidunt quos eum corrupti, rem architecto ipsum ducimus 
            consectetur sequi adipisci, beatae obcaecati debitis eaque qui atque eveniet dolores harum.</p>

`;


const kap1 = `
        
        <h1>Ověření instalace</h1>
        
        <p class="margin_top"> Do Příkazového řádku (Command prompt) napište tento příkaz: </p>
        <p class="text-info padding_left">git --version </p>
        <!-- <br>Nebo zkráceně: <br> git -v -->

        <p>Pokud máte Git už nainstalovaný, zobrazí se vaše aktuální verze:</p>
        <div class="parent">
            <img src="/images/git--version_installed2.jpg" class="learn_img_small">
        </div>
        <p>Pokud ještě nemáte, příkaz nebude rozpoznán:</p>
        <div class="parent">
            <img src="/images/git--version_not_installed3.jpg" class="learn_img_small">
        </div>

        <h1>Instalace</h1>
        
        <h2 style="margin-top:5px;">Git na Windows</h2>
        <h3>Stáhněte si nejnovější verzi Gitu na <a href="https://git-scm.com" class="underline" >git-scm.com</a> </h3>
        <div class="parent">
            <img src="/images/git_download2.jpg" class="learn_img_big">
        </div>
        <h3>Průvodce instalací:</h3>
        <p><strong>Který editor vybrat: </strong>Nejlepší je asi VS Code editor, když programujete ve Visual Studio Code, konzoli máte přímo v aplikaci.</p>
        <div class="parent">
            <img src="/images/git_editor_choose.jpg" class="learn_img_small">
        </div>
        <p><strong>Jak pojmenovat defaultní branch: </strong>Můžete použít starý název Master nebo novější a více používaný Main. Nebo úplně vlastní, ale to se moc nedělá.</p>
        <div class="parent">
            <img src="/images/git_branch_name.jpg" class="learn_img_small">
        </div>
        <p><strong>Ostatní: </strong>Zbytek stačí už jen proklikat, nebo můžete případně vygooglit. A je to!</p>
        <div class="parent">
            <img src="/images/git_setup_finish.jpg" class="learn_img_small">
        </div>

        <h2>Git na Linux Ubuntu</h2>
        <p>Do terminálu napište tyto příkazy:</p>
        <div class="parent">
            <img src="/images/git_install_linux.jpg" class="learn_img_small">
        </div>


`;

const kap2 =  `
        
        <h1>Základní příkazy</h1>
        <p>Základní příkazy Gitu jsou stejné jako v Linuxu. Pro ukázky je použita aplikace Git Bash, která se instaluje spolu s Gitem. Můžete použít také terminal ve VSCode, který přepnete vpravo na Git Bash.</p>
        
        <h3>ls</h3>
        <p><strong>List files.</strong> Tento příkaz nám vypíše složky a soubory ze složky ve které se nacházíme. Výchozí složkou je náš adresář, tedy C:/Users/&ltjméno&gt. </p>
        <div class="parent">
            <img src="/images/ls.jpg" class="learn_img_small" >
        </div>

        <h3>pwd</h3>
        <p><strong>Print Working Directory.</strong> Vypíše cestu kde se právě nacházíme.</p>
        <div class="parent">
            <img src="/images/pwd.jpg" class="learn_img_small">
        </div>

        <h3>cd</h3>
        <p><strong>Change directory.</strong> Změní aktuální složku na jinou. Musí to být ale složka, která je v té, ve které se právě nacházíme.</p>
        <!-- Nebo se muze napsat Documents/test/ -->
        <p>Samotné <strong>cd</strong> nás odkudkoliv přepne do výchozí složky.</p>
        <div class="parent">
            <img src="/images/cd.jpg" class="learn_img_small">
        </div>

        <h3>cd . .</h3>
        <p>Změní aktuální složku na nadřazenou.</p>
        <div class="parent">
            <img src="/images/cd...jpg" class="learn_img_small">
        </div>
        
        <h3>mkdir</h3>
        <p><strong>Make directory.</strong> Vytvoří složku.  </p>
        <div class="parent">
            <img src="/images/mkdir.jpg" class="learn_img_small">
        </div>

        <h3>rmdir</h3>
        <p><strong>Remove directory.</strong> Odstraní jen prázdnou složku.  </p>
        <div class="parent">
            <img src="/images/rmdir.jpg" class="learn_img_small">
        </div>

        <h3>rm -r</h3>
        <p>Odstraní složku i s obsahem  </p>

        <h3>touch</h3>
        <p>Vytvoří soubor.  </p>
        <div class="parent">
            <img src="/images/touch2.jpg" class="learn_img_small" >
            <img src="/images/touch(fileexp).jpg" class="learn_img_small" >
        </div>

        <h3>rm</h3>
        <p>Odstraní soubor.  </p>
        <div class="parent">
            <img src="/images/rm.jpg" class="learn_img_small" >
        </div>
    
        <h3>cat</h3>
        <p>Vypíše obsah souboru</p>
        <div class="parent">
            <img src="/images/cat.jpg" class="learn_img_small" >
            <img src="/images/cat-file.jpg" class="learn_img_small" >
        </div>
        
`;

const kap3 = `

    <h1></h1>


`;




export {notFound, index, uvod, kap1, kap2, kap3 };