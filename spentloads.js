function show() { document.getElementById('area').style.display = 'block'; }
function hide() { document.getElementById('area').style.display = 'none'; }
function reset() {document.getElementsByClassName("signup_wrapper").reset();}	
function validation()
 {
    var firstname_error = document.getElementById('firstname_error');
    var lastname_error = document.getElementById('lastname_error');
    var gender_error = document.getElementById('gender_error');
    var dob_error = document.getElementById('dob_error');
    var mobile_error = document.getElementById('mobile_error');
    var phone_work_error = document.getElementById('phone_work_error');
    var phone_home_error = document.getElementById('phone_home_error');
    var email_error = document.getElementById('email_error');
    var address1_error = document.getElementById('address1_error');
    var postcode_error = document.getElementById('postcode_error');
    var medical_error = document.getElementById('medical_error');
    var checkbox_error = document.getElementById('checkbox_error');

    if (firstname.value ==="")
     {
     	firstname_error.setAttribute("style","display:inline-block");
     	firstname.focus();
     	return false;
     }
     else {
     	firstname_error.setAttribute("style","display:none");
     }

     if (lastname.value ==="")
     {
     	lastname_error.setAttribute("style","display:inline-block");
     	lastname.focus();
     	return false;
     }
      else {
     	lastname_error.setAttribute("style","display:none");
     }

     if (male.checked===false && female.checked===false)
     {
     	gender_error.setAttribute("style","display:inline-block");
     	male.focus();
     	return false;
     }
     else {
     	gender_error.setAttribute("style","display:none");
     }

     if (dob.value ==="")
     {
     	dob_error.setAttribute("style","display:inline-block");
     	dob.focus();
     	return false;
     }
      else {
     	dob_error.setAttribute("style","display:none");
     }

     if (mobile.value ==="")
     {
     	mobile_error.setAttribute("style","display:inline-block");
     	mobile.focus();
     	return false;
     }
      else {
     	mobile_error.setAttribute("style","display:none");
     }

     if (phone_work.value ==="")
     {
     	phone_work_error.setAttribute("style","display:inline-block");
     	phone_work.focus();
     	return false;
     }
      else {
     	phone_work_error.setAttribute("style","display:none");
     }

      if (phone_home.value ==="")
     {
     	phone_home_error.setAttribute("style","display:inline-block");
     	phone_home.focus();
     	return false;
     }
      else {
     	phone_home_error.setAttribute("style","display:none");
     }

      if (email.value ==="")
     {
     	email_error.setAttribute("style","display:inline-block");
     	email.focus();
     	return false;
     }
      else {
     	email_error.setAttribute("style","display:none");
     }

      if (address1.value ==="")
     {
     	address1_error.setAttribute("style","display:inline-block");
     	address1.focus();
     	return false;
     }
      else {
     	address1_error.setAttribute("style","display:none");
     }

      if (postcode.value ==="")
     {
     	postcode_error.setAttribute("style","display:inline-block");
     	postcode.focus();
     	return false;
     }
      else {
     	postcode_error.setAttribute("style","display:none");
     }

       if (nomedical.checked===false && yesmedical.checked===false)
     {
     	checkbox_error.setAttribute("style","display:inline-block");
     	yesmedical.focus();
     	return false;
     }
      else {
     	medical_error.setAttribute("style","display:none");
     }

      if (checkbox.checked ===false)
     {
     	checkbox_error.setAttribute("style","display:inline-block");
     	checkbox.focus();
     	return false;
     }
      else {
     	checkbox_error.setAttribute("style","display:none");
     }

}
function menu() {

    var menu_icon = document.getElementById('menu-icon')

    if (menu_icon.hover==true)
    {
        
    }
}