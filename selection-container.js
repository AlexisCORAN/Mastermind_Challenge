function createSelector() {
    let selectorHTML = ''
    for (let col of colors)
    {
        selectorHTML += `
            <div id="selector-${col}" class="selector ${col}"><button>${col}</button></div>
            `
    }
	DOM.selectionContainer.insertAdjacentHTML('beforeend', selectorHTML)
}

function addListenersToSelector() {
    document.querySelectorAll('.selector')
        .forEach(el => el.addEventListener('click', () => {
                console.log(el.id)
            })
        )
}

function renderSelector() {
    createSelector()
    addListenersToSelector()
}
