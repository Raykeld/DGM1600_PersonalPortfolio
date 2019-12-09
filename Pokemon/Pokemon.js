//data.stats[0].base_stat

// class Pokemon {
//     constructor(id, name, stats) {
//         this.id = id
//         this.name = name
//         this.base_stat = stats
//     }
// }

// const Mew = new Pokemon(151, 'Mew', 100);


homeButton.addEventListener('click', () => {
  document.location.href = '/index.html'
})


document.querySelector('#pokeButton').addEventListener('click', () => {
    let pokeId = prompt("Provide the Pokemon ID you want to add:")
    let pokeIdnum = parseInt(pokeId, 10)
    if(pokeIdnum > 807) {
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



const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
.then(data  => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url).then(pokedata => {
            populateDOM(pokedata)
            // console.log(pokedata.types[0].type)
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
        
        pokeCard.addEventListener("mouseover", function() {
            let type = single_pokemon.types[0].type.name
    pokeCard.setAttribute("style", `background: ${color(type)};`)
    "style",  `background: ${color(type)}`
  })

  // pokeCard.addEventListener("mouseout", function() {
  //   pokeCard.setAttribute("style", "background: none;")
  // })

        pokeCard.addEventListener( 'click', function() {
            pokeCard.classList.toggle('is-flipped');
            
  })
}


 function fillCardFront(pokeFront, data) {
   console.log(data.types[0].type.name)


     pokeFront.setAttribute('class', 'card__face card__face--front')
     let name = document.createElement('p')
     let pic = document.createElement('img')
     pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    name.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)}`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    
   pokeFront.appendChild(pic)
   pokeFront.appendChild(name)


 }

   function fillCardBack(pokeBack, data) {
       pokeBack.setAttribute('class', 'card__face card__face--back')
       let pokeOrder = document.createElement('p')
      
       let pokeType = document.createElement('p')
       let pokeAb = document.createElement('h5')
       let pokeAbilities = document.createElement('p')
       pokeAb.textContent = 'Abilities:'
       pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
       
       pokeType.textContent = `Type: ${data.types.map(t => t.type.name)}`;
       pokeAbilities.innerHTML = data.abilities
       .map(a => a.ability.name)
       .reduce(
         (accumulator, currentValue) =>
           (accumulator += `<li class="pokeability">${currentValue}</li>`),
         '',
       )
       pokeBack.appendChild(pokeOrder)
       
       pokeBack.appendChild(pokeType)
       pokeBack.appendChild(pokeAb)
       pokeBack.appendChild(pokeAbilities)
    //    pic.src = `http://www.rigelatin.net/copycat/media/cards/back/ancientmewback.jpg`
    
   }
 

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`
    } else return id 
}

function color(type) {
    if (type === 'fire') {
      return '#F03924'
    } else if (type === 'fairy') {
      return '#F2ACE0'
    } else if (type === 'fighting') {
      return '#A60303'
    } else if (type === 'ghost') {
      return '#732F67'
    } else if (type === 'grass') {
      return '#aede96'
    } else if (type === 'ground') {
      return '#A68568'
    } else if (type === 'ice') {
      return '#91E0F2'
    } else if (type === 'normal') {
      return '#D9D7D7'
    } else if (type === 'poison') {
      return '#BF6FB2'
    } else if (type === 'psychic') {
      return '#96B9D9'
    } else if (type === 'flying') {
      return '#719ED9'
    } else if (type === 'bug') {
      return '#A0A603'
    } else if (type === 'dark') {
      return '#404040'
    } else if (type === 'dragon') {
      return '##888C03'
    } else if (type === 'electric') {
      return '#F2E205'
    } else if (type === 'rock') {
      return '#736049'
    } else if (type === 'steel') {
      return '#A6A6A6'
    } else if (type === 'water') {
      return '#05C7F2'
    }
  }
