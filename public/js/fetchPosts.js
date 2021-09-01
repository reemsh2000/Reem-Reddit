// Fetch posts
const fetchPosts = () => {
  fetch('/posts')
    .then((res) => res.json())
    // eslint-disable-next-line no-undef
    .then((result) => createPosts(result))
    .catch((error) => error);
};
fetchPosts();
