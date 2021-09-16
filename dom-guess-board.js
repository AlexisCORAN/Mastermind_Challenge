function createGuessButtons() {
    const guessRowHTML = (guessPeg, gradePeg) => `
        <div class="guess-row">
            <div class="guess-pegs">
                ${guessPeg}
            </div>
            <div class="grade-pegs">
                ${gradePeg}
            </div>
        </div>
    `

    for (let row = 0; row < rows; row++)
    {
        let guessHTML = ''
        let gradeHTML = ''
        for (let col = 0; col < cols; col++)
        {
            guessHTML += `
                <div id="guess-${row}-${col}" class="guess-peg"><button>${row}${col}</button></div>
            `
            gradeHTML += `
                <div id="grade-${row}-${col}" class="grade-peg"><button>${row}${col}</button></div>
            `
        }

        DOM.guessContainer.insertAdjacentHTML('beforeend', guessRowHTML(guessHTML, gradeHTML))
    }
}

function addListenersToGuessButtons() {
    document.querySelectorAll('.guess-peg')
        .forEach(el => el.addEventListener('click', () => {
                console.log(el.id)
            })
        )

    document.querySelectorAll('.grade-peg')
        .forEach(el => el.addEventListener('click', () => {
                console.log(el.id)
            })
        )
}

function renderGuessButtons() {
    createGuessButtons()
    addListenersToGuessButtons()
}
