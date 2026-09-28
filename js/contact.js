import "../reusable-components/header.js";

const contactForm = document.querySelector(".contact__form-wrapper");
const contactLetter = document.querySelector(".contact__letter");

const contactBtn = document.querySelector('.contact__btn');

const nameErrorMsg = document.querySelector(".name-error-msg");
const nameCharErrorMsg = document.querySelector(".name-char-error-msg");
const nameLetterErrorMsg = document.querySelector(".name-letter-error-msg");

const lastNameErrorMsg = document.querySelector(".last-name-error-msg");
const lastNameCharErrorMsg = document.querySelector(".last-name-char-error-msg");
const lastNameLetterErrorMsg = document.querySelector(".last-name-letter-error-msg");

const emailValidationErrorMsg = document.querySelector(".email-validation-error-msg");

const userErrorMsg = document.querySelector(".user-error-msg");
const userMinErrorMsg = document.querySelector(".user-min-error-msg");
const userMaxErrorMsg = document.querySelector(".user-max-error-msg");

const userFirstName = document.getElementById("user-first-name");
const userLastName = document.getElementById("user-last-name");
const userEmail = document.getElementById("user-email");
const userMessage = document.getElementById("user-message");

const contactBtnText = document.querySelector(".contact__btn-txt");

const letterMessage = document.querySelector(".contact__letter-message");
const letterSignature = document.querySelector(".contact__user-signature");
const letterUsername = document.querySelector(".contact__letter-username");





contactBtn.addEventListener('click', (event) => {
  const userFirstNameInput = userFirstName.value.trim();
  const userLastNameInput = userLastName.value.trim(); 
  const userEmailInput = userEmail.value.trim();
  const userMessageInput = userMessage.value.trim();

  const formInputs = [userFirstName, userLastName, userEmail, userMessage];

  event.preventDefault();

  const isFirstNameValid = validateFirstName(userFirstNameInput, event);
  const isLastNameValid = validateLastName(userLastNameInput, event);
  const isEmailValid = validateEmail(userEmailInput, event);
  const isUserMessageValid = validateUserMessage(userMessageInput, event);

  const dots = document.querySelectorAll(".dot");

  const letterFoldTop = document.querySelector(".contact__letter-fold-top");
  const letterFoldBottom = document.querySelector(".contact__letter-fold-bottom");

  const letterIntro = document.querySelector(".contact__letter-intro");
  const contactLetterMessage = document.querySelector(".contact__letter-message");

  const contactEnvelope = document.querySelector(".contact__envelope");
  const contactEnvelopeFlap = document.querySelector(".contact__envelope-flap");

  const contactSuccess = document.querySelector(".contact__success");

  if(
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isUserMessageValid
  ) {
      contactBtnText.textContent = "Preparing Letter";

      formInputs.forEach((input) => {
        input.disabled = true;
      })
      
      dots.forEach((dot) => {
        dot.classList.add('show');
      })

      contactBtn.disabled = true;

      setTimeout(() => {
        contactForm.classList.add('hide');
        contactLetter.classList.add('show');
      }, 3000);

      setTimeout(() => {
        letterFoldTop.classList.add('fold-top');
        letterFoldBottom.classList.add('fold-bottom');
        letterIntro.classList.add('hide');
        contactLetterMessage.classList.add('hide');
      }, 5000);

      setTimeout(() => {
        contactLetter.classList.add('slide-upward');
      }, 7000);
      
      setTimeout(() => {
        contactEnvelope.classList.add('show');
      }, 8000);

      setTimeout(() => {
        contactEnvelopeFlap.classList.add('show');
      }, 12000);

      setTimeout(() => {
        contactSuccess.classList.add('show');
        contactEnvelope.classList.add('hide');
      }, 12500);
  }

  letterMessage.textContent = userMessageInput;
  letterSignature.textContent = `${userFirstNameInput} ${userLastNameInput}`;
  letterUsername.textContent = `${userFirstNameInput} ${userLastNameInput}`;

})


function validateUserMessage(userMessageInput, event){
  let errorTimeout;

  if(userMessageInput === "") {
    event.preventDefault();
    userErrorMsg.textContent = "Message is required";
    userErrorMsg.style.display = "block";

    userMinErrorMsg.style.display = "none";
    userMaxErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     userErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(userMessageInput.length < 20) {
    event.preventDefault();
    userMinErrorMsg.textContent = "Please provide a little more detail about your message.";
    userMinErrorMsg.style.display = "block";

    userErrorMsg.style.display = "none";
    userMaxErrorMsg.style.display = "none";
  
    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     userMinErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(userMessageInput.length > 1000) {
    event.preventDefault();
    userMaxErrorMsg.textContent = "Message is too long.";
    userMaxErrorMsg.style.display = "block"; 

    userMinErrorMsg.style.display = "none";
    userErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     userMaxErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  return true;
}


function validateFirstName(userFirstNameInput, event){
  let errorTimeout;
  const nameRegex = /^[A-Za-z]+$/;

  if(userFirstNameInput === ""){
    event.preventDefault();
    nameErrorMsg.textContent = "First name is required.";
    nameErrorMsg.style.display = "block";

    nameCharErrorMsg.style.display = "none";
    nameLetterErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     nameErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(userFirstNameInput.length < 3){
    event.preventDefault();
    nameCharErrorMsg.textContent = "First name must contain at least 3 characters.";
    nameCharErrorMsg.style.display = "block";

    nameErrorMsg.style.display = "none";
    nameLetterErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     nameCharErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(!nameRegex.test(userFirstNameInput)) {
    event.preventDefault();
    nameLetterErrorMsg.textContent = "First name can only contain letters.";
    nameLetterErrorMsg.style.display = "block";

    nameErrorMsg.style.display = "none";
    nameCharErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     nameLetterErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

   return true;
}


function validateLastName(userLastNameInput, event) {
  
  let errorTimeout;
  const nameRegex = /^[A-Za-z]+$/;

  if(userLastNameInput === ""){
    event.preventDefault();
    lastNameErrorMsg.textContent = "Last name is required.";
    lastNameErrorMsg.style.display = "block";

    lastNameCharErrorMsg.style.display = "none";
    lastNameLetterErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     lastNameErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(userLastNameInput.length < 3){
    event.preventDefault();
    lastNameCharErrorMsg.textContent = "Last name must contain at least 3 characters.";
    lastNameCharErrorMsg.style.display = "block";

    lastNameErrorMsg.style.display = "none";
    lastNameLetterErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     lastNameCharErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }

  if(!nameRegex.test(userLastNameInput)) {
    event.preventDefault();
    lastNameLetterErrorMsg.textContent = "Last name can only contain letters.";
    lastNameLetterErrorMsg.style.display = "block";

    lastNameErrorMsg.style.display = "none";
    lastNameCharErrorMsg.style.display = "none";

    clearTimeout(errorTimeout);

    errorTimeout = setTimeout(() => {
     lastNameLetterErrorMsg.style.display = "none";
    }, 5000);

    return false;
  }
    return true;
}


function validateEmail(userEmailInput, event) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(userEmailInput)) {
      event.preventDefault;
      emailValidationErrorMsg.textContent = "Please enter a valid email."
      emailValidationErrorMsg.style.display = "block";

      setTimeout(() => {
          emailValidationErrorMsg.style.display = "none";
      }, 5000);

      return false;
  }

    return true;
}