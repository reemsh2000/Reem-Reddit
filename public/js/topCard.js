const cardsContainer = document.querySelector('.top-container');
const createElement = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};
// eslint-disable-next-line no-unused-vars
const createCards = (title, news, imgUrl) => {
  const card = createElement('div', 'card', cardsContainer);
  // card.style.backgroundImage = url(imgUrl);
  const h4 = createElement('h4', '', card);
  h4.textContent = title;
  const p = createElement('p', '', card);
  p.textContent = news;
  const a = createElement('a', '', card);
  a.textContent = 'Read More';
  a.href = '/';
};
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/OIP.gs_BdtClAPGsVEBdqhFcdgHaDt?w=344&h=175&c=7&r=0&o=5&pid=1.7');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/OIP.gs_BdtClAPGsVEBdqhFcdgHaDt?w=344&h=175&c=7&r=0&o=5&pid=1.7');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/OIP.gs_BdtClAPGsVEBdqhFcdgHaDt?w=344&h=175&c=7&r=0&o=5&pid=1.7');
createCards('Jake Paul', 'Someone (Tyron Woolley) finally put Jake Paul in his place', 'https://th.bing.com/th/id/OIP.gs_BdtClAPGsVEBdqhFcdgHaDt?w=344&h=175&c=7&r=0&o=5&pid=1.7');
