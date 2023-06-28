const mainProject = document.querySelector('#main-project');

const project1= [
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
       
    `
    grid += projectSection;
});
mainProject.innerHTML = grid;


// popup section

const popupWindow2 = document.createElement('div');
popupWindow2.classList.add('popup-container');

function popup2(item) {
    let languages = '';
    project1.languages.forEach((language) => {
        languages += `<li>${language}</li>`;
    });

    const popupContainer2 = `
    <section class="popup">
        <article class="projects container popup-holder">
            <article class="popup-top">
                <div class="project-header">
                    <h3 class="tertiary-heading">${item.name}</h3>
                    <button class="close-btn">
                        <a class="popup-close-icon" href="#"><img src="./assets/images/Img Placeholder.png" alt="closeicon"></a>
                    </button>
                </div>
                <ul class="project-details">
                    ${languages}
                </ul>
            </article>
            <article class="popup-bottom">
                <div class="popup-bottom-image">
                    <img class="popup-image" src="${item.image}" alt="popup-image" />
                </div>
                <div class="image-description">
                    <p class="image-text ">
                        ${item.description}
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
    popupWindow2.innerHTML =  popupContainer2;
    document.body.appendChild(popupWindow2);
}

// popup onclick
const overfloww2 = document.querySelector('.popup');
const popupclick2 = document.querySelectorAll("[id^='myprojectbtn']");
popupclick2.forEach((button, index) => {
    button.addEventListener('click', (eve) =>{
        eve.preventDefault();
        
        const proj = project1[index];
        popup(proj);
        const closePopup2 = document.querySelector('.close-btn');

        const exitPopup2 = (event) =>{
            event.preventDefault();
            popupWindow.remove();
        };

        closePopup2.addEventListener('click', exitPopup2);
        overfloww2.addEventListener('click', exitPopup2);
    });
});