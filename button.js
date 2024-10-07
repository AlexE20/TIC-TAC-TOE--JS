const restartButton=document.querySelector('#restart') //Creating a variable for the restart button

const restart = () => { //Creating a function for the restart button
  cells.forEach((cell) => { //Creating a loop for each cell
    cell.innerHTML = ""; //This fragment is for reseting the game
  });
  }

restartButton.addEventListener('click',restart) //Adding an event listener to the restart button