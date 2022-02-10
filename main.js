//para abrir ventana 
document.querySelector("#abrir").addEventListener("click",(e)=>{
    document.querySelector("#ventana").show();
})
// para cerar ventana 
document.querySelector("#botonCerrar").addEventListener("click",(e)=>{
    document.querySelector("#ventana").close();
})
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

console.log("%c personalizado","color:green; font-size:15px");
/****** constantes y variables en js ********/

// let numero = 14.51;
// let numbero = Number(1451);

// console.log(numero);
// console.log(numbero);

let primerNombre ="Luis";
let segundoNombre ="Eduardo";
let PrimerApellido ="Marin"
let segundoApellido ="Velasco";
console.log(primerNombre,PrimerApellido);
console.log(segundoNombre+" "+segundoApellido); // concatenar se usa + pero los espacios hay que asignarlos 
console.log(segundoNombre.concat(PrimerApellido));// pega los datos tal cual no hay espacios solo son string
