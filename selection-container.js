function checkRowColors(row) {
    let el, color
    let [reds, whites] = [0, 0]
    let ansMap = {}, remaining = []

    for (let col = 0; col < cols; col++)
    {
        id = `guess-${row}-${col}`
        color = document.getElementById(id).dataset.color
        ansColor = answer[col]
        if (ansColor == color) {
            reds++
        } else {
            ansMap[ansColor] = (ansMap[ansColor] || 0) + 1
            remaining.push(color)
        }
    }

    remaining.forEach(color => {
        if (ansMap[color])
        {
            ansMap[color] -= 1
            whites++;
        }
    })

    for (let col = 0; col < cols; col++)
    {
        id = `grade-${row}-${col}`
        el = document.getElementById(id)
        if (reds > 0) {
            el.style.background = '#f00'
            reds--
        } else if (whites > 0) {
            el.style.background = '#fff'
            whites--
        }
    }
}

function createSelector() {
    let selectorHTML = ''
    for (let [key, color] of Object.entries(colors))
    {
        selectorHTML += `
            <button id="selector-${key}" data-color="${key}" class="selector" style="background: ${color};"></button>
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
                let color = el.style.background
                let elem = document.getElementById(id)
                elem.style.background = color
                elem.dataset.color = el.dataset.color

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
