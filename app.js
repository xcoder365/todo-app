let addToDoButton = document.getElementById('addToDo')
let toDoList = document.getElementById('toDoList')
let inputField = document.getElementById('inputField')
// all code on github

addToDoButton.addEventListener('click', function() {
    // create p and 2 buttons done and delete
    var paragraph = document.createElement('p')

    // paragraph.innerText = "hello world"
    var doneButton = document.createElement('button')
    var delButton = document.createElement('button')
    paragraph.classList.add('paragraph-styling')

    // add content to paragraph and buttons 
    paragraph.innerText = inputField.value
    doneButton.innerText = "done"
    delButton.innerText = "remove"

    toDoList.appendChild(paragraph)
    toDoList.appendChild(doneButton)
    toDoList.appendChild(delButton)
    // clear input field 
    inputField.value = ""

    // 1 click for line-throught
    doneButton.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through'
    })

    // 2 click for remove todo
    delButton.addEventListener('dblclick', function() {
        toDoList.removeChild(paragraph)
        toDoList.removeChild(doneButton)
        toDoList.removeChild(delButton)
    })
})