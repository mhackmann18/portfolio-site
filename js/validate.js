'use strict';

// Form Elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");
const submitMessage = document.getElementById("submission-message");

function validateFormInputs(){
  let message = "";
  let formIsValid = false;

  // Email validation regex from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  if(!nameInput.value){
    message = "Please enter your name";
  } else if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    .test(emailInput.value.toLowerCase())){
    message = "Please enter a valid email";
  } else if(!messageInput.value){
    message = "Please enter a message";
  } else {
    formIsValid = true;
  }

  submitMessage.innerHTML = message;

  return formIsValid;
}
