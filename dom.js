// Document Object Model

// getElementById

const result1 = document.getElementById('myId');
// console.log(result1);

// getElementByClassName

const result2 = document.getElementsByClassName('myPara')
// console.log(result2);

// getElementByTagName

const result3 = document.getElementsByTagName('button')
// console.log(result3);

// querySelector

const result4 = document.querySelector('#myId')
// console.log(result4);

// querySelectorAll

const result5 = document.querySelectorAll('#myPara')
// console.log(result5);

const result6 = document.querySelectorAll('ul li')
// console.log(result6);

const result7 = document.querySelector('ul li:nth-child(4)')
// console.log(result7);

// nextSibling
// nextElementSibling

const result8 = document.querySelector('ul li:nth-child(3)')
// console.log(result8);
// console.log(result8.nextSibling);
// console.log(result8.nextElementSibling);

// previousSibling
// previousElementSibling

// console.log(result8.previousSibling);
// console.log(result8.previousElementSibling);

// parentElement

// console.log(result8.parentNode);
// console.log(result8.parentElement);

// console.log(result8.firstElementChild);

// forgot  

const result9 = document.querySelector('ul')

// childNodes & children

// console.log(result9.childNodes);
// console.log(result9.children);

// firstChild & lastChild

// console.log(result9.firstChild);
// console.log(result9.lastChild);

// firstElementChild & lastElementChild

// console.log(result9.firstElementChild);
// console.log(result9.lastElementChild);