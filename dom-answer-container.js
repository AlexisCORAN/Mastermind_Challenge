function createAnswerButtons() {
    let guessHTML = ''
    for (let col = 0; col < cols; col++)
    {
        guessHTML += `
            <div id="" class="answer-peg"></div>
        `
    }

    DOM.answerContainer.insertAdjacentHTML('beforeend', guessRowHTML(guessHTML, gradeHTML))
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