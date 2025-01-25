document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]')

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

    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', OpenClose);
    }
})

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
