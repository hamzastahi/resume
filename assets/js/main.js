function showForm(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "block";
	contactInfo.style.display = "none";
}

function showUserInfo(event){
	event.preventDefault();
	var contactInfo = document.getElementById("contact-info");
	var contactForm = document.getElementById("contact-form");
	contactForm.style.display = "none";
	contactInfo.style.display = "block";
}

function showErrorIfNameOrEmailNotFilled(event) {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var errormsg = document.getElementById("error-msg");
	const validateEmail = (email) => {
		return new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
		.test(email);
	};
	console.log("Is email valid ? ", validateEmail(email));
	if(name === "" && email === "") {
		event.preventDefault();
		errormsg.innerHTML = "Name and Email are empty !";
		errormsg.style.visibility = "visible";
	} else if(name === "") {
		event.preventDefault();
		errormsg.innerHTML = "Name is empty !";
		errormsg.style.visibility = "visible";
	} else if(email === "") {
		event.preventDefault();
		errormsg.innerHTML = "Email is empty !";
		errormsg.style.visibility = "visible";
	} else if(!validateEmail(email)) {
		event.preventDefault();
		errormsg.innerHTML = "Please enter a valid Email !";
		errormsg.style.visibility = "visible";
	}
	 else {
		errormsg.style.display = "hidden";
		var contactInfo = document.getElementById("contact-info");
		var contactForm = document.getElementById("contact-form");
		contactForm.style.display = "none";
		contactInfo.style.display = "block";
	}
}