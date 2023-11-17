document.addEventListener('DOMContentLoaded', async () => {
    const card = document.querySelector('#card');
    const otrodios = document.querySelector('#otrodios');

    const getCards = async () => {
        const getDios = await fetch('JsonDioses.json')
        const dioses = await getDios.json()
        return dioses
    }
    let dioses = await getCards()

    card.addEventListener('click', () => {

    })
})
