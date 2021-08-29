const cardsContainer = document.querySelector('.top-container');
const createElement = (tag, parentNode) => {
  const tagName = document.createElement(tag);
  parentNode.appendChild(tagName);
  return tagName;
};
// eslint-disable-next-line no-unused-vars
const createCards = (title, news, imgUrl) => {
  const card = createElement('div', cardsContainer);
  card.classList.add('card');
  card.style.backgroundImage = `url(${imgUrl})`;
  const h4 = createElement('h4', card);
  h4.textContent = title;
  const p = createElement('p', card);
  p.textContent = news;
  const a = createElement('a', card);
  a.textContent = 'Read More';
  a.href = '/';
};
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/R.eec27d550216388b430561d06d76f143?rik=aVSv3VIADVmSTA&pid=ImgRaw&r=0');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/R.eec27d550216388b430561d06d76f143?rik=aVSv3VIADVmSTA&pid=ImgRaw&r=0');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/R.eec27d550216388b430561d06d76f143?rik=aVSv3VIADVmSTA&pid=ImgRaw&r=0');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/R.eec27d550216388b430561d06d76f143?rik=aVSv3VIADVmSTA&pid=ImgRaw&r=0');
