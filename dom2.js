// getAttribute

const result1 = document.querySelector('ul')

// console.log(result1.getAttributeNames());
// console.log(result1.getAttribute('class'));

// setAttribute

result1.setAttribute('myAttribute','Vinay');

// console.log(result1.getAttribute('myAttribute'));

result1.setAttribute('id','newList')

// console.log(result1.getAttributeNames());

// console.log(result1.dataset);

// classList

// console.log(result1.classList);

// add
result1.classList.add('first')
result1.classList.add('second')
result1.classList.add('third')

// remove
result1.classList.remove('third')

// console.log(result1.classList);

// contains

// console.log(result1.classList.contains('first'));

if(!result1.classList.contains('red')){
    result1.classList.add('red')
}else{
    result1.classList.add('green')
}

const list = document.querySelector('ul')

// createElement
const listItem = document.createElement('li')
// createTextNode
const text = document.createTextNode('Service')
// appendChild
listItem.appendChild(text)
listItem.classList.add('nav-item')
// console.log(listItem);

list.appendChild(listItem)
// console.log(list);

// insertBefore

// const item = document.querySelector('.first')
// const item = document.querySelector('.last')

list.insertBefore(listItem,item)

//
const text2 = '<h3>Hello EveryOne</h3>'
// list.insertAdjacentHTML("beforebegin",text2)
// list.insertAdjacentHTML("afterend",text2)
// list.insertAdjacentHTML("afterbegin",text2)
// list.insertAdjacentHTML("beforeend",text2)

list.style.backgroundColor = 'black'
list.style.color = 'aqua'






