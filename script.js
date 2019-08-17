

clickHandler = () => {
    const randomNumberForPlayer1 = Math.floor(Math.random() * 6)+1;
    const randomNumberForPlayer2 = Math.floor(Math.random() * 6)+1;
    const srcImg1 = `./images/${randomNumberForPlayer1}.png`; 
    const srcImg2 =  `./images/${randomNumberForPlayer2}.png`; 

    document.getElementById("dice1").src = srcImg1;
    document.getElementById("dice2").src = srcImg2;

    let winner = null;
    if (randomNumberForPlayer1 > randomNumberForPlayer2) {
        winner = "Player 1 Won !!";
    } else if (randomNumberForPlayer1 < randomNumberForPlayer2){
        winner = "Player 2 Won !!";
    } else {
        winner = 'Tie !!';
    }
    document.getElementsByClassName('result')[0].innerHTML = `<h1>${winner}</h1>`;
}