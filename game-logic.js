function showGameOver() {
    alert("The game is OVER!!")
}

function checkCodeColor(reds) {
    if (reds === cols) {
        renderAnswer()
        gameOver = true;
        setTimeout(() => {
            alert("You cracked the code!!!")
        }, 0);
    }
}

function checkRowColors(row) {
    let el, color
    let [reds, whites] = [0, 0]
    let ansMap = {}, remaining = []
    let allReds = 0

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

    allReds = reds
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

    checkCodeColor(allReds)
}

function paintPegs(el) {
    if (gameOver === true) {
        showGameOver()
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

    if (currRow === rows)
    {
        renderAnswer()
        gameOver = true
    }
}
