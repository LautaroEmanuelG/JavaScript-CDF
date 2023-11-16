const div = document.querySelector("#contenedor")

function enviarMsj(nombre){
    const name = document.getElementById('name')
    alert(name.value)
    div.innerHTML += `Bienvenido a mi primera modif de ${nombre}`
}