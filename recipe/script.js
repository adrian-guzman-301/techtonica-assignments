document.title = "Do Not Eat This 🤮🤮🤮🤮🤮";

let newListItem = document.createElement('li')

newListItem.textContent = '1 tablespoon of warm canned clam juice (optional, for better gagging)'

document.querySelector('ul').appendChild(newListItem)

let groceryList = document.querySelectorAll('ul > li');

for(let i = 0; i < groceryList.length; i++) {
  let listItem = groceryList[i]
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  listItem.prepend(checkbox)
  checkbox.addEventListener('click', toggleStrikethrough)
  function toggleStrikethrough() {
  if(checkbox.checked) {
  checkbox.parentNode.classList.add('checked') 
    } else {
  checkbox.parentNode.classList.remove('checked')
    }
  }
}

//button
const button = document.querySelector('button')
button.addEventListener('click', renderAcaiBowl) 
  function renderAcaiBowl() {
    //change h1
    document.querySelector('h1').innerText = 'Acai Bowl'
    //change description
    document.querySelector('.description').innerText = 'This miracle jungle fruit of the Amazon is the cure for everything and whether this claim holds up to scientific scutiny or not, the stuff is pretty delicious.'
    //change image
    document.querySelector('img').src = 'acai.webp'
    //change image photo credit
    //change ingredients
    //change directions
    //change external links
  }