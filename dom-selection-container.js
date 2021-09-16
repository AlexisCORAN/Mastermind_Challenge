function createSelector() {
    const selectorContainerHTML = (selector) => `
        <div class="selector-container">
                ${selector}
        </div>
    `
    let selectorHTML = ''
    for (let col = 0; col < selectorCols; col++)
    {
        selectorHTML += `
            <div id="selector-${col}" class="selector"><button>${col}</button></div>
            `
        DOM.guessContainer.insertAdjacentHTML('beforeend', selectorHTML(selectorHTML))
    }
}

function addListenersToSelector() {
    document.querySelectorAll('.selector')
        .forEach(el => el.addEventListener('click', () => {
                console.log(el.id)
            })
        )
}

function renderGuessButtons() {
    createSelector()
    addListenersToSelector()
}
