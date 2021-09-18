# Hack day: Mastermind challenge :key:

## ...........Challenge................:lock: 
This repository contains the implementation of the mastermind game, this is a board game, of ingenuity and reflection, at first this version only allows the interaction of one player, later in version 2 it will be multiplayer. It is played on a board with small white and red chips and other colors, somewhat larger in size. The player, taking colored tiles from the same set, ventures a possibility answered with red (well placed color tiles) or white (color tiles with the correct color, but wrongly placed).

It ends when the combination is found (that is, a combination with four reds is achieved), or the board is exhausted (it depends on the size, although there are generally 10 combinations).


:white_check_mark: Requirements
* By group of 5~ students (you can regroup based on attendance) - but your evaluation will be as campus!
* Each language can only be used once per campus - advice: take 10-20min at the beginning of the day to dispatch languages.
* Each group must develop at least one Mastermind version - feel free to develop as more as you can - but don’t forget to help your peers!
* You are free of the number of columns, colors and turns.
* Each game can be one player (against a bot) or 2 players
* Only languages bellow are allowed for implementing the Mastermind
* Make it fun!


## Language used >>>:hammer:
> Javascript

## How to download dockerhub image and play :video_game:
### 1.-Run this script on your command line.
```sh
$docker run --name <name for the container> -p 8080:80 -d -ti andrescondezo/mastermind-js
$hostname -I
172.0.0.0  
```
### 2.-copy the ID you just obtained and paste it into your browser (if you put a port other than 80 you will have to specify it in the browser, example: 127.0.0.0:8080) 

### 3.-Enjoy the game

## Authors :pencil2:
* **Renato Leon**
* **Manuel Condori**
* **Andres Condezo**
* **Alexis Coronado**
