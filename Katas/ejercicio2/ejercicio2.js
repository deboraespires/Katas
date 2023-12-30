// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");

document.body.appendChild(nuevoDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement("div");
const p = document.createElement("p");

divP.appendChild(p);
document.body.appendChild(divP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const div6 = document.createElement("div");

for (i=0; i<6; i++) {
    const p = document.createElement("p");
    div6.appendChild(p);
}

document.body.appendChild(div6);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const nuevoP = document.createElement("p");

nuevoP.textContent = "Soy dinámico!";

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");

h2.textContent = "Wubba Lubba dub dub";

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminados = document.querySelectorAll(".fn-remove-me");

for (const eliminado of eliminados) {
    eliminado.remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const medioDiv = document.createElement("div");

medioDiv.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");

document.body.insertBefore(medioDiv, divs[1]);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const dentroDiv = document.querySelectorAll("div.fn-insert-here");

for (const div of dentroDiv) {
    const dentro = document.createElement("p");
    dentro.textContent = "Voy dentro!";
    div.appendChild(dentro);
}


