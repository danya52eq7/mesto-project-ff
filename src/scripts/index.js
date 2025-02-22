import '../pages/index.css';
import { initialCards } from './cards.js';
import { deleteCard, likeCard, createCard } from './card.js';
import { openModal, closeModal, addCloseByXListener, addCloseByOverlayListener } from './modal.js';

const placesList = document.querySelector('.places__list');  
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formEditProfile = document.querySelector('.form__edit-profile');
const nameInput =  document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formNewPlace = document.querySelector('.form__new-place'); 
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');

initialCards.forEach(function (obj) {
  placesList.append(createCard(obj, deleteCard, likeCard, zoomCard));
});

function editProfile(evt) {
  evt.preventDefault();

  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;

  closeModal(popupEdit);
}

formEditProfile.addEventListener('submit', editProfile); 

function addNewCard(evt) {
  evt.preventDefault();
  
  const newData = {
    name: cardNameInput.value,
    link: cardUrlInput.value
  }

  placesList.prepend(createCard(newData, deleteCard, likeCard, zoomCard));

  formNewPlace.reset();

  closeModal(popupNewCard);
}

formNewPlace.addEventListener('submit', addNewCard);

function zoomCard(item) {
  openModal(popupImage);
  document.querySelector('.popup__image').src = item.link;
  document.querySelector('.popup__image').alt = item.name;
  document.querySelector('.popup__caption').textContent = item.name;
}

addCloseByXListener(popupImage);

addCloseByOverlayListener(popupImage);

editButton.addEventListener('click', function() {
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;
  
  openModal(popupEdit);
});

addCloseByXListener(popupEdit);

addCloseByOverlayListener(popupEdit);

addButton.addEventListener('click', function() {
  openModal(popupNewCard);
});

addCloseByXListener(popupNewCard);

addCloseByOverlayListener(popupNewCard);