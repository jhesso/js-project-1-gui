console.log('Let\'s play a game >:)');
game();

function cpuPlay(){
	let ranNumber = Math.random() * 300;
	let cpuSelection = '';
	//console.log(ranNumber);
	if (ranNumber < 100){
		cpuSelection = 'rock';
	}
	else if (ranNumber >= 100 && ranNumber < 200){
		cpuSelection = 'paper';
	}
	else{
		cpuSelection = 'scissors';
	}
	return (cpuSelection);
}

function playRound(playerSelection, computerSelection) {
	let result = '';
	if (playerSelection == 'rock' && computerSelection == 'paper'){
		result = 'cpu';
	}
	else if (playerSelection == 'paper' && computerSelection == 'scissors'){
		result = 'cpu';
	}
	else if (playerSelection == 'scissors' && computerSelection == 'rock'){
		result = 'cpu';
	}
	else if (playerSelection == computerSelection){
		result = 'tie';
	}
	else{
		result = 'player';
	}

	return (result);
}

function game() {
	let cpuScore = 0;
	let playerScore = 0;
	let winner = '';
	for (let i = 0; i < 5; i++){
		let computerSelection = cpuPlay();
		//console.log(computerSelection); //uncomment for cheats ;)
		let playerSelection = prompt("Rock, Paper or Scissors?");
		// just some error checking here :)
		if(playerSelection == null || playerSelection == ''){
			console.log("https://media.giphy.com/media/1oJLpejP9jEvWQlZj4/giphy.gif");
			i--;
			playerSelection = prompt("Rock, Paper or Scissors?");
		}
		else if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
			console.log("Bruh... check your spelling :)");
			i--;
			playerSelection = prompt("Rock, Paper or Scissors?");
		}
		else{
			playerSelection = playerSelection.toLowerCase();
			winner = playRound(playerSelection, computerSelection);
			if (winner == 'player'){
				console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
				playerScore++;
			}
			else if(winner == 'cpu'){
				console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
				cpuScore++;
			}
			else{
				console.log("It's a tie!");
			}
		}
	}
	console.log(`score(player - cpu): ${playerScore} - ${cpuScore}`);
	if (playerScore > cpuScore){
		console.log("You are the winner, Congratulations!");
	}
	else if (cpuScore > playerScore){
		console.log("You are the loser, better luck next time!");
	}
	else{
		console.log("It's a tie! You were both equally bad");
	}
}