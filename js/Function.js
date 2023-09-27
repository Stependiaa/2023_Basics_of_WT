const node_for_click = document.getElementById('for_click')

function find_edit(){
const secondName = document.getElementsByTagName('span')[1]
console.log(secondName.innerHTML)
secondName.innerHTML = 'Danilov'
console.log(secondName.innerHTML)
}

node_for_click.addEventListener("click",find_edit)
