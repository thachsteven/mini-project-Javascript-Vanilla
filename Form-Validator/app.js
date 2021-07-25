const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show error outline function

function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Username
    if(username.value === '') {
        showError(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }

    //Email
    if(email.value === '') {
        showError(email, 'Email is required');
    }
    else if(!email.value.match(emailRequired)) {
        showError(email, 'Email not valid');
    }
    else {
        showSuccess(email);
    }

    //Password

    if(password.value === '') {
        showError(password, 'Password is required');
    }
    
    else if(password.value.length < 6) {
        showError(password, 'Password must be greater than 6 characters');
    }
    else {
        showSuccess(password);
    }
    
    //Password 2
    if(password2.value === '') {
        showError(password2, 'Password2 is required');
    }
    else if(password2.value !== password.value) {
        showError(password2, 'Password2 must be match');
    }
    else {
        showSuccess(password2);
    }

});

// Check email valid
const emailRequired = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

