// TODO: Add a comment explaining the role of `export` in this function `boxClick()`

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'red';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
