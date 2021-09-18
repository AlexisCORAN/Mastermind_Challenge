# Mastermind Game

This is a project at Holberton School where we implemented a version of the Mastermind game.

<<br />
## Proyect members

This project was productive every member of the team

* **Renato Leon**
* **Manuel Condori**
* **Andres Condezo**
* **Alexis Coronado**

<<br />
## Presentation of the language

<strong> JAVASCRIP </strong> was the chosen language.
We chose this language because of the ease we have to give dynamism to a web page.
We can make interventions, animations and requests to the server without having to reload the page.

In addition, we can complement it with CSS, to obtain the graphic part of the game.

<<br />
## Algorithm put in place



<<br />
## User(s) flow to play

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

<<br />
## Piece of code related to the algorithm or flow

```js
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
```

<<br />
## Screenshots of the game

[![Screenshot-247.png](https://i.postimg.cc/BZB3GwYV/Screenshot-247.png)](https://postimg.cc/w3MZXFdX)

[![Screenshot-248.png](https://i.postimg.cc/cLYTVPTK/Screenshot-248.png)](https://postimg.cc/jDxzfgpK)

[![Screenshot-249.png](https://i.postimg.cc/Y0hz8PhC/Screenshot-249.png)](https://postimg.cc/XB65YQfR)

<<br />
## Play Mastermind

We have created an environment to play Mastermind, in a docker container.

You can see the docker image in the following link: 
[Mastermind!](https://hub.docker.com/r/andrescondezo/mastermind_js)

You can run the image with the following suggested command

```Bash
docker run --name <name of the container> -p 8080:80 -d -ti andrescondezo/mastermind_js
```