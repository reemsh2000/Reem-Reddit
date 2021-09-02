// eslint-disable-next-line consistent-return
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
const user = getCookie('username');
const fetchProfile = () => {
  fetch(`/profile/${user}/info`)
    .then((res) => res.json())
    .catch((error) => error);
};
fetchProfile();
