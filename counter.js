let counter = 0;

const increaseCounter = () => {
  counter += 1;
  document.querySelector(".Counter").textContent = counter;
};
