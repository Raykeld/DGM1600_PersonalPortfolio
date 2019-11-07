async function getAPIData(url) {
    try {
        const response = await fetch(url)
    const data = await response.json()
    return data
} catch (error) {
    console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data  => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
            populationDOM(pokedata)
        })
    }
})


let mainArea = document.querySelector('main')

function populationDOM(single_pokemon) {
        let pokeScene = document.createElement('div')
        let pokeCard = document.createElement('div')
        let pokeFront = document.createElement('div')
        let pokeBack = document.createElement('div')
        let pokeDiv = document.createElement('div')
        let name = document.createElement('p')
        let pic = document.createElement('img')

        fillCardBack(pokeBack, single_pokemon)

        pokeScene.setAttribute('class', 'scene')
        pokeCard.setAttribute('class', 'card')
        pokeFront.setAttribute('class', 'charDivs card__face card__face--front')
        pokeBack.setAttribute('class', 'card__face card__face--back')
        pic.setAttribute('class', 'picDivs')

         let pokeNum = getPokeNumber(single_pokemon.id)
         pokeFront.appendChild(name)
        name.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`

        pic.src = `../images/${pokeNum}.png`
        pokeFront.appendChild(pic)
        pokeFront.appendChild(name)

        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)


        mainArea.appendChild(pokeDiv)

        pokeCard.addEventListener( 'click', function() {
            pokeCard.classList.toggle('is-flipped');
        });
}

function fillCardBack(pokeBack, data) {
    let pokeOrder = document.createElement('p').textContent = pokeBack.order
    pokeBack.appendChild(pokeOrder)
}

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`
    } else return id    
} 

