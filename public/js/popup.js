const loginContainer = document.getElementById('login-container');
const SignipContainer = document.getElementById('Signip-container');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const close1 = document.getElementsByClassName('close')[0];
const close2 = document.getElementsByClassName('close')[1];

login.onclick = () => {
  loginContainer.style.display = 'block';
};
close1.onclick = () => {
  loginContainer.style.display = 'none';
};
signup.onclick = () => {
  SignipContainer.style.display = 'block';
};

close2.onclick = () => {
  SignipContainer.style.display = 'none';
};
