
//here we select the button by element id and add it to the "addbtn"
let addbtn = document.getElementById('add-btn')
//here we add the event to the button using the "addEventListener"
addbtn.addEventListener('click', addtask)
let parentlist = document.getElementById('parent-List')
//fuction which should be called on the "click" event
//****function to add the task
function addtask(e){
  //it checks for the empty message if found then remove it before adding the new task
  if(parentlist.children[0].className == 'emtymsg'){
    parentlist.children[0].remove()
  }
    // here we added "currentTarget" means "button " on which event is going to happen to the "currentBtn"
    let currentBtn = e.currentTarget;
    //here we targeted the currentBtn "sibling" and add to the "currentInput" 
    let currentInput = currentBtn.previousElementSibling;
    //assigning value of currenInput to the taskname
    let taskname = currentInput.value;
    
    //here we creating the new list element using variable and by giving tag "li" to the method
    let newLi = document.createElement('li')
    //here we adding the name of the class to the list created above
    // newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    //here we are providing HTML code to the new List element to add some designes and elements to it
    newLi.innerHTML = `<h3 class = "flex-grow-1">${taskname}</h3>
        <button type="button" class="btn btn-warning mx-2" onclick="edittask(this)">Edit</button>
        <button type="button" class="btn btn-danger" onclick="removetask(this)">Remove</button></li>`

    // ** now we have to add the above created list element to the parent list
    //fist of all we have to select the "ul" tag which can be done assigning ID to the ul
    parentlist.appendChild(newLi)
}

//function to remove task
function removetask(currentelement){
   currentelement.parentElement.remove()
   //checking whether the list is empty or not if empty then display the message
   if(parentlist.children.length <= 0){
    //creating the new element to display the message
    let emptyMessege = document.createElement('h3')
    // adding class to the above created element 
    emptyMessege.classList.add("emtymsg")
    //text content that is going to display on the screen
    emptyMessege.textContent = "Please add Task!"
    //adding the element to the parent element
    parentlist.appendChild(emptyMessege)
   }
}

//**function to edit the task name
function edittask(currentelement){
  //it executes if textcontent = apply changes
  if(currentelement.textContent == 'Apply'){
    //changing the content of the button
       currentelement.textContent = 'Edit'
       //getting the value  of previous sibling into the current task name
       let currenttaskname = currentelement.previousElementSibling.value
       //creating new element by variable currentheading
       let currentHeading = document.createElement('h3')
       //setting the class of the variable
       currentHeading.className = 'flex-grow-1'
       //coping the textcontent into currenHeading from currenttaskname
       currentHeading.textContent = currenttaskname
       //replacing the values of currentHeading with currentelement.previousElementSibling
       currentelement.parentElement.replaceChild(currentHeading, currentelement.previousElementSibling)
  }
  //it executes if textcontent = edit
  else{
  //changing the content of the button
    currentelement.textContent = 'Apply'
    //getting the text from the current element into the currentelement variable
  let currenttaskname = currentelement.previousElementSibling.textContent
  //creating new element of input type in which we copy the currentelement
  //content and the edit it
  let currentinput = document.createElement('input')
  //specifying the type of the input
  currentinput.type = 'text'
  //assingning the class to  the input element
  currentinput.className = 'form-control'
  //setting placehoder to the input element
  currentinput.placeholder = 'task name'
  //copying the current element to the new input element
  currentinput.value = currenttaskname
  //replacing new name with the current task name
  currentelement.parentElement.replaceChild(currentinput, currentelement.previousElementSibling)
}
}