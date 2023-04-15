const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const phoneNumberError = document.getElementById('phoneNumberError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const registrationForm = document.getElementById('registrationForm');

function validateFullName() {
	if (fullName.value.length < 5) {
		fullNameError.innerHTML = 'Name must be at least 5 characters';
		return false;
	} else {
		fullNameError.innerHTML = '';
		return true;
	}
}

function validateEmail() {
	const emailRegex = /\S+@\S+\.\S+/;
	if (!emailRegex.test(email.value)) {
		emailError.innerHTML = 'Invalid email address';
		return false;
	} else
