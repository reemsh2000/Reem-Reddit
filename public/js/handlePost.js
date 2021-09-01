const postsContainer = document.querySelector('#post-contain');
const generateElement = (tag, parentNode, className) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line no-unused-vars
const createCards = (postContent, postTime, username, picture, votes, postImage) => {
  const post = generateElement('div', postsContainer, 'post-container');
  const votesContainer = generateElement('div', post, 'vote');
  const topIconBtn = generateElement('a', votesContainer, 'ele');
  topIconBtn.href = '/like';
  const icon1 = generateElement('img', topIconBtn, 'ele');
  icon1.src = '../icons/up.svg';
  const counter = generateElement('span', votesContainer, 'ele');
  counter.textContent = votes;
  const downIconBtn = generateElement('a', votesContainer, 'ele');
  downIconBtn.href = '/dislike';
  const icon2 = generateElement('img', downIconBtn, 'ele');
  icon2.src = '../icons/down.svg';
  const insidePost = generateElement('div', post, 'post');
  const userInfo = generateElement('div', insidePost, 'user');
  const userImg = generateElement('img', userInfo, 'ele');
  userImg.src = picture;
  userImg.alt = 'user image';
  const userName = generateElement('p', userInfo, 'ele');
  userName.textContent = username;
  const postDate = generateElement('span', userInfo, 'ele');
  postDate.textContent = `${postTime.split('T')[0]}  ${postTime.split('T')[1].split('.')[0]}`;
  const postText = generateElement('p', insidePost, 'new');
  postText.textContent = postContent;
  if (postImage) {
    const postImg = generateElement('img', insidePost, 'post-img');
    postImg.src = postImage;
  }
  const commentsContainer = generateElement('div', insidePost, 'comments');
  const commentLink = generateElement('a', commentsContainer, 'ele');
  commentLink.setAttribute('id', 'show-comments');
  commentLink.href = '/showComments';
  commentLink.textContent = 'Comments';
  const commentIscon = generateElement('img', commentLink, 'ele');
  commentIscon.src = '../icons/comment.svg';
};
// Create Post
const createPosts = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    createCards(array[i].post_content,
      array[i].post_time,
      array[i].username,
      array[i].picture,
      array[i].votes,
      array[i].post_img);
  }
};
// Fetch posts
const fetchPost = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((result) => createPosts(result))
    .catch((error) => error);
};
fetchPost();
