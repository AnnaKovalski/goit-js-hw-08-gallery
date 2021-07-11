const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// 1) Создание и рендер ражметки элемента    ul.gallery, li.gallery__item внутри себя содержащий a, image
const galleryContainer = document.querySelector(".js-gallery");
const galleryItem = createMarkupGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItem);

// console.log(galleryContainer);

function createMarkupGalleryItem(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
     href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

// console.log(createMarkupGalleryItem(galleryItems));

// 2) Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  const clikedImage = event.target;
  event.preventDefault();
  if (clikedImage.nodeName !== "IMG") {
    return;
  }
  const bigSizwImageLink = clikedImage.dataset.source;
  const imageAlt = event.srcElement.alt;

  replacmentSource(bigSizwImageLink, imageAlt);
  modalWindowIsOpen();
}
const modalContainer = document.querySelector(".js-lightbox");

function modalWindowIsOpen() {
  modalContainer.classList.add("is-open");
}

const closeBtn = document.querySelector(".lightbox__button");

closeBtn.addEventListener("click", modalWindowClosed);

function modalWindowClosed() {
  modalContainer.classList.remove("is-open");
  originalImage.src = "";
  originalImage.alt = "";
}

const originalImage = document.querySelector(".lightbox__image");
// console.log(originalImage.src);
// console.log(originalImage.alt);

function replacmentSource(src, alt) {
  originalImage.src = src;
  originalImage.alt = alt;
}

// Закрытие модального окна по клику на div.lightbox__overlay

const overlayContainer = document.querySelector(".lightbox__overlay");

overlayContainer.addEventListener("click", modalWindowClosed);

// Закрытие модального окна по нажатию клавиши ESC

window.addEventListener("keydown", modalWindowClosed);
