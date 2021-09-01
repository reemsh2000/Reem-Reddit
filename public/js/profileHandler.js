const createPosts = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-undef
    createCards(array[i].post_content,
      array[i].post_time,
      array[i].username,
      array[i].picture,
      array[i].votes,
      array[i].post_img);
  }
};

const fetchUserPost = () => {
  fetch('/posts')
    .then((res) => res.json())
    // eslint-disable-next-line no-undef
    .then((result) => createPosts(result))
    .catch((error) => error);
};
fetchUserPost();
