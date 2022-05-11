import { galleryItems } from "gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);

const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", keyboardClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", keyboardClose);
      },
    }
  );
  function keyboardClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
  // const visible = basicLightbox.visible();
});

console.log(galleryItems);
