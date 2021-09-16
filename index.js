const DOM = {
    guessContainer: document.getElementById('guessContainer')
}

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

const [rows, cols] = [10, 4]

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

    DOM.guessContainer.insertAdjacentHTML('beforeend', guessRowHTML(guessHTML, gradeHTML))
}
