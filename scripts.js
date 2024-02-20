

var descripcion=document.getElementById("descripcion");

var titulo=document.createElement("h2");
titulo.textContent="Descripcion";
descripcion.appendChild(titulo);


var parrafo=document.createElement("p");

var texto=document.createTextNode("¡Bienvenido a nuestro sitio web dedicado a la inteligencia artificial (IA)! Sumérgete en el fascinante mundo de la IA, donde la ciencia ficción se encuentra con la realidad y las máquinas aprenden a pensar como los humanos.En nuestro sitio, encontrarás una amplia gama de recursos, artículos informativos y noticias actualizadas sobre los últimos avances en IA. Desde algoritmos de aprendizaje profundo hasta aplicaciones prácticas en la vida cotidiana, estamos aquí para guiarte a través del emocionante paisaje de la inteligencia artificial");
parrafo.appendChild(texto)
descripcion.appendChild(parrafo)

