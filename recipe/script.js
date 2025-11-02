document.title = "Do Not Eat This 🤮🤮🤮🤮🤮";

let newListItem = document.createElement('li')

newListItem.textContent = '1 tablespoon of warm canned clam juice (optional, for better gagging)'

document.querySelector('ul').appendChild(newListItem)

//checkboxes
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
    //change ingredients heading text
    //change tab text
    //change description
    document.querySelector('.description').innerText = 'This miracle jungle fruit of the Amazon is the cure for everything and whether this claim holds up to scientific scutiny or not, the stuff is pretty delicious.'
    //change image
    document.querySelector('img').src = 'acai.webp'
    //change image photo credit link
    document.querySelector('cite > a').href = 'https://bobbyfisherphoto.com/appetites'
    //change image photo credit text
    document.querySelector('cite > a').innerText = 'Bobby Fisher'
    //change ingredients
    document.querySelector('ul > li').innerText = '1/2 to 3/4 cup acai juice'
    document.querySelector('ul > li + li').innerText = '2 bananas, peeled'
    document.querySelector('ul > li + li + li').innerText = '7 ounces frozen unsweetened acai puree'
    document.querySelector('ul > li + li + li + li').innerText = '3/4 cup frozen blueberries'
    document.querySelector('ul > li + li + li + li + li').innerText = '1/4 to 1/2 cup fresh or frozen stawberries or raspberries'
    document.querySelector('ul > li + li + li + li + li + li').innerText = '1/2 cup granola, for garnish (optional)'
    document.querySelector('ul > li + li + li + li + li + li + li').innerText = '1/4 cup cacao nibs, for garnish (optional)'
    //change newListItem text content
    newListItem.textContent = 'Vitamix or another blender with a fairly strong motor'
    //add checkboxes to each list ingredient list item with strikethrough toggle
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
    //change directions
    document.querySelector('ol > li').innerText = 'Place acai juice and 1 banana in blender pitcher'
    document.querySelector('ol > li + li').innerText = 'Add frozen acai puree, blueberries, and strawberries on top so blender blades suck in the frozen items'
    document.querySelector('ol > li + li + li').innerText = 'Pulse as needed to form a smooth sorbet, scraping down blender pitcher sides with a spatula if necessary'
    document.querySelector('ol > li + li + li + li').innerText = 'Slice remaining banana'
    document.querySelector('ol > li + li + li +li + li').innerText = 'Divide mixture between two bowls'
    //add new directions list item
    document.querySelector('ol > li + li + li + li + li').insertAdjacentElement('afterend', document.createElement('li')).innerText = 'Top each bowl with garnishes. Serve Immediately.'
    //change background color
    document.querySelector('body').style.backgroundColor = 'rgb(40, 28, 30)' 
    //change main heading text color
    document.querySelector('h1').style.color = 'rgb(206, 179, 135)'
    //change remaining headings text color
    
    //change description text color
    //change all list items text color
    //change link unclicked colors
    //change link clicked colors
    //change body font style
    //change other recipe links src attributes
  }