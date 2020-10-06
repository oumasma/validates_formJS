const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const cgu = document.getElementById('cgu');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const ageValue = age.value.trim();
	const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Prénom requis');
	} else if (firstnameValue.length < 3 ) {
		setErrorFor(firstname, 'Au minimun 3 caractères');
	} else {
		setSuccessFor(firstname);
    }
    
    if(lastnameValue === '') {
		setErrorFor(lastname, 'Nom requis');
    } else {
		setSuccessFor(lastname);
    }
    
    if(ageValue === '') {
		setErrorFor(age, 'Age requis');
	} else if (ageValue < 18 ) {
		setErrorFor(age, 'vous devez avoir 18 ans');
	} else {
		setSuccessFor(age);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email requis');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email non valide');
	} else {
		setSuccessFor(email);
    }
    
    if(email2Value === '') {
		setErrorFor(email2, 'Email requis');
	} else if(emailValue !== email2Value) {
		setErrorFor(email2, 'Emails ne correspondent pas');
	} else{
		setSuccessFor(email2);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Mot de passe requis');
	} else if (passwordValue.length < 6 ) {
		setErrorFor(password, 'Au minimun 6 caractères');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Mot de passe requis');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Mots de passe ne correspondent pas');
	} else{
		setSuccessFor(password2);
    }

    if(cgu.checked) {
		setSuccessFor(cgu);
    } else {
		setErrorFor(cgu, 'Veuillez accepter les conditions');
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

