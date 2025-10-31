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