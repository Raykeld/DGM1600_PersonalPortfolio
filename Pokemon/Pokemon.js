//data.stats[0].base_stat

class Pokemon {
    constructor(id, name, stats) {
        this.id = id
        this.name = name
        this.base_stat = stats
    }
}

const Mew = new Pokemon(151, 'Mew', 100);

document.querySelector('#pokeButton').addEventListener('click', () => {
    let pokeId = prompt("Provide the Pokemon ID you want to add:")
    let pokeIdnum = parseInt(pokeId, 10)
    if(pokeIdnum < 807) {
        alert('That pokemon ID doesnt not exist! Please enter a different ID')
        return
    } else {
    
getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(result => {
        //let newPokemon = new Pokemon(results)
    populateDOM(result)
    })
    .catch(error => console.log(error))
    }
})

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
        getAPIData(pokemon.url).then(pokedata => {
            populateDOM(pokedata)
        })
    }
})

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
        let pokeScene = document.createElement('div')
        let pokeCard = document.createElement('div')
        let pokeFront = document.createElement('div')
        let pokeBack = document.createElement('div')
    
        fillCardFront(pokeFront, single_pokemon)
        fillCardBack(pokeBack, single_pokemon)

        pokeScene.setAttribute('class', 'scene')
        pokeCard.setAttribute('class', 'card')
        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)

        mainArea.appendChild(pokeScene)


        pokeCard.addEventListener( 'click', function() {
            pokeCard.classList.toggle('is-flipped');
        })
    }


 function fillCardFront(pokeFront, data) {
     pokeFront.setAttribute('class', 'card__face card__face--front')
     let name = document.createElement('p')
     let pic = document.createElement('img')
     pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    name.textContent = `${data.name}`
    //pic.src = `../images/${pokeNum + "MS"}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    
   pokeFront.appendChild(pic)
   pokeFront.appendChild(name)
 }

   function fillCardBack(pokeBack, data) {
       pokeBack.setAttribute('class', 'card__face card__face--back')
       let pokeOrder = document.createElement('p')
       let pokeHP = document.createElement('h5')
       pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    //    pokeHP.textContent = data.stats[0].base_stat
    //    pokeOrder.textContent = `${data.type[1].type.name}`
       pokeBack.appendChild(pokeHP)
       pokeBack.appendChild(pokeOrder)
       
    
   }
 

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`
    } else return id 
} 

let grassButton = document.createElement('button')
grassButton.textContent = "Grass"

let fireButton = document.createElement('button')
fireButton.textContent = "Fire"

let waterButton = document.createElement('button')
waterButton.textContent = "Water"

let bugButton = document.createElement('button')
bugButton.textContent = "Bug"

let flyingButton = document.createElement('button')
flyingButton.textContent = "Flying"



mainHeader.appendChild(grassButton)
mainHeader.appendChild(fireButton)
mainHeader.appendChild(waterButton)
mainHeader.appendChild(bugButton)
mainHeader.appendChild(flyingButton)

