//!inputEmail.value.match(emailSymbols)|| inputEmail.value.length < 6 || inputEmail.value[0] === "@" || inputEmail.value[0] === "." || inputEmail.value 

// Imports from register panel
const registerPanel = document.querySelector('div.regPanel');
const inputName = document.querySelector('input.name');
const inputSurname = document.querySelector('input.surname');
const inputAge = document.querySelector('input.age');
const inputEmail = document.querySelector('input.email');
const inputNewPassword = document.querySelector('input.newPassword');
const buttonSignUp = document.querySelector('button.signUp');
const buttonToLogIn = document.querySelector('button.toLogIn');
const allInputs = document.querySelectorAll('input');

// Imports from login panel
const loginPanel = document.querySelector('div.loginPanel');
const inputLogin = document.querySelector('input.login');
const inputPassword = document.querySelector('input.password');
const buttonLogIn = document.querySelector('button.logIn');
const buttonToRegister = document.querySelector('button.toRegister')

// Imports from result panel
const resultPanel = document.getElementById('1');
const nameSpan = document.querySelector('span.nameSpan');
const surnameSpan = document.querySelector('span.surnameSpan');
const ageSpan = document.querySelector('span.ageSpan');
const emailSpan = document.querySelector('span.emailSpan');
const buttonRelog = document.querySelector('button.relog');

// Imports from panel
const panel = document.querySelector('div.panel');

// Data arrays
let names = [];
let surnames = [];
let ages = [];
let emails = [];
let newPasswords = [];
let usedEmails = [];
let letters = /^[A-Za-z]+$/;
let emailSymbols = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;


// Flags
let indexNumber = 0;
let notFound = 0;


const register = () => {
    if(inputName.value === '' || inputSurname.value === '' || inputAge.value === '' || inputEmail.value === '' || inputNewPassword.value === ''){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "You need to give all information!";
        resultPanel.style.fontSize = "20px";
    } else if(inputName.value.length > 30 || inputSurname.value.length > 30 || inputAge.value.length > 30 || inputEmail.value.length > 30 || inputNewPassword.value.length > 30){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "Field length cannot be longer than 30 characters!";
        resultPanel.style.fontSize = "20px";
     } else if(!inputEmail.value.match(emailSymbols)|| inputEmail.value.length < 6){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "This is not a valid e-mail!";
        resultPanel.style.fontSize = "20px";
    } else if(inputAge.value > 120){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "The age cannot be higher than 120!";
        resultPanel.style.fontSize = "20px";
    } else if(inputNewPassword.value.length < 6){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "Password cannot be shorter than 6 characters!";
        resultPanel.style.fontSize = "20px";
    } else if(!inputName.value.match(letters) || !inputSurname.value.match(letters)){
        resultPanel.style.color = `rgba(253,187,45,1)`;
        resultPanel.textContent = "Name and surname cannot contains number!";
        resultPanel.style.fontSize = "20px";
    } else{
        usedEmails = emails.filter((usedEmail,index) => inputEmail.value === emails[index]);
        if(usedEmails.length === 1){
            resultPanel.style.color = `rgba(253,187,45,1)`;
            resultPanel.textContent = `This E-mail is already used!`;
            resultPanel.style.fontSize = "20px";
        } else {
            names.push(inputName.value);
            // inputName.id = names.indexOf(inputName);
            inputName.value = '';
            surnames.push(inputSurname.value);
            inputSurname.value = '';
            ages.push(inputAge.value);
            inputAge.value = '';
            emails.push(inputEmail.value);
            inputEmail.value = '';
            newPasswords.push(inputNewPassword.value);
            inputNewPassword.value = '';
            resultPanel.textContent = "Account has been successfully created!";
            resultPanel.style.color = "rgba(34,195,138,1)";
            resultPanel.style.fontSize = "20px";
            registerPanel.classList.add('hide');
            loginPanel.classList.add('hide');
        }
    }
}

const logIn = () => {
    notFound = 0;
    if(emails.length === 0){
        resultPanel.style.fontSize = "20px";
        resultPanel.textContent = "User doesn't exist!";
        resultPanel.style.color = `rgba(253,187,45,1)`;
        indexNumber = 0;
    }
    emails.forEach((email, index) => {
        if(inputLogin.value === emails[index]){
            indexNumber += index;
            console.log(indexNumber);
            if(inputPassword.value === newPasswords[indexNumber]){
                inputLogin.value = '';
                inputPassword.value = '';
                loginPanel.classList.remove('hide');
                resultPanel.classList.add('hide');
                panel.classList.add('active');
                nameSpan.textContent = `${names[indexNumber]}`;
                surnameSpan.textContent = `${surnames[indexNumber]}`;
                ageSpan.textContent = `${ages[indexNumber]}`;
                emailSpan.textContent = `${emails[indexNumber]}`;
            } else {
                resultPanel.textContent = "E-mail or password is incorrect!";
                resultPanel.style.color = `rgba(253,187,45,1)`;
                indexNumber = 0;
            }
        } else {
            notFound += 1;
            if(notFound === emails.length){
                resultPanel.textContent = `User ${inputLogin.value} doesnt't exist!`;
                resultPanel.style.color = `rgba(253,187,45,1)`;
            }
        }
            indexNumber = 0;
        })
}

const hideRegister = () => {
    registerPanel.classList.add('hide');
    loginPanel.classList.add('hide');
}

const hideLogIn = () => {
    registerPanel.classList.remove('hide');
    loginPanel.classList.remove('hide');
    resultPanel.style.color = `black`;
    resultPanel.textContent = "Remember to enter fake data, the app is only for illustrative purposes. However after refreshing this site your account will be deleted.";
    resultPanel.style.fontSize = "16px";
}

const relog = () => {
    panel.classList.remove('active');
    loginPanel.classList.add('hide');
    resultPanel.classList.remove('hide');
    resultPanel.style.fontSize = "20px";
    resultPanel.textContent = "Enter your login and password.";
    resultPanel.style.color = `rgba(253,187,45,1)`;
}

buttonRelog.addEventListener('click', relog);
buttonToRegister.addEventListener('click', hideLogIn);
buttonToLogIn.addEventListener('click', hideRegister);
buttonLogIn.addEventListener('click', logIn);
buttonSignUp.addEventListener('click', register);