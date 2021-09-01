const fetchProfileBtn = document.querySelector('.fetch-profile');
const cookieArr = document.cookie.split(';');

const fetchProfile = () => {
  fetch(`/profile/:${cookieArr[1].split('=')[1]}`);
};
fetchProfileBtn.addEventListener('click', fetchProfile);
