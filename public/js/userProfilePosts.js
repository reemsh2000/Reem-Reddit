const postsContainer = document.querySelector('#post-contain');
const currentLocation = window.location.href;

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
  commentLink.textContent = 'Comments';
  commentLink.onclick = () => {
    fetch(`/show-comments/${postId}`)
      .then((response) => { if (response.redirected) { window.location.href = response.url; } });
  };

  const commentIscon = generateElement('img', commentLink, 'ele');
  commentIscon.src = '../icons/comment.svg';
  if (memberAccount) {
    const deletePost = generateElement('a', commentsContainer, 'ele');
    deletePost.textContent = 'Delete Post';
    deletePost.href = '/delete-post';
    deletePost.onclick = () => {
      fetch(`/delete/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
    };
    const delIscon = generateElement('img', deletePost, 'ele');
    delIscon.src = '../icons/remove.svg';
  }
  const addComment = generateElement('a', commentsContainer, 'ele');
  addComment.textContent = 'add Comment';
  addComment.href = '/add-comment';
};

const createProfilePosts = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].username === currentLocation.split('/')[4]) {
      createCards(array[i].post_content,
        array[i].post_time,
        array[i].username,
        array[i].picture,
        array[i].votes,
        array[i].post_img,
        array[i].id,
        true);
    }
  }
};

const fetchUserPost = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((result) => createProfilePosts(result))
    .catch((error) => error);
};
fetchUserPost();
