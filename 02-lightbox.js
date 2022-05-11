import { galleryItems } from "/gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
  )
  .join("");

gallery.innerHTML = markup;

let instance = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
// gallery.addEventListener("click", (event) => {
// event.preventDefault();
// if (event.target.nodeName !== "IMG") return;

//   console.log(event.target.alt);
//   if (event.target.nodeName !== "IMG") return;

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}">
// `);
//   instance.show();
//   const visible = basicLightbox.visible();
//   if (visible) {
//     document.addEventListener("keydown", (event) => {
//       if (event.code === "Escape") {
//         instance.close();
//       }
//     });
//   }
//   var lightbox = new SimpleLightbox(".gallery a", {
//     /* options */
//     captionsData: "alt",
//     captionPosition: "bottom",
//     captionDelay: 250,
//   });
// });
