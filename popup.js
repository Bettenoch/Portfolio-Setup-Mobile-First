/* eslint-disable linebreak-style */
const works = document.querySelector('#work-projects');
const mainProject = document.querySelector('#main-project');

const project1 = [
  {
    name: 'Multi Post Stories',
    languages: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: './assets/images/Img Placeholder.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },
];

const projects = [

  {
    name: 'Data Dashboard Healthcare',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Website Portfolio More',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Data Dashboard Healthcare',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Website Portfolio More',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Data Dashboard Healthcare',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Website Portfolio More',
    languages: ['CSS', 'HTML', 'RUBY'],
    image: './assets/images/popupbg2.png',
    description:
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
    liveLink: '',
    sourceLink: '',
  },
];

let container = '';

projects.forEach((project, index) => {
  let languages = '';
  project.languages.forEach((language) => {
    languages += `<li>${language}</li>`;
  });

  const workSection = `
        
            <li class="grid-item1 item2">
                <div class="content content-head">
                    <div class="project1">
                        <h3 class="p-text">${project.name}
                        </h3>
                        <p class="s-text">
                            ${project.description}
                        </p>
                        <div class="tags">
                            <ul class="tag">
                                ${languages}
                            </ul>
                        </div>
                    </div>
                                
                    <div class="btn2-holder" id="project-button-${index}">
                        See Project
                    </div>
                </div>
            </li>
       
    `;
  container += workSection;
});
works.innerHTML = container;

// popup section

const popupWindow = document.createElement('div');
popupWindow.classList.add('popup-container');

function popup(project) {
  let languages = '';
  project.languages.forEach((language) => {
    languages += `<li>${language}</li>`;
  });

  const popupContainer = `
    <section class="popup">
        <article class="projects container popup-holder">
            <article class="popup-top">
                <div class="project-header">
                    <div>
                        <h3 class="tertiary-heading">${project.name}</h3>
                    </div>
                    <div>
                        <button class="close-btn">
                            <a class="popup-close-icon" href="#"><img src="./assets/images/CloseIcon2.svg" alt="closeicon"></a>
                        </button>
                    </div>
                </div>
                <ul class="project-details">
                    ${languages}
                </ul>
            </article>
            <article class="popup-bottom">
                <div class="popup-bottom-image">
                    <img class="popup-image" src="${project.image}" alt="popup-image" />
                </div>
                <div class="image-description">
                    <p class="image-text ">
                        ${project.description}
                    </p>
                    <div class="btn-holder popup-btn">
                        <button class="btn">
                            <span> See Live</span>
                            <a href="#" target="_blank"><img src="./assets/images/livebtn.svg" alt="livebuttonsvg"></a>
                        </button>

                        <button class="btn">
                            <span> See Source</span>
                            <a href="#" target="_blank"><img src="./assets/images/github.svg" alt="githubicon"></a>
                        </button>
                    </div>

                </div>
            </article>
        </article>
    </section>       
    `;
  popupWindow.innerHTML = popupContainer;
  document.body.appendChild(popupWindow);
}

// popup onclick
const overfloww = document.querySelector('.popup');
const popupclick = document.querySelectorAll("[id^='project-button-']");
popupclick.forEach((button, index) => {
  button.addEventListener('click', (eve) => {
    eve.preventDefault();

    const project = projects[index];
    popup(project);
    const closePopup = document.querySelector('.close-btn');

    const exitPopup = (event) => {
      event.preventDefault();
      popupWindow.remove();
    };

    closePopup.addEventListener('click', exitPopup);
    overfloww.addEventListener('click', exitPopup);
  });
});

// main-project
let grid = '';
project1.forEach((item) => {
  let tech = '';
  item.languages.forEach((language) => {
    tech += `<li>${language}</li>`;
  });

  const projectSection = `
        
            <div class="img-holder">
                <img class="work-banner" src="./assets/images/Img Placeholder.png" alt="workimage">
            </div>
            <div class='text-group'>
                <hgroup>
                    <h2 class="work_primary_text">${item.name}</h2>
                    <p>
                        ${item.description}
                    </p>
                </hgroup>
                <div id="languages" class="languages">
                    <ul class="language">
                        ${tech}
                    </ul>
                </div>
                <div class="btn-holder" id="myprojectbtn">
                    <button class="btn">See Project</button>
                </div>
            </div>
       
    `;
  grid += projectSection;
});
mainProject.innerHTML = grid;

// popup section

const popupWindow2 = document.createElement('div');
popupWindow2.classList.add('popup-container');

// popup onclick
const overfloww2 = document.querySelector('.popup');
const popupclick2 = document.querySelectorAll("[id^='myprojectbtn']");
popupclick2.forEach((button, index) => {
  button.addEventListener('click', (eve) => {
    eve.preventDefault();

    const proj = project1[index];
    popup(proj);
    const closePopup2 = document.querySelector('.close-btn');

    const exitPopup2 = (event) => {
      event.preventDefault();
      popupWindow.remove();
    };

    closePopup2.addEventListener('click', exitPopup2);
    overfloww2.addEventListener('click', exitPopup2);
  });
});