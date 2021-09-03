const userHref = window.location.href.split('/')[4];
const profileInfo = document.querySelector('#profile-info');
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
  password.required = true;
  // eslint-disable-next-line no-undef
  const newProfileImage = generateElement('input', buttnsContainer, 'ele');
  newProfileImage.placeholder = 'New Profile Image';
  newProfileImage.name = 'newProfileImage';
  newProfileImage.type = 'text';
  newProfileImage.required = true;
  // eslint-disable-next-line no-undef
  const submit = generateElement('button', buttnsContainer, 'ele');
  submit.textContent = 'Update Profile';
  submit.type = 'submit';
};
const fetchProfile = () => {
  fetch(`/profile/${userHref}/info`)
    .then((res) => res.json())
    .then((data) => profileCard(data))
    .catch((error) => error);
};
fetchProfile();
