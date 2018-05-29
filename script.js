function isNull(str) {
  if (str == "") return true;
  var email_re = /^[ ]+$/;
  return email_re.test(str);
}

function login() {
  loginObj = document.getElementById('login_content');
  loginObj.style.display = "block";
}

function out() {
  outObj = document.getElementById('login_content');
  outObj.style.display = "none";
}

function cf() {
  var name = document.getElementById('n').value;
  var email_re = /^\w+@\w+\.\w+$/;
  var phone_re = /^[1][3|4|5|8][0-9]{9}$/;

  var pass = document.getElementById('p').value;
  var code_re = /\w{8,}/;

  if (isNull(name)) {
    alert('Enter user name please!');
  } else if (!email_re.test(name) && !phone_re.test(name)) {
    alert('Invalid user name!');
  } else if (isNull(pass)) {
    alert('Enter password please!');
  } else if (!code_re.test(pass)) {
    alert('Invalid password, make sure it is greater than 8 bits of characaters！');
  } else {
    alert('Welcome，' + name);
  }
}
