 
 let playGame=confirm('Do you want to play a game?');
 if (playGame){
   const basicWinningRange=8;
   const basicWinFirstAttempt=100;
   const basicWinSecondAttempt=50;
   const basicWinThirdAttempt=25;
   const extraDifficultByWinningRounds=4
   const winningMultiplierByWonRounds=2;
   const StandardNumberOfAttempts=3;
   const firstAttempt=1;      
   const secontAttempt=2;
   const thirdAttempt=3;
   let wonRounds=0;
   let possibleWinAttempt;
   let userNumber;
   let attemptsLeft=StandardNumberOfAttempts;
   let totalPrize=0;
   let maxRange=basicWinningRange;
   let winningNumber=Math.floor(Math.random() * maxRange);
  for(let attemptNumber=1;attemptNumber<=StandardNumberOfAttempts;attemptNumber++){
    switch(attemptNumber){
      case firstAttempt:
        possibleWinAttempt=basicWinFirstAttempt* Math.pow(winningMultiplierByWonRounds,wonRounds);
        break;
      case secontAttempt:
        possibleWinAttempt=basicWinSecondAttempt*Math.pow(winningMultiplierByWonRounds,wonRounds);
        break;
      case thirdAttempt:
        possibleWinAttempt= basicWinThirdAttempt*Math.pow(winningMultiplierByWonRounds,wonRounds);
        break;
       default:0;
    }
  userNumber=prompt(`Choose a roulette pocket number from 0 to ${maxRange}
  Attempts left: ${attemptsLeft}
  Total prize:  ${totalPrize}$
  Possible prize in current attempt: ${possibleWinAttempt}$ `)
  attemptsLeft--
  if (parseInt(userNumber,10)===winningNumber){
    totalPrize+=possibleWinAttempt;
    let wantsToContinue=confirm(`Congratulation, you won!   Your prize is: ${totalPrize} $. Do you want to continue?`)
    if(wantsToContinue){
      attemptsLeft=StandardNumberOfAttempts;
      attemptNumber=0;
      wonRounds++;
      maxRange=basicWinningRange+ extraDifficultByWinningRounds*wonRounds ;
      winningNumber=Math.floor(Math.random() * maxRange);
    }else{
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      let playAgain=confirm('Do you want to play again?')
      if (playAgain){
        attemptsLeft=StandardNumberOfAttempts;
        attemptNumber=0;
        wonRounds=0;
        maxRange=basicWinningRange ;
        totalPrize=0;
        winningNumber=Math.floor(Math.random() * maxRange);
      } else{
        break;
      }
    }
  } 
  if (attemptsLeft===0){
    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
    let playAgain=confirm('Do you want to play again?')
      if (playAgain){
        attemptsLeft=StandardNumberOfAttempts;
        attemptNumber=0;
        wonRounds=0;
        maxRange=basicWinningRange ;
        totalPrize=0;
        winningNumber=Math.floor(Math.random() * maxRange);
      }else{
    break;
  }
}
}
 }else{
   alert('You did not become a billionaire, but can');
 }