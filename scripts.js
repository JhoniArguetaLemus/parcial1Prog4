var descripcion = document.getElementById("descripcion");


var textoBienvenida = "¡Bienvenido a nuestro sitio web dedicado a la inteligencia artificial (IA)! Sumérgete en el fascinante mundo de la IA, donde la ciencia ficción se encuentra con la realidad y las máquinas aprenden a pensar como los humanos. En nuestro sitio, encontrarás una amplia gama de recursos, artículos informativos y noticias actualizadas sobre los últimos avances en IA. Desde algoritmos de aprendizaje profundo hasta aplicaciones prácticas en la vida cotidiana, estamos aquí para guiarte a través del emocionante paisaje de la inteligencia artificial.";
// Creamos un nuevo elemento <p> para el texto de bienvenida
var parrafoBienvenida = document.createElement("p");
parrafoBienvenida.textContent = textoBienvenida;

// Agregamos el nuevo elemento <p> al final del elemento descripción
descripcion.appendChild(parrafoBienvenida);

// Creamos un nuevo elemento <p> para "Lo que ofrecemos"
var parrafoOfrecemos = document.createElement("p");
parrafoOfrecemos.textContent = "Lo que ofrecemos:";

// Agregamos el nuevo elemento <p> al final del elemento descripción
descripcion.append(parrafoOfrecemos);

// Creamos un nuevo elemento <p> para "Artículos educativos"
var parrafoEducativos = document.createElement("p");
parrafoEducativos.textContent = "Artículos educativos: Explora nuestros artículos detallados que cubren temas clave en IA, desde conceptos básicos hasta desarrollos avanzados en el campo. Aprende sobre redes neuronales, procesamiento de lenguaje natural, visión por computadora y más.";

// Agregamos el nuevo elemento <p> al final del elemento descripción
descripcion.append(parrafoEducativos);


// Creamos un nuevo elemento <p> para "Artículos educativos"
var parrafoRecursos = document.createElement("p");
parrafoRecursos.textContent = "Recursos para principiantes y expertos: Ya sea que estés comenzando tu viaje en el mundo de la IA o seas un experto en el campo, tenemos recursos adaptados para satisfacer tus necesidades. Desde tutoriales paso a paso hasta libros recomendados y cursos en línea, estamos aquí para ayudarte a crecer y desarrollarte en este emocionante campo.";

// Agregamos el nuevo elemento <p> al final del elemento descripción
descripcion.append(parrafoRecursos);