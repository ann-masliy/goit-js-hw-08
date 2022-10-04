// Add imports above this line
import SimpleLightbox from 'simplelightbox'
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const gallery = document.querySelector('.gallery')
const galleryItem = galleryItems.map(galleryItem => 
    `<a class="gallery__item" href="${galleryItem.original}">
<img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source= "${galleryItem.original}"
    alt="${galleryItem.description}"
/>
</a>`)
.join("");

gallery.innerHTML = galleryItem;

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);
