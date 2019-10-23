import { films } from '../assets/films.js'
import { people } from '../assets/people.js'
 
console.log('hey, I am JavaScript on your page!')
 
let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')
 
// films.forEach(function(film) {
// let filmDiv = document.createElement('div')
// let title = document.createElement('h1')
// let crawl = document.createElement('p')
 
// filmDiv.appendChild(title)
// filmDiv.appendChild(crawl)
 
// title.textContent = film.title
// crawl.innerText = film.opening_crawl
 
// mainArea.appendChild(filmDiv)
// })
 
 
 
const maleCharacters = people.filter(persons => person.gender === 'male')
const femaleCharacters = people.filter(persons => person.gender === 'female')
const otherCharacters = people.filter(persons => person.gender !== 'female' & person.gender )
const allDivs = Array.from(mainArea.querySelectorAll('div'))
 
let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', () => {
    console.log(elt)
    maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        
        matchedDiv.setAttribute("stlye", "display: none;")
    })
    femaleCharacters.forEach(elt => {
        //elt.setAttribute('style', 'visibility: hidden;');
    })
})
let femaleButton = document.createElement('button')
femaleButton.textContent = "female Characters"
femaleButton.addEventListener('click', () => {
    
})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
 
 
people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')
 
    let charNum = getCharNumber(person.url)
 
    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
 
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
 
    mainArea.appendChild(personDiv)
})
 
function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice()
    } else {
        return charID
    }
}
 
