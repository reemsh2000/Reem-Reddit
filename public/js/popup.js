const loginContainer = document.getElementById('login-container');
const SignipContainer = document.getElementById('Signip-container');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const close1 = document.getElementsByClassName('close')[0];
const close2 = document.getElementsByClassName('close')[1];
const linkSign = document.querySelector('#link-sign');
const linkLogin = document.querySelector('#link-login');

login.onclick = () => {
  loginContainer.style.display = 'block';
};
linkLogin.onclick = () => {
  loginContainer.style.display = 'block';
  SignipContainer.style.display = 'none';
};
close1.onclick = () => {
  loginContainer.style.display = 'none';
};
signup.onclick = () => {
  SignipContainer.style.display = 'block';
};
linkSign.onclick = () => {
  SignipContainer.style.display = 'block';
  loginContainer.style.display = 'none';
};

close2.onclick = () => {
  SignipContainer.style.display = 'none';
};
