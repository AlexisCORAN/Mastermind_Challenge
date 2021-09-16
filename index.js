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
            <div id="guess-${row}-${col}" class="guess-peg"><button>peg${row}${col}</button></div>
        `
        gradeHTML += `
            <div id="grade-${row}-${col}" class="grade-peg"><button>grade${row}${col}</button></div>
        `
    }

    DOM.guessContainer.insertAdjacentHTML('beforeend', guessRowHTML(guessHTML, gradeHTML))
}

const guessPegs = document.querySelectorAll('.guess-peg')
const gradePegs = document.querySelectorAll('.grade-peg')

guessPegs.forEach(el => el.addEventListener('click', () => console.log(el.id)))

gradePegs.forEach(el => el.addEventListener('click', () => console.log(el.id)))
