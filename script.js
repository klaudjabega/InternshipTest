document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000
  }).mount();
});

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}).mount();
