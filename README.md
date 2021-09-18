# Mastermind Game

This is a project at Holberton School where we implemented a version of the Mastermind game.


## Proyect members

* **Renato Leon**
* **Manuel Condori**
* **Andres Condezo**
* **Alexis Coronado**


## Presentation of the language

<p align=center> JAVASCRIPT </p>
> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.


## Algorithm put in place

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


## User(s) flow to play

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.


## Piece of code related to the algorithm or flow

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.


## Screenshots of the game

[![Screenshot-247.png](https://i.postimg.cc/BZB3GwYV/Screenshot-247.png)](https://postimg.cc/w3MZXFdX)

[![Screenshot-248.png](https://i.postimg.cc/cLYTVPTK/Screenshot-248.png)](https://postimg.cc/jDxzfgpK)

[![Screenshot-249.png](https://i.postimg.cc/Y0hz8PhC/Screenshot-249.png)](https://postimg.cc/XB65YQfR)


## Play Mastermind

We have created an environment to play Mastermind, in a docker container.

You can see the docker image in the following link: 
[Mastermind!](https://hub.docker.com/r/andrescondezo/mastermind_js)

You can run the image with the following suggested command

```Bash
docker run --name <name of the container> -p 8080:80 -d -ti andrescondezo/mastermind_js
```