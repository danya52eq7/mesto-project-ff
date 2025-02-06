// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');  
const cardTemplate = document.querySelector('#card-template').content;

function deleteCard(item) {
  item.remove();
}

function createCard(element, deleteCard) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    deleteCard(evt.target.parentElement);
  });

  return cardElement;
}

initialCards.forEach(function (obj) {
  placesList.append(createCard(obj, deleteCard));
});