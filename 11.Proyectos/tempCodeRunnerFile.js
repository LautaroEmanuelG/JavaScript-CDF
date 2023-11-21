const getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/gengar')
    const data = await response.json()
    console.log(data)
}