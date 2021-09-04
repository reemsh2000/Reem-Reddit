const postsContainer = document.querySelector('#post-contain');
const profileLink = document.querySelector('#profile-link');
// eslint-disable-next-line consistent-return
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const user = getCookie('username');
profileLink.href += `/${user}`;

const generateElement = (tag, parentNode, className) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line max-len
const createCards = (postContent, postTime, username, picture, votes, postImage, postId, memberAccount) => {
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
  const userName = generateElement('a', userInfo, 'ele');
  userName.href = `/profile/${username}`;
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
  const commentLink = generateElement('button', commentsContainer, 'ele');
  commentLink.setAttribute('id', 'show-comments');
  commentLink.textContent = 'Show Comments';
  commentLink.onclick = () => {
    fetch(`/show-comments/${postId}`)
      .then((response) => { if (response.redirected) { window.location.href = response.url; } });
  };
  const commentIscon = generateElement('img', commentLink, 'ele');
  commentIscon.src = '../icons/comment.svg';
  if (memberAccount) {
    const deletePost = generateElement('a', commentsContainer, 'ele');
    deletePost.textContent = 'Delete Post';
    deletePost.onclick = () => {
      fetch(`/delete/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => { if (response.redirected) { window.location.href = response.url; } });
    };
    const delIscon = generateElement('img', deletePost, 'ele');
    delIscon.src = '../icons/remove.svg';
  }
  // eslint-disable-next-line no-unused-vars
  const addComment = generateElement('button', commentsContainer, 'collapsible');
  addComment.textContent = 'Add Comment';
  const inputContainer = generateElement('div', commentsContainer, 'content');
  const comment = generateElement('input', inputContainer, 'commentInput');
  comment.placeholder = 'Enter your Comment';
  comment.name = 'comment';
  comment.type = 'text';
  addComment.onclick = () => {
    addComment.classList.toggle('active');
    const content = addComment.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  };

  // eslint-disable-next-line no-undef
  comment.addEventListener('keyup', (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      fetch('/add-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, postId, comment: comment.value }),
      });
    }
  });
};
// Create Post
const createPosts = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    createCards(array[i].post_content,
      array[i].post_time,
      array[i].username,
      array[i].picture,
      array[i].votes,
      array[i].post_img,
      array[i].id,
      user === array[i].username);
  }
};

// Fetch posts
const fetchPosts = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((result) => createPosts(result))
    .catch((error) => error);
};
fetchPosts();
