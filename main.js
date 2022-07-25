let isClicked = false;

// eslint-disable-next-line no-unused-vars
function display() {
  if (!isClicked) {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('open-menu').style.display = 'none';
    document.getElementById('close-menu').style.display = 'block';
    isClicked = true;
  } else {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('open-menu').style.display = 'block';
    document.getElementById('close-menu').style.display = 'none';
    isClicked = false;
  }
}