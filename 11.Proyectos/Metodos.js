// fetch('https://pokeapi.co/api/v2/pokemon/gengar')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
const contenedor = document.querySelector('#contenedor')

const getPokemon = async () => {
    for (let i = 1;i<=20;i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await response.json()
        //console.log(data)
        contenedor.innerHTML += `<article>
        <img src="${data.sprites.front_default}" alt="">
        <h3>${data.name}</h3>
        <p>${data.id}</p>
        </article>`
    }
}
getPokemon()

window.onscroll = () => {
    console.log('scrolling')
    console.log(window.scrollY)
    console.log(document.documentElement.scrollTop)
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement
    //console.log({scrollTop,scrollHeight,clientHeight})
    if (scrollTop + clientHeight >= scrollHeight - 5){
        console.log('llegaste al final')
    }
}
/*
window.scroll
*/