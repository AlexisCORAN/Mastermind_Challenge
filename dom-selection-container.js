function createSelector() {
    const selectorHTML = (selector) => `
        <div class="guess-row">
            <div class="guess-pegs">
                ${guessPeg}
            </div>
        </div>
    `
    const cols = 6
    let gradeHTML = ''
    for (let col = 0; row < rows; row++)
    {
        gradeHTML += `
            <div id="grade-${row}-${col}" class="grade-peg"><button>grade${row}${col}</button></div>
            `
        DOM.guessContainer.insertAdjacentHTML('beforeend', selectorHTML(guessHTML, gradeHTML))
    }
}

function addListenersToSelector() {
    document.querySelectorAll('.guess-peg')
        .forEach(el => el.addEventListener('click', () => {
                console.log(el.id)
            })
        )
}

function renderGuessButtons() {
    createSelector()
    addListenersToSelector()
}
