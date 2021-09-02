// eslint-disable-next-line consistent-return
const profileInfo = document.querySelector('#profile-info');
// eslint-disable-next-line consistent-return
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
const user = getCookie('username');
const profileCard = ({
  email, picture, username,
}) => {
  // eslint-disable-next-line no-undef
  const userPic = generateElement('img', profileInfo, 'ele');
  userPic.src = picture;
  // eslint-disable-next-line no-undef
  const buttnsContainer = generateElement('div', profileInfo, 'buttons-container');
  // eslint-disable-next-line no-undef
  const userName = generateElement('input', buttnsContainer, 'ele');
  userName.name = 'username';
  userName.value = username;
  userName.disabled = true;
  // eslint-disable-next-line no-undef
  const userEmail = generateElement('input', buttnsContainer, 'ele');
  userEmail.value = email;
  userEmail.name = 'newUserEmail';
  userEmail.type = 'email';
  // eslint-disable-next-line no-undef
  const password = generateElement('input', buttnsContainer, 'ele');
  password.placeholder = 'New Password';
  password.type = 'password';
  password.name = 'newpassword';
  // eslint-disable-next-line no-undef
  const newProfileImage = generateElement('input', buttnsContainer, 'ele');
  newProfileImage.placeholder = 'New Profile Image';
  newProfileImage.name = 'newProfileImage';
  newProfileImage.type = 'text';
  // eslint-disable-next-line no-undef
  const submit = generateElement('button', buttnsContainer, 'ele');
  submit.textContent = 'Update Profile';
  submit.type = 'submit';
};
const fetchProfile = () => {
  fetch(`/profile/${user}/info`)
    .then((res) => res.json())
    .then((data) => profileCard(data))
    .catch((error) => error);
};
fetchProfile();
