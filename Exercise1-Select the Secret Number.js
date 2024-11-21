let finishGame = false;

let players = [
    {name:'Hacking', WinCasual:10, WinHard:13, WinHardcore:3}
];

let playerName = prompt('enter your name');

for (let i=0; i < players.length; i++) {
    if (players[i].name !== playerName) {
        players.push({ name: playerName, WinCasual: 0, WinHard: 0, WinHardcore: 0 })
        break
    }
};


while (finishGame == false) {
    let winningGame = false;

    alert("hola " + playerName) // concatenación
    alert(`Hola ${playerName}`) // interpolación

    const menu = prompt(`
    === GAME MENU ===
      1. Start Game
      2. Instructions
      3. Credits
      4. Ranking
      5. Exit
    Please enter the number of your choice:`)

    if (menu == '1') {

        const gameDifficulty = prompt(
            "=== Select a Difficulty ===\n" +
            "1. Casual\n" +
            "2. Hard\n" +
            "3. Hardcore mode\n" +
            "4. back\n\n" +
            "Please enter the number of your choice:");

        if (gameDifficulty == '1') {
            const randomNumber = Math.floor(Math.random() * 10 + 1);
            alert('Casual mode activated, in this mode you will have to guess a number from 1 to 10 with infinite attempts');
            while (winningGame == false) {
                const input = prompt('Select a number between 1 and 10');


                if (input === null) {
                    alert('The game is over');
                    // finishGame = true;
                    break
                };

                const selectedNumber = parseInt(input);



                if (selectedNumber >= 1 && selectedNumber <= 10) {

                    if (selectedNumber == randomNumber) {
                        alert('Congratulations, You did it!!!!')
                        for (let i = 0; i < players.length; i++) {
                            if (players[i].name === playerName) {
                                players[i].WinCasual += 1
                            };
                        };

                        winningGame = true;
                    } else if (selectedNumber < randomNumber) {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is lower, Please try again.`)

                    } else {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is greater, Please try again.`)
                    };

                } else {
                    alert('Error, enter a number between 1 and 10');
                };
            }
        } else if (gameDifficulty == '2') {
            const randomNumber = Math.floor(Math.random() * 30 + 1);
            alert('Hard mode activated, in this mode you will have to guess a number from 1 to 30 with infinite attempts');
            while (winningGame == false) {

                const input = prompt('Select a number between 1 and 30');


                if (input === null) {
                    alert('The game is over');
                    // finishGame = true;
                    break
                };

                const selectedNumber = parseInt(input);



                if (selectedNumber >= 1 && selectedNumber <= 30) {

                    if (selectedNumber == randomNumber) {
                        alert('Congratulations, You did it!!!!')
                        for (let i = 0; i < players.length; i++) {
                            if (players[i].name === playerName) {
                                players[i].WinHard += 1
                            };
                        };
                        winningGame = true;
                    } else if (selectedNumber < randomNumber) {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is lower, Please try again.`)

                    } else {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is greater, Please try again.`)
                    };

                } else {
                    alert('Error, enter a number between 1 and 30');
                };
            }
        } else if (gameDifficulty == '3') {

            const randomNumber = Math.floor(Math.random() * 20 + 1);
            alert('Hardcore mode activated, in this mode you will have to guess a number from 1 to 20, you will only have 5 lives, if you lose all, you lose the game, good luck');
            let playerLives = 5;
            while (winningGame == false || playerLives == 0) {



                const input = prompt('Select a number between 1 and 20');


                if (input === null) {
                    alert('The game is over');
                    // finishGame = true;
                    break
                };

                const selectedNumber = parseInt(input);


                if (selectedNumber >= 1 && selectedNumber <= 20) {

                    if (selectedNumber == randomNumber) {
                        alert('Congratulations, You did it, your are the Champion!!!!')
                        for (let i = 0; i < players.length; i++) {
                            if (players[i].name === playerName) {
                                players[i].WinHardcore += 1
                            };
                        };
                        winningGame = true;
                    } else if (selectedNumber < randomNumber) {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is lower, Please try again.`)
                        playerLives = playerLives - 1;

                    } else {
                        alert(`Oww, you almost guessed it, your selected number ${selectedNumber} is greater, Please try again.`)
                        playerLives = playerLives - 1;
                    };

                    if (playerLives == 0) {
                        alert('Game Over my friend');
                        break
                    };

                } else {
                    alert('Error, enter a number between 1 and 20');
                };

            }

        } else if (gameDifficulty == '4') {
            continue
        };




    } else if (menu == '2') {
        alert('The game consists of you having to choose a number between 1 and 10, and in that way try to guess the mysterious number, if you get it right, you win 1 point, which will be added to the total number of victories of the different users who have played, can you guess the winning game?');

    } else if (menu == '3') {
        alert('Created by JulianReaperValorantOmen');

    } else if (menu == '4') {
        let ranking = "=== Player Ranking ===\n";
        for (let i = 0; i < players.length; i++) {
            ranking += `${players[i].name} - Casual Wins: ${players[i].WinCasual}, Hard Wins: ${players[i].WinHard}, Hardcore Wins: ${players[i].WinHardcore}\n`;
        }


        alert(ranking);

    } else if (menu == '5') {
        alert('Thanks for Play');
        finishGame = true;

    } else {
        alert('Error, that option does not exist');
    }




};
