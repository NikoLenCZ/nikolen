import Glide from '@glidejs/glide';


const initGliders = () => {
  if (document.querySelector('.glide')) {
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  focusAt: 'center',
  gap: 20,
  peek: {
    before: 0,
    after: 0,
  },
  breakpoints: {
      1200: {
          perView: 2,
          focusAt: 'center',
          peek: {
            before: 0,
            after: 150,
          },
      },
      992: {
          perView: 2,
          focusAt: 'center',
          peek: {
            before: 0,
            after: 100,
          },
      },
      768: {
        perView: 1,
        focusAt: '0',
        peek: {
          before: 0,
          after: 100,
        },
    },
      400: {
          perView: 1,
          peek: {
            before: 0,
            after: 0,
          },
      },
  },
})
.mount();
}

};

export { initGliders };
