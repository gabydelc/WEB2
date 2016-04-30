window.onload = init;
window.onsubmit = onSubmit;

function init() {
	setControls();
	//selectFocus();
}

//Checking all fields before submitting form
function onSubmit(){
	var result = true;
	result = checkFirstName() && result;
	result = checkLastName() && result;
	result = checkHan() && result;
	result = checkEmail() && result;
	result = checkPhone() && result;
	return result;
}

//Reset default texts and hide error messages on resetting form
window.onreset = function(e){
	init();
	e.preventDefault();
};

function hideErrors(){
	var errorElem = document.getElementsByClassName('errorText');
	for (var i=0; i<errorElem.length; i++) {
		errorElem[i].style.display = 'none';
	}
}

//Set default texts and validation functions
function setControls() {
	//Populating the array with objects 
	//containing default texts and corresponding validation functions
	var setupArray = [
		 {
		 	defaultText: 'Enter your first name',
		    validate: checkFirstName 
		 },
		 {
		 	defaultText: 'Enter your last name',
			validate: checkLastName
		 },
		 {
			 defaultText: 'Enter your email address',
			 validate: checkEmail
		 }
	];
	
// Set required fields
	var requiredFields = document.getElementsByClassName('required');
	//Displaying default text in each field
	for (var i=0; i<requiredFields.length; i++) {
		requiredFields[i].value = setupArray[i].defaultText;
		requiredFields[i].style.color = '#a8a8a8';
		requiredFields[i].style.fontStyle = 'italic';
		
		// Assigning each object to the corresponding field 
		requiredFields[i].setupObject = setupArray[i];
		
		requiredFields[i].onfocus = function() {
			if (this.value === this.setupObject.defaultText) {
				this.value = '';
				this.style.color = '#000';
				this.style.fontStyle = 'normal';
			}
		} //end focus
		requiredFields[i].onblur = function() {
			if (this.value === '') {
				this.value = this.setupObject.defaultText;
				this.style.color = '#a8a8a8';
				this.style.fontStyle = 'italic';
			}
			this.setupObject.validate();
		} //end blur
	} //end for loop
	
// Set phone field
	var phoneField = document.getElementById('phone');
	phoneField.value = '';
	phoneField.onblur = checkPhone;
	
	hideErrors();
} //end setup

// Set focus on first field
function selectFocus () {
	var firstElem = document.getElementById('fname');
	firstElem.focus();
} //end focus

// Validation functions
function checkFirstName() {
	var fName = document.getElementById('fname');
	var errFName = document.getElementById('errFName');
	if (fName.value === '' || fName.value === 'Enter your first name') {
		errFName.innerHTML='Please enter your first name';
		errFName.style.display='block';
		return false;
	} else {
		errFName.style.display='none';
	}
	return true;
}

function checkLastName(){
	var lName = document.getElementById('lname');
	var errLName = document.getElementById('errLName');
	if (lName.value === '' || lName.value === 'Enter your last name') {
		errLName.innerHTML='Please enter your last name';
		errLName.style.display='block';
		return false;
	} else {
		errLName.style.display='none';
	}
	return true;
}

function checkEmail(){
	var email = document.getElementById('email');
	var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	var errEmail = document.getElementById('errEmail');
	if (email.value === '' || email.value === 'Enter your email address') {
		errEmail.innerHTML='Please enter your email address';
		errEmail.style.display='block';
		return false;
	} else if (!emailRegex.test(email.value)) {
		errEmail.innerHTML='Please enter a valid email address'
		errEmail.style.display='block';
		return false;
	} else {
		errEmail.style.display='none';
	}
	return true;
}

function checkPhone(){
	var phone = document.getElementById('phone');
	var cleared = phone.value.replace(/[\(\)\.\-\ ]/g, '');
	var phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
	var errPhone = document.getElementById('errPhone');
	if (phone.value != '' && !phoneRegex.test(cleared)) {
		errPhone.innerHTML='Please enter a valid phone number';
		errPhone.style.display='block';
		return false;
	}
	else {
		errPhone.style.display='none';
	}
	return true;
}