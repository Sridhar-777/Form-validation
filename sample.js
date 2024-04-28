function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = false;
  
    if (name === "") {
      setErrorFor("name", "Name cannot be blank");
      error = true;
    } else {
      setSuccessFor("name");
    }
  
    if (email === "") {
      setErrorFor("email", "Email cannot be blank");
      error = true;
    } else if (!isValidEmail(email)) {
      setErrorFor("email", "Invalid email format");
      error = true;
    } else {
      setSuccessFor("email");
    }
  
    if (password === "") {
      setErrorFor("password", "Password cannot be blank");
      error = true;
    } else {
      setSuccessFor("password");
    }
  
    return !error;
  }
  
  function setErrorFor(input, message) {
    var inputField = document.getElementById(input);
    var errorMessage = inputField.nextElementSibling;
  
    inputField.className = "error";
    errorMessage.innerText = message;
  }
  
  function setSuccessFor(input) {
    var inputField = document.getElementById(input);
    inputField.className = "";
  }
  
  function isValidEmail(email) {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
