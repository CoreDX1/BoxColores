const btn = document.querySelector("#btn");
const caja = document.getElementById("contenido")
const caja1 = document.querySelector(".caja-1")
const caja2 = document.querySelector(".caja-2")
const caja3 = document.querySelector(".caja-3")
const caja4 = document.querySelector(".caja-4")

const colores = ["blue", "yellow", "red", "green", "violet"]

//SetInterval no Ramdom
window.addEventListener("load", () =>{
   let indexColores = 0;
   const cambiarColorCaja1 = () => {
      caja1.style.backgroundColor = colores[`${indexColores}`]
      if(indexColores < 4){
         indexColores++;
      }else{
         indexColores = 0;
      };
   }
   cambiarColorCaja1()
   setInterval(cambiarColorCaja1, 2000)
})
// SetInterval Ramdom
window.addEventListener("load", () =>{
   const cambiarColorCaja2 = () => {
      let indexColores = Math.floor(Math.random() * colores.length)
      caja2.style.backgroundColor = colores[`${indexColores}`]
   }
   setInterval(cambiarColorCaja2, 2000)
})



// Click No Ramdom
c3 = 0;
const cambiarColorCaja3 = () => {
  let coloresIndex = c3 % (colores.length)
   caja3.style.backgroundColor = colores[`${coloresIndex}`]
   c3++;
}

// Click Ramdom

const cambiarColorCaja4 = () => {
   let coloresIndex = Math.floor(Math.random() * colores.length)
   caja4.style.backgroundColor = colores[`${coloresIndex}`]
}


//Colores 0 al 4

// window.addEventListener("load", function(){
   // console.log("Documento cargando")
   // const colores = ["blue", "yellow", "red", "green", "violet"]
   // let indexColores = 0;
   
   // const cambiarColor = function(){
      // caja.style.backgroundColor = colores[`${indexColores}`]
      // if( indexColores < 4){
         // indexColores ++;
      // }else{
         // indexColores = 0;
      // }
      // console.log(indexColores)

   // };
   // cambiarColor()
   // setInterval(cambiarColor, 500)
// })

// Colores Ramdom Automatica 1v

// window.onload = function () {    
// const colores = ["blue", "yellow", "red", "green", "violet"]

// setInterval(function () {
// caja.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];
// }, 1000);
// }

// Colores Ramdom Automatica 2v

// window.addEventListener("load", function () {
// const colores = ["blue", "yellow", "red", "green", "violet"]
// const coloresRamdon = function (){
// let indexColores = Math.floor(Math.random()*colores.length)
// caja.style.backgroundColor = colores[`${indexColores}`]
// }
// setInterval(coloresRamdon, 1000)
// })


// Colores Ramdom haciendo click

// const colorClick = () => {
   // const colores = ["blue", "yellow", "red", "green", "violet"]
   // let indexColores = Math.floor(Math.random() * colores.length);
   // caja.style.backgroundColor = colores[`${indexColores}`]
   // console.log(indexColores)
// };


// Colores de 0 al 4 con click

   // const colores = ["blue", "yellow", "red", "green", "violet"]
   // let i = 0;

   // const colorClick = () => {
      // let indexColor = i % (colores.length);
      // caja.style.backgroundColor = colores[`${indexColor}`];
      // i ++;
   // }




// Cambiar el Fondo

const fondoColores = ["white", "rgba(169, 169, 169, 0.25)"]
let f = 0;
const cambiarFondo = () =>{
   let indexFondo = f % (fondoColores.length);
   document.body.style.backgroundColor = fondoColores[`${indexFondo}`]; 
   f++;
}
// caja.addEventListener("click", colorClick)
btn.addEventListener("click", cambiarFondo)
caja3.addEventListener("click", cambiarColorCaja3)   
caja4.addEventListener("click", cambiarColorCaja4)


