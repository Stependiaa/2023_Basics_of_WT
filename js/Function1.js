const node_for_click1 = document.getElementById('For_cl')


function find_edit(){
const Name = document.getElementsByTagName('span')[2]
console.log(Name.innerHTML)
Name.innerHTML = 'Stepan'
console.log(Name.innerHTML)
}

node_for_click1.addEventListener("click",find_edit)
