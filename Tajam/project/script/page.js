'use strict'

window.addEventListener('resize', defineWindow());

function defineWindow() {
    const lastWindow = 828;
    let screenWidth = window.screen.width;

    if (lastWindow > screenWidth) {
        adapt();
    }

}

function adapt() {
    let expertiseBlock = document.querySelector('.main__expertise-block');
    let expertiseBlockTop = expertiseBlock.getBoundingClientRect().top;
    let expertiseBlockBot = expertiseBlock.getBoundingClientRect().top;
    let expertiseBlockHeight = expertiseBlock.getBoundingClientRect().height;

    document.querySelector('.main__meet').style.top = expertiseBlockTop + expertiseBlockBot + expertiseBlockHeight + 'px';
}