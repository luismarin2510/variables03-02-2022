//para abrir ventana 
document.querySelector("#abrir").addEventListener("click",(e)=>{
    document.querySelector("#ventana").show();
})
// para cerar ventana 
document.querySelector("#botonCerrar").addEventListener("click",(e)=>{
    document.querySelector("#ventana").close();
})