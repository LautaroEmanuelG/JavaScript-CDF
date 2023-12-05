const getPokemon = async () => {

    const contenedor = document.querySelector('#contenedor-pokemon');
    contenedor.innerHTML = '';

    for (let i = 1; i < 51; i++) {

        try {
            const resolve = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const data = await resolve.json();

            contenedor.innerHTML += `
            <div class="container">
            <div class="card">
              <div class="front">
                <img class="front-heading" src="${data.sprites.front_default}">
                <p>${data.name.toUpperCase()}</p>
              </div>
              <div class="back">
                <img class="back-heading" src="${data.sprites.back_default}">
                <p>${data.name}</p>
              </div>
            </div>
          </div>
          `

        } catch (error) {
            console.log(error)
        }
    }
}

getPokemon()