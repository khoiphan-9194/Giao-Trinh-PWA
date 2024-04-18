export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'red') {
    header.style.color = 'green';
  } else {
    header.style.color = 'red';
  }
};

// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works