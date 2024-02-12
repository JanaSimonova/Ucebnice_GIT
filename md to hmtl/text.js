const text = `
#Úvod


Git je nejpoužívanější verzovací systém, pomáhá miliónům programátorů při jejich práci. Snadno se používá, je lehký na pochopení a je zdarma.

[.textinfo] Verzovací systém = systém správy historie souborů, verzí

Anglicky: Version Control System, VCS.

Tento systém ukládá všechny změny do speciální databáze a můžete se kdykoliv podívat a vrátit se do starší verze projektu/souboru.

Také můžete vytvářet tzv. větve, což jsou takové "odchylky" od hlavní cesty práce. To se dá využít například když zkoušíte nový design a nechcete ztratit předchozí verzi.

S Gitem velmi často také pracují týmy více lidí. Možnost větvení je proto skvělé řešení, protože každý člen má jen svou větev a tvoří si vlastní změny.

[.learn_img_big]
![Alt text](../images/git_branch.webp)

[.imageDescr] Příklad větvení v aplikaci GitKraken


##Výhody VCS

###Kompletní historie změn každého souboru
<p>Zaznamenávají se všechny změny. Vytváření, mazání a úprava souborů. Díky tomu se můžete kdykoliv vrátit a podívat se na provedené změny.</p>
<p>Změny se značí krátkými popisky, aby bylo snadné se v nich vyznat.</p>
<p class="text-info"><strong>Pozor!</strong> Nezaznamenává se vše při každém uložení souboru. Uživatel si sám určuje kdy a co se bude zálohovat.</p>

###Větvení
<p>Je skvělé při práci v týmech, ale může se hodit i samostatnému vývojáři. Provedené změny jsou pouze na jedné větvi.
Větve se dají zase spojovat dohromady, což umožňuje zkontrolovat kolize mezi nimi a řešit je.
Každý pracovník tak může pracovat na svojí větvi, a ty se pak spojí do jedné.</p>

<h3>Oprava chyb</h3>
<p>Při výskytu chyby se můžete jednoduše podívat do historie a najít, čím je chyba způsobena.</p>


<h2>Druhy VCS</h2>
<h3>Centralizované (CVCS)</h3>
<p>Existuje jeden centrální server, na kterém je kompletní historie změn. Každý uživatel má na svém počítači jen nejaktuálnější verzi.</p>
<p class="margin_before">Výhodou je, že všichni členové mohou vidět, na čem pracují ostatní, a je jednodušší na naučení. Administrátoři mohou definovat různá oprávnění.</p>
<p class="margin_before">Nevýhodou je, že při výpadku centrálního serveru nelze ukládat ani stahovat žádné verze, a při poškození dat na serveru je vše pryč.</p>
<ul>
<li>Subversion</li>
<li>CVS</li>
<li>Perforce</li>
</ul>

<div class="parent">
<img src="../images/image_part_001v2.png" class="learn_img_small"> 
</div>



<h3>Distribuované (decentralizované, DVCS)</h3>
<p>Nemá centrální databázi, každý uživatel má celou kopii u sebe. Poté změny "pushne" do sítě, nebo centrálního repozitáře.</p>
<p class="text-info">Repozitář = úložiště s historií všech uložených změn, všechny soubory a složky, celý "projekt"</p>
<p class="margin_before">Hlavními výhodami je možnost pracovat offline, protože každý uživatel má celý repozitář na svém počítači, což urychluje proces. 
Snadnější přepínání mezi větvemi a verzemi, řešení konfliktů. Větší bezpečnost.</p>
<p class="margin_before">Nevýhodou je pak trochu složitější fungování, stále ale určitě pochopitelné.</p>
<ul>
<li><strong><u>Git</u></strong></li>
<li>Mercurial</li>
<li>Bazaar</li>
</ul>

<div class="parent">
<img src="../images/image_part_002v2.png" class="learn_img_small"> </div>


<h2>Další verzovací systémy</h2>
<h3>Kdjfkl</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum! Incidunt quos eum corrupti, rem architecto ipsum ducimus 
consectetur sequi adipisci, beatae obcaecati debitis eaque qui atque eveniet dolores harum.</p>





#Úvod do Gitu {blue}
##[.orange underline]  toto ma tridu orange underline
[.textinfo] 
TRIDA TEXT INFO Ahojky jak se - 
mas
ja
se 
m
a
m
dobre. tak to je 
fajn.


\`\`\`md
# My cool header with ID
\`\`\`


##Git
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Exercitationem magnam alias ullam totam ea eligendi mollitia quae, excepturi adipisci dolores. 
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Exercitationem magnam alias ullam totam ea eligendi mollitia quae, excepturi adipisci dolores.

**janicka** simonova __ahoj__ *fhfh*

==jnj==

~~strikethrough~~

| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |

[1]: http://google.com/
[2]: http://yahoo.com/


> Pardon my french

sdfjls

> A paragraph of text
>
> Another paragraph
>
> - A list
> - with items



`;


export default text;