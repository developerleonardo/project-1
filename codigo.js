const appointmentButton = document.querySelector(".appointment-button");
const modal = document.querySelector(".modal-background");
const closeButton = document.querySelector(".close-button");
const result = document.querySelector(".result");
const petsName = document.getElementById("pets-name")
const breed = document.getElementById("breed")
const species = document.getElementById("species")
const ownersName = document.getElementById("owners-name")
const email = document.getElementById("email")
const submit = document.getElementById("submit-button")
const phone = document.getElementById("phone");
const servicesBoxes = document.querySelectorAll(".box-animation");
const teamBoxes = document.querySelectorAll(".transition");
const contactButton = document.querySelector(".contact-button");
const contactName = document.getElementById("contact-name");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const contactText = document.getElementById("contact-text");
const menuButton = document.querySelector(".nav__ul-responsive-button-container");
const responsiveMenu = document.getElementById("responsive-menu");
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach(link => {
	if(link.href.includes(`${activePage}`)){
		link.classList.add("active");
	}
})

if (activePage.includes("index.html")){
	appointmentButton.addEventListener("click",()=>{
	modal.style.display="flex";
	modal.style.animation = "appear 1s forwards";
    closeButton.addEventListener("click",()=> {
        modal.style.display="none";
        modal.style.animation = "unset";
    })

    })

    submit.addEventListener("click",(e)=> {
	    e.preventDefault();
        let error = validateData();
	
	    if (error[0]) {
		    result.innerHTML = error[1];
		    result.classList.add("red");
	    }     else {
		
		    result.innerHTML = `Succesfully sent <br> 
		            One of our team members will contact you either by a phone call or email as soon as posible to confirm the schedule of the appointment`;
		    result.classList.add("green");
		    result.classList.remove("red");
		    submit.remove(); 
            console.log(`"Pet's Name" : "${petsName.value}"
                         "Breed" : "${breed.value}"
                         "Species" : "${species.value}"
                         "Owner's Name" : "${ownersName.value}"
                         "Email" : "${email.value}"
                         "Phone Number" : "${phone.value}"`); 
		                  
	        }
    })

    let validateData = ()=> {
	    let error = [];
        if (petsName.value.length < 3 || petsName.value.length > 40){
    	    error[0] = true;
    	    error[1] = "Invalid pet's name";
    	    return error;
        } else if(breed.value.lenght < 3 || breed.value.length > 40){
    	    error[0] = true;
    	    error[1] = "Invalid breed";
    	    return error;
        } else if (ownersName.value.length < 3 || ownersName.value.length > 40){
    	    error[0] = true;
    	    error[1] = "Invalid owner's name";
    	    return error;
        } else if (email.value.length < 13 ||
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1 ||
               email.type !== "email") {
    	    error[0] = true;
    	    error[1] = "Invalid email";
    	    return error;
        } else if (phone.value.length < 7 || phone.value.length > 10 || phone.type !== "number") {
    	    error[0] = true;
    	    error[1] = "Invalid Phone Number";
    	    return error;
        } 	
        error[0] = false;
        return error;
    }
} else if (activePage.includes("contact.html")){
        contactButton.addEventListener("click",(e)=>{
	    e.preventDefault();
	    let error = validateContactData();
        if (error[0]) {
		    result.innerHTML = error[1];
		    result.classList.add("red");
	    } else {
		
		    result.innerHTML = `Succesfully sent <br> 
		            One of our team members will contact you either by a phone call or email as soon as posible to confirm the schedule of the appointment`;
		    result.classList.add("green");
		    result.classList.remove("red");
		    contactButton.remove();

            console.log(`"Name" : "${contactName.value}"
                         "Phone Number" : "${contactPhone.value}"
                         "Email" : "${contactEmail.value}"
                         "Message" : "${contactText.value}"`); 
	        } 
    })



    let validateContactData = ()=> {
	    let error = [];
        if (contactName.value.length < 3 || contactName.value.length > 40){
    	    error[0] = true;
    	    error[1] = "Invalid name";
    	    return error;
        } else if(contactText.value.lenght < 3 || contactText.value.length > 1000){
    	    error[0] = true;
    	    error[1] = "Invalid text";
    	    return error;
        } else if (contactEmail.value.length < 13 ||
               contactEmail.value.length > 40 ||
               contactEmail.value.indexOf("@") == -1 ||
               contactEmail.value.indexOf(".") == -1 ||
               contactEmail.type !== "email") {
    	    error[0] = true;
    	    error[1] = "Invalid email";
    	    return error;
        } else if (contactPhone.value.length < 7 || contactPhone.value.length > 10 || contactPhone.type !== "number") {
    	    error[0] = true;
    	    error[1] = "Invalid Phone Number";
    	    return error;
        } 	
        error[0] = false;
        return error;
    }

}else if (activePage.includes("services.html")){
	servicesBoxes.forEach(box=>{
		window.addEventListener("scroll",()=> {
	        if (box.getBoundingClientRect().top < window.innerHeight){
		    box.classList.add("animation");
	        }
        })
    })

}else if (activePage.includes("team.html")){
	teamBoxes.forEach(box=>{
	    window.addEventListener("scroll",()=> {
		    if (box.getBoundingClientRect().top < window.innerHeight){
			box.classList.add("show");
			box.classList.add("animation");
		    }
	    })
    })

}

menuButton.addEventListener("click",()=> {
    responsiveMenu.classList.toggle("menu-background-open");
    window.addEventListener("scroll",(e)=> {
        if(responsiveMenu.getBoundingClientRect().bottom < window.innerHeight) {
            responsiveMenu.classList.remove("menu-background-open");
            e.stopPropagation();
        }
        
    })
});












