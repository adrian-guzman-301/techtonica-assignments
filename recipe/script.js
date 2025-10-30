document.title = "Do Not Eat This 🤮🤮🤮🤮🤮";

let newListItem = document.createElement('li')

newListItem.textContent = '1 tablespoon of warm canned clam juice (optional, for better gagging)'

document.querySelector('ul').appendChild(newListItem)

const myDiv = document.getElementById("myDiv")

//create checkbox element
let checkbox = document.createElement("input")

//assigning attributes to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

//create label for checkbox
let label = document.createElement("label");

//assign attributes for created label tag
label.htmlFor = "id";

//append created text to created label tag
label.appendChild(
    document.createTextNode("This creates the checkbox label")
)

//append checkbox and label to div
myDiv.appendChild(checkbox);
myDiv.appendChild(label);