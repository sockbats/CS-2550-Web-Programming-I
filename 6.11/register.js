function checkForm() {
   document.getElementById("formErrors").innerHTML = "<ul id=\"errors\"></ul>"
   let errors = document.getElementById("errors")

   let fullName = document.getElementById("fullName")
   let reFullName = /[a-zA-Z]{1,}/
   if (reFullName.test(fullName.value)) {
      fullName.className = ""
   }
   else {
      fullName.className = "error"
   }

   let email = document.getElementById("email")
   let reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
   if (reEmail.test(email.value) && email.value.length > 0) {
      email.className = ""
   }
   else {
      email.className = "error"
      errors.append(document.createElement('li').textContent = "Missing full name")
   }

   let password = document.getElementById("password")
   let lower = /[a-z]/
   let upper = /[A-Z]/
   let num = /[0-9]/
   // let char = /{10,20}/
   if (lower.test(password.value)) {
      password.className = ""
   }
   else {
      password.className = "error"
   }

   if (upper.test(password.value)) {
      password.className = ""
   }
   else {
      password.className = "error"
   }

   if (num.test(password.value)) {
      password.className = ""
   }
   else {
      password.className = "error"
   }

   // if (char.test(password.value)) {
   //    password.className = ""
   // }
   // else {
   //    password.className = "error"
   // }

   let passwordConfirm = document.getElementById("passwordConfirm")
   if (password.value == passwordConfirm.value) {
      passwordConfirm.className = ""
   }
   else {
      passwordConfirm.className = "error"
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});