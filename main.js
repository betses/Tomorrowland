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
const featureRoster = [
  {
    id: 0,
    name: 'Robert Falcon',
    image: 'images/dj.jpeg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
  {
    id: 1,
    name: 'Dave Lambert',
    image: 'images/dj2.jpeg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
  {
    id: 2,
    name: 'Meaghan',
    image: 'images/dj3.jpeg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
  {
    id: 3,
    name: 'Odessy',
    image: 'images/dj4.jpeg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
  {
    id: 4,
    name: 'Dalafino',
    image: 'images/dj5.jpeg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
  {
    id: 5,
    name: 'Prinz',
    image: 'images/dj6.jpg',
    location: 'DJ, producer and musician',
    description: 'Electronic Dance Music, or EDM music definition, is any music produced electronically using digital and analog equipment and is meant to be danced to.',
  },
];

let isMobile = false;
let show = 3;

const mobileBreakpoint = 768;

const removeAllChildren = (wrapper) => {
  let child = wrapper.lastElementChild;
  while (child) {
    wrapper.removeChild(child);
    child = wrapper.lastElementChild;
  }
};

const renderPage = () => {
  const wrapper = document.querySelector('#speaker-wrapper');

  removeAllChildren(wrapper);

  let speakerContainer = '';

  for (let i = 0; i < (isMobile ? show : featureRoster.length); i += 1) {
    const el = document.createElement('div');
    el.className = 'speaker-wrapper1';
    speakerContainer = `
    <div class="speaker-container">
    <div class="speaker-image">
    <img class="speaker-img" src="${featureRoster[i].image}" alt="Dj image">
    </div>
    <div class="disc-container">
    <div class="speaker-disc">
      <h2>${featureRoster[i].name}</h2>
      <p>${featureRoster[i].location}</p>
    </div>
    <hr class="feature-line">
    <div class="discription">
      <p>${featureRoster[i].description}</p>
    </div>
    </div>
    </div>
    `;
    el.innerHTML += speakerContainer;
    wrapper.appendChild(el);
  }
};

window.addEventListener('resize', () => {
  const newState = document.body.clientWidth < mobileBreakpoint;

  if (newState !== isMobile) {
    isMobile = newState;

    renderPage();
  }
});

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    isMobile = document.body.clientWidth < mobileBreakpoint;
    renderPage();
  }
};

// eslint-disable-next-line no-unused-vars
const toggle = () => {
  const button = document.querySelector('#toggleButton');
  show = show === 3 ? 6 : 3;
  button.innerText = show === 3 ? 'More' : 'Less';
  renderPage();
};
