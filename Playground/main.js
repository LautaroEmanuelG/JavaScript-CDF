const div = document.querySelector("#contenedor")
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    div.innerHTML += `
    <h2>Hola Mundo</h2>
    <>Hola Mundo</>
    <h2>Hola Mundo</h2>
    `
})