function deleteCard(item) {
  item.remove();
}

function likeCard(item) {
  item.classList.toggle('card__like-button_is-active');
}

function createCard(element, deleteCard, likeCard, zoomCard) {
  const cardElement = document.querySelector('#card-template').content.cloneNode(true);
  
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    evt.stopPropagation();

    deleteCard(evt.target.parentElement);
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.stopPropagation();
    
    likeCard(evt.target);
  });

  cardElement.querySelector('.places__item').addEventListener('click', function() {
    zoomCard(element);
  });

  return cardElement;
}

export { deleteCard, likeCard, createCard }; 