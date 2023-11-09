const countUp = (numberItem, from, to) => {
  let duration = 2500;
  let startTime = performance.now();

  function updateCounter() {
    let now = performance.now();
    let progress = Math.min((now - startTime) / duration, 1); // calculate progress as a fraction between 0 and 1
    let count = Math.floor(from + progress * (to - from)); // calculate current count based on progress
    numberItem.innerHTML = count;

    if (progress < 1) {
      requestAnimationFrame(updateCounter); // continue the animation if it's not done yet
    }
  }

  updateCounter();
};

const initCountUp = () => {
  document.querySelectorAll('.counter__number .count__it').forEach((numberItem) => {
    countUp(numberItem, Number(numberItem.dataset.from), Number(numberItem.dataset.to));
  });
};

export { initCountUp };
