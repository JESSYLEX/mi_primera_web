//alert("Hola este es mi Javascript");

// let nombre = "marta";

//var nombre1 = "marta";

//const nombre2 = "marta";

console. log(nombre);
console. log(nombre1);
console. log(nombre2);

// SELECCIONAR ELEMENTOS
let contenidoTitulo = "nombre";

let titulo = document.querySelector(".logo . fuente")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerHTML; 
console.log(textoTitulo)

if(textoTitulo == "nombre" ) {
    titulo.innerHTML = "otro";
} else {console.log ("no se cumple");}

//FUNCIONES

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");
function cambiarTexto(nombre, ciudad, gusto) {let
contenido = `Soy ${nombre}, una mujer ${ciudad} que ha encontrado el equilibrio perfecto entre dos pasiones increíbles. Por un lado, soy una creadora de contenido en una misión emocionante: impulsar emprendimientos y pequeñas empresas en el apasionante mundo de las redes sociales.
tengo otro amor, y es por las majestuosas ${gusto}. Siento una profunda conexión con la naturaleza, y cada caminata en la montaña es una oportunidad para recargar mi espíritu y encontrar la serenidad en medio de la grandeza natural.`
     ;
    return contenido}

   parrafo.innerHTML = cambiarTexto(nombre, ciudad, gusto); 