//Obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))

console.log(peliculaConsultadaEnMemoria);

//asignando valores a las etiquetas que quiero controlar:
let etiquetaImagen=document.getElementById("imagenpelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracion

let etiquetasinopsis=document.getElementById("sinopsispelicula")
etiquetasinopsis.textContent=peliculaConsultadaEnMemoria.sinopsis

let etiquetabanner = document.getElementById("banner")
etiquetabanner.src = peliculaConsultadaEnMemoria.banner

let etiquetagenero=document.getElementById("generoPelicula")
etiquetagenero.textContent=peliculaConsultadaEnMemoria.genero