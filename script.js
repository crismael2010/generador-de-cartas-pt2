/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "The last of us ",
        imagen: "./imagenes/Tlou.jpg",
        descripcion: "Juego de supervivencia realista",
    },
    {
        id: 2,
        nombre: "Fifa Street",
        imagen: "./imagenes/FifaS.jpeg",
        descripcion: "El clasico Fifa con un toque callejero",
    },
    {
        id: 3,
        nombre: "Minecraft",
        imagen: "./imagenes/Mc.webp",
        descripcion: "Juego de surpervivencia basado en cuadrados =)",
    },
    {
        id: 4,
        nombre: "Fornite",
        imagen: "./imagenes/F.jpg",
        descripcion: "Battle royale con costruccion de 100 jugadores",
    },
    
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")



/* Función que recorre el listado de las cartas */
function recorrerCartas(){
    contenedorCartas.innerHTML = " "
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
      <article class="card">
        <img src="${carta.imagen}" alt="Imagen del proyecto">
        <div class="info">
          <h2>${carta.nombre}</h2>
          <p>${carta.descripcion}</p>
        </div>
     </article>
      `
    )
}


/*generador de cartas*/
    function agregarJuego(){
        const nombre = prompt("Como se llama el juego?")
        const img = prompt("img del mismo")
        const descripcion =  prompt("descripcion facha B)")

        const carta = {nombre,img,descripcion}
    
    listadoCartas.push(carta)
    recorrerCartas()
}
recorrerCartas()
