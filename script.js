// check null value
function isNull(str) {
  if (str == "") return true;
  var email_re = /^[ ]+$/;
  return email_re.test(str);
}

// display login window
function popLogin() {
  // catch the login window by its Id
  loginObj = document.getElementById('login_content');
  // set css style to display: block
  loginObj.style.display = "block";
}

// hide login window
function hideLogin() {
  // same to before - catch the login window by Id
  hideObj = document.getElementById('login_content');
  // then set the display to none so it is no longer showing on the screen
  hideObj.style.display = "none";
}

// confirmation by checking the input content in regular expression
function cf() {
  // get the user name value
  var name = document.getElementById('user_name').value;
  // define regular expression object for checkinng email ad phone
  var email_re = /^\w+@\w+\.\w+$/;
  // phone number begins with 1 and follows either 3,4,5 or 8 plus 9 other digits
  var phone_re = /^[1][3|4|5|8][0-9]{9}$/;
  // get passwd content
  var pass = document.getElementById('passwd').value;
  // define regular expression object for checking password
  var code_re = /\w{8,}/;

  if (isNull(name)) { // if user name is not filled
    alert('Enter user name please!');
    // if user name and phone number not qualified due to regex pattern
  } else if (!email_re.test(name) && !phone_re.test(name)) {
    alert('Invalid user name!');
  } else if (isNull(pass)) {  // if passwd is not filled
    alert('Enter password please!');
  } else if (!code_re.test(pass)) {   // if passwd is not qualified due to regex pattern
    alert('Invalid password, make sure it is greater than 8 bits of characaters！');
  } else {
    alert('Welcome，' + name); // a welcome expression when login info is nicely placed
  }
}
