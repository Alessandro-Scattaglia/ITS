# Custom Detective – Wikipedia JavaScript Page

**Sito analizzato:** [https://en.wikipedia.org/wiki/JavaScript](https://en.wikipedia.org/wiki/JavaScript)



## 1. Titolo della pagina


let title = document.querySelector('h1');
console.log(title.innerText);

**risultato**
"JavaScript"





## 2. Primo paragrafo introduttivo


let firstParagraph = document.querySelector('div.mw-parser-output > p');
console.log(firstParagraph.innerText);


**risultato**

"JavaScript, often abbreviated as JS, is a programming language..."





## 3. Sommario

let toc = document.querySelector('#toc');
console.log(toc.innerText);

**risultato**

Contents
1 History
2 Trademark
3 Website client-side usage





## 4. Tutti i titoli di sezione

let headings = document.querySelectorAll('h2 .mw-headline');
headings.forEach(h => console.log(h.innerText));

**risultato**

History
Trademark
Website client-side usage
Other usage
Execution
Features
Syntax
Security
Development tools
Related technologies
References
Further reading
External links





## 5. Primo link interno

let firstInternalLink = document.querySelector('a[href^="/wiki/"]');
console.log(firstInternalLink.href);

**risultato**

https://en.wikipedia.org/wiki/Main_Page





## 6. Immagine principale dell’infobox

let mainImage = document.querySelector('.infobox img');
console.log(mainImage.src);

**risultato**

https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/330px-JavaScript_code.png





## 7. Tabella “infobox”

let infobox = document.querySelector('.infobox');
console.log(infobox.innerText);


**risultato**

console.log(infobox.innerText);
VM187:2 JavaScript
Screenshot of JavaScript source code

Paradigm	Multi-paradigm: event-driven, functional, imperative, procedural, object-oriented
Designed by	Brendan Eich of Netscape initially; others have also contributed to the ECMAScript standard
First appeared	4 December 1995; 29 years ago[1]

Stable release	
ECMAScript 2024[2]  / June 2024; 10 months ago

Preview release	
ECMAScript 2025[3]  / 27 March 2024; 12 months ago

Typing discipline	Dynamic, weak, duck
Memory management	Garbage collection
Filename extensions	
.js.cjs.mjs[4]

Website	ecma-international.org/publications-and-standards/standards/ecma-262/
Major implementations
V8, JavaScriptCore, SpiderMonkey, Chakra
Influenced by
Java,[5][6] Scheme,[6] Self,[7] AWK,[8] HyperTalk[9]
Influenced
ActionScript, ArkTS, AssemblyScript, CoffeeScript, Dart, Haxe, JS++, Opa, TypeScript

 JavaScript at Wikibooks






 ## 8. Prime 3 citazioni nella sezione References

 let references = document.querySelectorAll('ol.references > li');
for (let i = 0; i < 3; i++) console.log(references[i].innerText);

 **risultato**

 ^ 
Jump up to:
a b "Netscape and Sun announce JavaScript, the Open, Cross-platform Object Scripting Language for Enterprise Networks and the Internet" (Press release). 4 December 1995. Archived from the original on 16 September 2007.
VM191:2 ^ "ECMAScript® 2024 Language Specification". June 2024. Retrieved 30 August 2024.
VM191:2 ^ "ECMAScript® 2025 Language Specification". 27 March 2024. Retrieved 17 April 2024.






## 9. Paragrafo nella sezione “History”
let historyParagraph = document.querySelector('#History').parentElement.nextElementSibling;
console.log(historyParagraph.innerText);

**risultato**
Creation at Netscape






## 10. Footer di Wikipedia

let footer = document.querySelector('#footer');
console.log(footer.innerText.slice(0, 100) + '...');

**risultato**

This page was last edited on 14 April 2025, at 01:40 (UTC).
Text is available under the Creative Com...