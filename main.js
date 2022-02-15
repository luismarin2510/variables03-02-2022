/*para abrir ventana*/
document.querySelector("#abrir").addEventListener("click",(e)=>{
    document.querySelector("#ventana").show(); // abre la funcion de ventana emergente
})
/* para cerar ventana */
document.querySelector("#botonCerrar").addEventListener("click",(e)=>{
    document.querySelector("#ventana").close(); // asigna el boton y la funcion 
})
/* mensajes de consola  */
console.log("mensaje")
console.warn("cuidado");
console.error("mortal");
console.group ("mensajes agrupados");
let datos = [
    {nombre:"luis",edad:30},
    {nombre:"pepito",edad:20}
];
console.table(datos);
console.groupEnd();

console.log("%c Personalizado","color:green; font-size:15px");

/****** constantes y variables en js ********/

 let numero = 14.51;
 let numbero = Number(1451);

 console.log(numero);
 console.log(numbero);


/* datos de tipo string*/
let primerNombre ="Luis";
let segundoNombre ="Eduardo";
let PrimerApellido ="Marin"
let segundoApellido ="Velasco";
console.log(primerNombre,PrimerApellido);
console.log(segundoNombre+" "+segundoApellido); // concatenar se usa + pero los espacios hay que asignarlos 
console.log(segundoNombre.concat(PrimerApellido));// pega los datos tal cual no hay espacios solo son string
console.log(primerNombre+'"'+PrimerApellido+'"');//concatenado con comillas simples ('').... es mas complicado 
console.warn(`${primerNombre} ${PrimerApellido}`); // se puede usar la tilde invertida   o basquit (`) aqui si se puede usar 
////////////////////////////////////////////// el espacio y la y la simbologia que quiera (`${ } () && ${ }`)
console.log(`%c${segundoNombre} %c"'${segundoApellido}'"`,"color:orange;","color:blue");
////////////////////////////////////////////////%C separa caracteres para darle propiedades como el color 

/* tipos de datos numericos*/////
let edad = 30;
let altura = 1.75;
let moneda = Intl.NumberFormat("de-DE",{style:"currency",currency:"COP"}).format(1000); // asi se aigna formato de moneda colombiana 

console.log(`
edad:${edad}
atura:${altura}
Moneda:${moneda}
\n`);

/* Tipos de de datos booleanos */
let soyestudiante = true;
let soyprofesor = false;
console.log( `verdadero:${soyestudiante} falso:${soyprofesor}
\n`);

/* variables null e indefinido */
let variable = null;// si le coloco null la variable la lanza como objeto 
let varr; // si no le coloco nada lo lanza como indefinido 
let varred = undefined;

console.log(varr); // identifica como indefinido pero no exite por eso aparece en gris en la consola 
console.log(typeof(variable)); // identifica como que tipo es la variable objeto
console.log(typeof(varred)); //define indefinido pero esta si se muestra en negro luego existe 
/* tipos de datos objeto  */

const informacion = {
    personal:{
        edad:25,
        atura:1.75,
        sexo: "M"
    },

    vivienda:{
        pais:"colombia",
        ciudad:"bucaramanaga"
    }
};

console.log(informacion);

/* tipos de datos map */
const lista = new Map();
lista.set("nombre","luis");
lista.set("aPellido","Marin");

console.log(lista);

/* TIPOS DE DATOS Set */
const data = new Set();
data.add("luis");
data.add("marin");

console.log(data);

/* capturar datos desde ventana emergente*/
let nombre= prompt("Ingresar Numero","solo numeros"); // se declara la variable se asigna nombre dentro de () se asigna
console.log(nombre);  // un enunciado y como opcion que tipo de respuesta se espera 