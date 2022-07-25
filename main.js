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
    id: 1,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
  {
    id: 2,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
  {
    id: 3,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
  {
    id: 4,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
  {
    id: 5,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
  {
    id: 6,
    name: 'yotoro tototot',
    image: '',
    location: '',
    description: '',
  },
];

function isSmallScreen() {
  return window.matchMedia('(max-width: 768px)').matches;
}

const roster = document.getElementById('speaker-wrapper');
const speaker = document.createElement('div');
speaker.className = 'speaker-wrapper';
let speakerContainer = '';

if (isSmallScreen() === false) {
  speakerContainer = '';
  for (let i = 0; i < featureRoster.length; i += 1) {
    speakerContainer = `
    <div class="speaker-container">
    <div class="speaker-image">
    <img class="empity-img" src="images/empity.jpg" alt="empity">
    <img class="speaker-img" src="images/dj.jpeg" alt="Dj image">
    </div>
    <div class="disc-container">
    <div class="speaker-disc">
      <h2>Yochai Benkler</h2>
      <p>Bekman Professor of Enterprenurial Legal Student at harvard Law School</p>
    </div>
    <hr class="feature-line">
    <div class="discription">
      <p>Bekman Professor of Enterprenurial Legal bekman professor of Enterprenurial Legal bekman</p>
    </div>
    </div>
    </div>
    `;
    speaker.innerHTML += speakerContainer;
    window.addEventListener('resize', () => {
      window.location.replace();
    });
  }
} else {
  speakerContainer = '';
  for (let i = 0; i < 3; i += 1) {
    speakerContainer = `
    <div class="speaker-container">
    <div class="speaker-image">
    <img class="empity-img" src="images/empity.jpg" alt="empity">
    <img class="speaker-img" src="images/dj.jpeg" alt="Dj image">
    </div>
    <div class="disc-container">
    <div class="speaker-disc">
      <h2>Yochai Benkler</h2>
      <p>Bekman Professor of Enterprenurial Legal Student at harvard Law School</p>
    </div>
    <hr class="feature-line">
    <div class="discription">
      <p>Bekman Professor of Enterprenurial Legal bekman professor of Enterprenurial Legal bekman</p>
    </div>
    </div>
    </div>
    `;
    speaker.innerHTML += speakerContainer;
    window.addEventListener('resize', () => {
      window.location.reload();
    });
  }
}
roster.appendChild(speaker);
