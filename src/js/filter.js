const initFilter = () => {
  document.querySelectorAll('.filter__button').forEach(button => {
    button.addEventListener('click', event => {
      const filterValue = event.target.getAttribute('data-filter');

      document.querySelectorAll('.cards__wrapper .card').forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

export { initFilter };
