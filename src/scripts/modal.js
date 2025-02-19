function openModal(item) {
  item.classList.add('popup_is-opened');
  item.classList.remove('popup_is-animated');
}

function closeModal(item) {
  item.classList.remove('popup_is-opened');
  item.classList.add('popup_is-animated');
}

function closeByX(item) {
  item.querySelector('.popup__close').addEventListener('click', function(evt) {
    evt.stopPropagation();
    
    closeModal(item);
  });
}

function closeByOverlay(item) {
  item.addEventListener('click', function({ currentTarget, target }) {
    if (target === currentTarget) {
      closeModal(item);
    }
  }); 
}

function closeByEsc(item) {
  document.querySelector('.page').addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      closeModal(item); 
    }
  }); 
}

export { openModal, closeModal, closeByX, closeByOverlay, closeByEsc }; 