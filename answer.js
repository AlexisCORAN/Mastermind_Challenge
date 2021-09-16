function createRandomAnswer() {
    answer = []
    let ind, size = colors.length
    for (let i = 0; i < cols; i++)
    {
        ind = Math.floor(Math.random() * size);
        answer.push(colors[ind])
    }
}

function createAnswerButtons() {
    let answerHTML = answer.reduce((acc, color) => `${acc}<div id="" class="answer-peg ${color}"></div>`, '')

    DOM.answerContainer.insertAdjacentHTML('beforeend', guessRowHTML(guessHTML, answerHTML))
}
