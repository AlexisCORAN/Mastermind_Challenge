function checkRowColors(row) {
    let color
    let [reds, whites] = [0, 0]
    let remaining = []

    for (let col = 0; col < cols; col++)
    {
        id = `grade-${row}-${col}`
        color = document.getElementById(id).style.background
        if (answer[col] == color)
            reds++
        else
            remaining.push(color)
    }

    for (letcolor of remaining)
    {

    }
}

function createSelector() {
    let selectorHTML = ''
    for (let [key, color] of Object.entries(colors))
    {
        selectorHTML += `
            <button id="selector-${key}" color="key" class="selector" style="background: ${color};"></button>
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
                let color = el.color
                document.getElementById(id).style.background = color

                if (currCol == cols)
                {
                    checkRowColors(currRow++)
                    currCol = 0
                }
            })
        )
}

function renderSelector() {
    createSelector()
    addListenersToSelector()
}
