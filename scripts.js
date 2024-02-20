var descripcion = document.getElementById("descripcion");


var textoBienvenida = "¡Bienvenido a nuestro sitio web dedicado a la inteligencia artificial (IA)! Sumérgete en el fascinante mundo de la IA, donde la ciencia ficción se encuentra con la realidad y las máquinas aprenden a pensar como los humanos. En nuestro sitio, encontrarás una amplia gama de recursos, artículos informativos y noticias actualizadas sobre los últimos avances en IA. Desde algoritmos de aprendizaje profundo hasta aplicaciones prácticas en la vida cotidiana, estamos aquí para guiarte a través del emocionante paisaje de la inteligencia artificial.";

var parrafoBienvenida = document.createElement("p");
parrafoBienvenida.textContent = textoBienvenida;


descripcion.appendChild(parrafoBienvenida);


var parrafoOfrecemos = document.createElement("p");
parrafoOfrecemos.textContent = "Lo que ofrecemos:";


descripcion.append(parrafoOfrecemos);


var parrafoEducativos = document.createElement("p");
parrafoEducativos.textContent = "Artículos educativos: Explora nuestros artículos detallados que cubren temas clave en IA, desde conceptos básicos hasta desarrollos avanzados en el campo. Aprende sobre redes neuronales, procesamiento de lenguaje natural, visión por computadora y más.";


descripcion.append(parrafoEducativos);



var parrafoRecursos = document.createElement("p");
parrafoRecursos.textContent = "Recursos para principiantes y expertos: Ya sea que estés comenzando tu viaje en el mundo de la IA o seas un experto en el campo, tenemos recursos adaptados para satisfacer tus necesidades. Desde tutoriales paso a paso hasta libros recomendados y cursos en línea, estamos aquí para ayudarte a crecer y desarrollarte en este emocionante campo.";


descripcion.append(parrafoRecursos);

var nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "JOSE JHONIS ARGUETA LEMUS";


var contenedor = document.getElementById("container");
var elemento2 = document.getElementById("elemento2");


contenedor.insertBefore(nuevoElemento, elemento2);