const works = document.querySelector('#work-projects');

const projects = [

    {
        name: 'Data Dashboard Healthcare',
        languages: ['CSS', 'HTML', 'RUBY'],
        image: "./assets/images/backimage.png",
        description: 
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
        liveLink: '',
        sourceLink: '',
    },

    {
        name: 'Website Portfolio More',
        languages: ['CSS', 'HTML', 'RUBY', ],
        image: "./assets/images/backimage.png",
        description: 
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
        liveLink: '',
        sourceLink: '',
    },

    {
        name: 'Data Dashboard Healthcare',
        languages: ['CSS', 'HTML', 'RUBY'],
        image: "./assets/images/backimage.png",
        description: 
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
        liveLink: '',
        sourceLink: '',
    },

    {
        name: 'Website Portfolio More',
        languages: ['CSS', 'HTML', 'RUBY'],
        image: "./assets/images/backimage.png",
        description: 
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
        liveLink: '',
        sourceLink: '',
    },

    {
        name: 'Data Dashboard Healthcare',
        languages: ['CSS', 'HTML', 'RUBY'],
        image: "./assets/images/backimage.png",
        description: 
        'A daily selection of privately personalizedreads; no accounts or sign-ups required.This has been the industry standard dummy text ever since the 1500s, when an uknown printertook a standaed dummy text',
        liveLink: '',
        sourceLink: '',
    },
    {
        name: 'Website Portfolio More',
        languages: ['CSS', 'HTML', 'RUBY'],
        image: "./assets/images/backimage.png",
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
       
    `
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
                    <h3 class="tertiary-heading">${project.name}</h3>
                    <button class="close-btn">
                        <a class="popup-close-icon" href="#"><img src="./assets/images/CloseIcon2.svg" alt="closeicon"></a>
                    </button>
                </div>
                <ul class="project-details">
                    ${languages}
                </ul>
            </article>
            <article class="popup-bottom">
                <div class="popup-bottom-image">
                    <img class="popup-image" src="./assets/images/popupbg2.png" alt="popup-image" />
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
    popupWindow.innerHTML =  popupContainer;
    document.body.appendChild(popupWindow);
}

// popup onclick
const overfloww = document.querySelector('.popup');
const popupclick = document.querySelectorAll("[id^='project-button-']");
popupclick.forEach((button, index) => {
    button.addEventListener('click', (eve) =>{
        eve.preventDefault();
        
        const project = projects[index];
        popup(project);
        const closePopup = document.querySelector('.close-btn');

        const exitPopup = (event) =>{
            event.preventDefault();
            popupWindow.remove();
        };

        closePopup.addEventListener('click', exitPopup);
        overfloww.addEventListener('click', exitPopup);
    });
});