//para abrir ventana 
document.querySelector("#abrir").addEventListener("click",(e)=>{
    document.querySelector("#ventana").show();
})
// para cerar ventana 
document.querySelector("#botonCerrar").addEventListener("click",(e)=>{
    document.querySelector("#ventana").close();
})
console.log("mensaje")
console.warn("ten cuidado");
console.error("mortal");
console.group ("mensajes agrupados");
let datos = [
    {nombre:"luis",edad:30},
    {nombre:"pepito",edad:20}

];
console.table(datos);

console.groupEnd();

console.log("%c personalizado","color:green; font-size:15px");