// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const paper = document.querySelector('img.paper');
const rock = document.querySelector('img.rock');
const scissors = document.querySelector('img.scissors');
const start = document.querySelector('button.start');
const whowin = document.querySelector('[data-summary="who-win"]');
const played = document.querySelector('p.numbers');
const wins = document.querySelector('p.wins');
const losses = document.querySelector('p.losses');
const draws = document.querySelector('p.draws');
let playerWin = 0;
let aiWin = 0;
let draw = 0;
let games = 0;
let ai = ["paperAi", "rockAi", "scissorsAi"];



const pickPaper = () => {
    if(rock.classList.contains('picked') || scissors.classList.contains('picked')){
        alert ("You can't play more than one symbol!");
        return;
    } else{
        paper.classList.remove('aiwin');
        rock.classList.remove('aiwin');
        scissors.classList.remove('aiwin');
        paper.classList.remove('ailose');
        rock.classList.remove('ailose');
        scissors.classList.remove('ailose');
        paper.classList.toggle('picked');
        whowin.textContent = "";
    }
}

const pickRock = () => {
    if(paper.classList.contains('picked') || scissors.classList.contains('picked')){
        alert ("You can't play more than one symbol!");
        return;
    } else{
        paper.classList.remove('aiwin');
        rock.classList.remove('aiwin');
        scissors.classList.remove('aiwin');
        paper.classList.remove('ailose');
        rock.classList.remove('ailose');
        scissors.classList.remove('ailose');
        rock.classList.toggle('picked');
        whowin.textContent = "";
    }
}

const pickScissors = () => {
    if(rock.classList.contains('picked') || paper.classList.contains('picked')){
        alert ("You can't play more than one symbol!");
        return;
    } else{
        paper.classList.remove('aiwin');
        rock.classList.remove('aiwin');
        scissors.classList.remove('aiwin');
        paper.classList.remove('ailose');
        rock.classList.remove('ailose');
        scissors.classList.remove('ailose');
        scissors.classList.toggle('picked');
        whowin.textContent = "";
    }
}

const startGame = () => {
    if(paper.classList.contains('picked') === false && rock.classList.contains('picked') === false && scissors.classList.contains('picked') === false){
        alert ("Choose something to play the game!");
        return;
    } else{
        let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        let aiPlayed = ai[i];
        if(paper.classList.contains('picked') && aiPlayed === "paperAi"){
            draw++
            whowin.textContent = "Draw!";
        } else if(paper.classList.contains('picked') && aiPlayed === "rockAi"){
            playerWin++
            rock.classList.add('ailose');
            whowin.textContent = "You win! by beating rock.";
        } else if(paper.classList.contains('picked') && aiPlayed === "scissorsAi"){
            aiWin++
            scissors.classList.add('aiwin');
            whowin.textContent = "PC! chose scissors.";
        } else if(rock.classList.contains('picked') && aiPlayed === "rockAi"){
            draw++
            whowin.textContent = "Draw!";
        } else if(rock.classList.contains('picked') && aiPlayed === "paperAi"){
            aiWin++
            paper.classList.add('aiwin');
            whowin.textContent = "PC! Chose paper.";
        } else if(rock.classList.contains('picked') && aiPlayed === "scissorsAi"){
            playerWin++
            scissors.classList.add('ailose');
            whowin.textContent = "You win! by beating scissors.";
        } else if(scissors.classList.contains('picked') && aiPlayed === "scissorsAi"){
            draw++
            whowin.textContent = "Draw!";
        } else if(scissors.classList.contains('picked') && aiPlayed === "paperAi"){
            playerWin++
            paper.classList.add('ailose');
            whowin.textContent = "You win! by beatint paper.";
        } else if(scissors.classList.contains('picked') && aiPlayed === "rockAi"){
            aiWin++
            rock.classList.add('aiwin');
            whowin.textContent = "PC! chose rock.";
        }
    }
    scissors.classList.remove('picked');
    rock.classList.remove('picked');
    paper.classList.remove('picked');
    games++
    played.textContent = "Games: "+games;
    wins.textContent = "Wins: "+playerWin;
    losses.textContent = "Losses: "+aiWin;
    draws.textContent = "Draws: "+draw;
}

paper.addEventListener('click', pickPaper)
rock.addEventListener('click', pickRock)
scissors.addEventListener('click', pickScissors)
start.addEventListener('click', startGame)
