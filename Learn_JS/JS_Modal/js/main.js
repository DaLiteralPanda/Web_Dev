// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get Close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for a click to open
modalBtn.addEventListener('click', openModal);

//Listen for a click to close
closeBtn.addEventListener('click', closeModal);

//Listen for click outside
window.addEventListener('click', clickOutSide)

// Function openModal
function openModal(){
  modal.style.display = 'block';
}

// Function closeModal
function closeModal(){
  modal.style.display = 'none';
}

// Function closeModal if clicked outside
function clickOutSide(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
