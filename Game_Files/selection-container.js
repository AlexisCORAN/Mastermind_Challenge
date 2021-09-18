function createSelector() {
    let selectorHTML = ''
    for (let [key, color] of Object.entries(colors))
    {
        selectorHTML += `
            <button id="selector-${key}" data-color="${key}" class="selector" style="background: ${color};"></button>
            `
    }
		DOM.selectionContainer.innerHTML = ''
		DOM.selectionContainer.insertAdjacentHTML('beforeend', selectorHTML)
}

function addListenersToSelector() {
    document.querySelectorAll('.selector')
        .forEach(el => el.addEventListener('click', () => paintPegs(el))
        )
}

function renderSelector() {
    createSelector()
    addListenersToSelector()
}
