const cardsContainer = document.querySelector('.top-container');
const createElement = (tag, parentNode) => {
  const tagName = document.createElement(tag);
  parentNode.appendChild(tagName);
  return tagName;
};
// eslint-disable-next-line no-unused-vars
const createTopCards = (title, news, imgUrl) => {
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
createTopCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://s.abcnews.com/images/GMA/cry-macho-02-ht-jc-210916_1631806336745_hpMain_16x9_992.jpg');
createTopCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://s.abcnews.com/images/GMA/cry-macho-02-ht-jc-210916_1631806336745_hpMain_16x9_992.jpg');
createTopCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://s.abcnews.com/images/GMA/cry-macho-02-ht-jc-210916_1631806336745_hpMain_16x9_992.jpg');
createTopCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://s.abcnews.com/images/GMA/cry-macho-02-ht-jc-210916_1631806336745_hpMain_16x9_992.jpg');
