function openModal(item) {
  item.classList.add('popup_is-opened');
  item.classList.remove('popup_is-animated');

  document.querySelector('.page').addEventListener('keydown', closeByEsc);
}

function closeModal(item) {
  item.classList.remove('popup_is-opened');
  item.classList.add('popup_is-animated');

  document.querySelector('.page').removeEventListener('keydown', closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');

    closeModal(openedPopup);
  }
}

function addCloseByXListener(item) {
  item.querySelector('.popup__close').addEventListener('click', function(evt) {
    evt.stopPropagation();
    
    closeModal(item);
  });
}

function addCloseByOverlayListener(item) {
  item.addEventListener('click', function({ currentTarget, target }) {
    if (target === currentTarget) {
      closeModal(item);
    }
  }); 
}

export { openModal, closeModal, addCloseByXListener, addCloseByOverlayListener }; 