window.addEventListener("load", () => {
    document.body.classList.remove("preload");
})


// Opening individual project category submenus -- this is definintely not the easiest way.

const casestudies = document.querySelector('.casestudies-category');
/* const competitions = document.querySelector('.competitions-category'); */
const personal = document.querySelector('.personal-category');

function toggleCaseStudies() {
    if (this.parentElement.querySelector('.casestudies').classList.contains("submenu-active")) {
        this.parentElement.querySelector('.casestudies').classList.remove("submenu-active");
        this.querySelector('.title').classList.remove('chevron');
    }
    else {
        this.parentElement.querySelector('.casestudies').classList.add("submenu-active");
        this.querySelector('.title').classList.add('chevron');
    }
}

function toggleCompetitions() {
    if (this.parentElement.querySelector('.competitions').classList.contains("submenu-active")) {
        this.parentElement.querySelector('.competitions').classList.remove("submenu-active");
        this.querySelector('.title').classList.remove('chevron');

    }
    else {
        this.parentElement.querySelector('.competitions').classList.add("submenu-active");
        this.querySelector('.title').classList.add('chevron');
    }
}

function togglePersonal() {
    if (this.parentElement.querySelector('.personal').classList.contains("submenu-active")) {
        this.parentElement.querySelector('.personal').classList.remove("submenu-active");
        this.querySelector('.title').classList.remove('chevron');
    }
    else {
        this.parentElement.querySelector('.personal').classList.add("submenu-active");
        this.querySelector('.title').classList.add('chevron');
    }
}

casestudies.addEventListener('click',toggleCaseStudies,false)
/* competitions.addEventListener('click',toggleCompetitions,false) */
personal.addEventListener('click',togglePersonal,false)