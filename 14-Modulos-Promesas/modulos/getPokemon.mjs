const getPokemon = async () => {
    try {
        const resolve = await fetch('https://pokeapi.co/api/v2/pokemon/https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        const data = await resolve.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export {getPokemon}