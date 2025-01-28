document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heigtHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
       const positionScroll = window.scrollY;

       if (positionScroll < heigtHero) {
            hiddenHeaderElements();
       } else {
        displayHeaderElements();
       }
    });

    // SECTION TABS
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const tabTarget = event.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            
            hiddenAllTabs();
    
            tab.classList.add('shows__list--is-active');
           
            removeButtonActive();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // Code Programation FAQ
    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', OpenClose);
    }
})

function hiddenHeaderElements(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function displayHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function OpenClose(element) {
    const class1 = 'faq__questions__item--is-open';
    const elementDad = element.target.parentNode;
    
    elementDad.classList.toggle(class1)
}


function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hiddenAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
