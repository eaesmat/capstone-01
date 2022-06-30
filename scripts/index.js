const featuredSpeakers = [
  {
    id: 1,
    name: 'Zmaryal',
    title: 'Focus on what you lift.',
    description: 'The pain you suffer today is the sign of tomorrow’s victory.',
    featured_image: './img/speaker_01.png',
    alt_message: 'Featured item-one',
  },
  {
    id: 2,
    name: 'Ustad Atal',
    title: 'We will help you to shape your muscles.',
    description: 'Nothing tastes as good as being fit feels. Success never comes to those who quit.',
    featured_image: './img/speaker_02.png',
    alt_message: 'Featired ite-two',
  },

  {
    id: 3,
    name: 'Sarah Ali',
    title: 'Persist Until Something Happens.',
    description: 'Persist Until Something Happens.Power, perseverance, and discipline.',
    featured_image: './img/speaker_03.png',
    alt_message: 'Featured item-Three',
  },
  {
    id: 4,
    class: 'hide',
    name: 'Malala Hargez',
    title: "Slow progress is better than no progress",
    description: "Push harder today if you want a different tomorrow.Where fitness comes naturally.",
    featured_image: './img/speaker_04.png',
    alt_message: 'featured item-four',
  },
  {
    id: 5,
    class: 'hide',
    name: 'Alia Mohammed',
    title: 'Do it because they said you couldn’t.',
    description: 'Do it because they said you couldn’t.The best way to predict your future is to create it.',
    featured_image: './img/speaker_05.png',
    alt_message: 'featured-item-Five',
  },
  {
    id: 6,
    class: 'hide',
    name: 'Dawood Parhez',
    title: 'Success never comes to those who quit.',
    description: 'Success never comes to those who quit. Passionate experts energize lives.',
    featured_image: './img/speaker_06.png',
    alt_message: 'Alexa Martin- Filmmaker Six',
  },
];

const featuredSect = document.querySelector('#featured-section');
featuredSect.classList.add('featured-sect');

const headingTwo = document.createElement('h2');
headingTwo.classList.add('featured-heading');
headingTwo.innerHTML = 'Featured Speakers';
featuredSect.appendChild(headingTwo);

const horizontalLine = document.createElement('hr');
horizontalLine.classList.add('under-line');
featuredSect.appendChild(horizontalLine);

const speakerSect = document.createElement('div');
speakerSect.classList.add('speakers-sect');
featuredSect.appendChild(speakerSect);

featuredSpeakers.forEach((featuredSpeaker) => {
  const speakerSegment = document.createElement('div');
  speakerSegment.classList.add('speaker-segment', `${featuredSpeaker.class}`);
  speakerSect.appendChild(speakerSegment);

  const speakerImage = document.createElement('div');
  speakerImage.classList.add('speaker-image');
  speakerImage.innerHTML = `<img src="${featuredSpeaker.featured_image}" alt="${featuredSpeaker.alt_message}">`;
  speakerSegment.appendChild(speakerImage);

  const speakerProfile = document.createElement('div');
  speakerProfile.classList.add('speaker-profile');
  speakerSegment.appendChild(speakerProfile);

  const headingFour = document.createElement('h4');
  headingFour.innerHTML = `${featuredSpeaker.name}`;
  speakerProfile.appendChild(headingFour);

  const paraOne = document.createElement('p');
  paraOne.classList.add('title');
  paraOne.innerHTML = `${featuredSpeaker.title}`;
  speakerProfile.appendChild(paraOne);

  const horitontalLine2 = document.createElement('hr');
  horitontalLine2.classList.add('feature-line');
  speakerProfile.appendChild(horitontalLine2);

  const paraTwo = document.createElement('p');
  paraTwo.innerHTML = `${featuredSpeaker.description}`;
  speakerProfile.appendChild(paraTwo);
});

const moreSect = document.createElement('div');
featuredSect.appendChild(moreSect);

const paraThree = document.createElement('p');
paraThree.classList.add('more');
paraThree.innerHTML = 'MORE <i class="fas fa-chevron-down fa-lg more-down"></i>';
moreSect.appendChild(paraThree);

// MENU BAR ON MOBILE
const menuBarOverlay = document.querySelector('#menu-bar-overlay');
const closeMenu = document.querySelector('#close-menu-item');
const openMenu = document.querySelector('#hamburger-menu');
const menuOptions = document.querySelectorAll('.menu-options');
// view menu list

const viewMenuItems = () => {
  openMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
viewMenuItems();

// close menu list

const closeMenuItems = () => {
  closeMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'none';
  });
};
closeMenuItems();

// Select menu options
const openMenuOption = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      menuBarOverlay.style.display = 'none';
    });
  });
};
openMenuOption();

// 'MORE' Mobile Option
const moreSegment = document.querySelector('.more');
const moreButton = document.querySelector('.more-down');
const moreOptions = document.querySelectorAll('.hide');

const moreFilmmakerOptions = () => {
  moreButton.addEventListener('click', () => {
    moreOptions.forEach((moreOption) => {
      moreOption.style.display = 'grid';
    });
    moreSegment.style.display = 'none';
  });
};
moreFilmmakerOptions();
