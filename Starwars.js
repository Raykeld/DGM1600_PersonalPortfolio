import { films } from '../assets/films.js'
import { people } from '../assets/people.js'
 
console.log('hey, I am JavaScript on your page!')
 
let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')
 
//  films.forEach(function(film) {
//  let filmDiv = document.createElement('div')
//  let title = document.createElement('h1')
//  let crawl = document.createElement('p')
 
//  filmDiv.appendChild(title)
//  filmDiv.appendChild(crawl)
 
//  title.textContent = film.title
//  crawl.innerText = film.opening_crawl
 
//  mainArea.appendChild(filmDiv)
//  })


 
people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
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
const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.filter !== 'male')
const allDivs = Array.from(mainArea.querySelectorAll('div'))

let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', () => {
  femaleCharacters.forEach(character => {
      let matchedDiv = allDivs.find(oneDiv => {
        return oneDiv.firstChild.textContent == character.name
      })
      if(matchedDiv.getAttribute("style") === "display: none;") {
        matchedDiv.setAttribute("style", "display: revert;")
      } else {
        matchedDiv.setAttribute("style", "display: none;")
      }
    })
 })

 let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', () => {
  maleCharacters.forEach(character => {
      let matchedDiv = allDivs.find(oneDiv => {
        return oneDiv.firstChild.textContent == character.name
      })
      if(matchedDiv.getAttribute("style") === "display: none;") {
        matchedDiv.setAttribute("style", "display: revert;")
      } else {
        matchedDiv.setAttribute("style", "display: none;")
      }
    })
 })


mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
 
