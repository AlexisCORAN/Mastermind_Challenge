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

		DOM.guessContainer.innerHTML = ''
    for (let row = 0; row < rows; row++)
    {
        let guessHTML = ''
        let gradeHTML = ''
        for (let col = 0; col < cols; col++)
        {
            guessHTML += `
                <div id="guess-${row}-${col}" class="guess-peg"></div>
            `
            gradeHTML += `
                <div id="grade-${row}-${col}" class="grade-peg"></div>
            `
        }
        DOM.guessContainer.insertAdjacentHTML('afterbegin', guessRowHTML(guessHTML, gradeHTML))
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
