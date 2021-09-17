function createSelector() {
    let selectorHTML = ''
    for (let col of colors)
    {
        selectorHTML += `
            <button id="selector-${col}" class="selector ${col}"></button>
            `
    }
	DOM.selectionContainer.insertAdjacentHTML('beforeend', selectorHTML)
}

function addListenersToSelector() {
    document.querySelectorAll('.selector')
        .forEach(el => el.addEventListener('click', () => {
                if (currRow == rows) {
                    alert('Fin del juego!!!!')
                    return;
                }

                const id=`guess-${currRow}-${currCol++}`
                let color = el.classList[1]
                // document.getElementById(id).classList.push(color)
                document.getElementById(id).style.background = color
                if (currCol == cols)
                {
                    currRow++;
                    currCol = 0
                }
            })
        )
}

function renderSelector() {
    createSelector()
    addListenersToSelector()
}
