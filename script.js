let cells = document.querySelectorAll(".cell"); //Creating a variable for all the cells
let playerOne = true; //Creating a variable for comparing who is the player at the moment
const checkLine = (c1, c2, c3) => {
  //Creating an arrow function to check if someone has won
  if (
    cells[c1].innerHTML.length&&
    cells[c1].innerHTML === cells[c2].innerHTML &&
    cells[c2].innerHTML === cells[c3].innerHTML
  ) {
    //All this fragment is comparing each of the cells to see if the innerhtml is equal with "X" or "O"
    setTimeout(() => {
      alert("Winner");
      cells.forEach((cell) => {
        cell.innerHTML = "";
      });
    }, 200); //All this fragment is for alerting the win of a player and for setting a timeout to reset the game
  }
};

const move = (e) => { //Creating a function for the movement of the players
  let cellValue = e.target.innerHTML; //Creating a variable for the innerhtml of the cell
  if (cellValue === "") { //Creating a condition for the movement of the players
    e.target.innerHTML = playerOne ? "X" : "O"; //Adding the "X" or "O" to the innerhtml of the cell. if the condition of player one is true then it will add "X" if not it will add "O"
    playerOne = !playerOne; //Changing the player

    //Adding all the possibilities of winning
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(6, 4, 2);
  }
};

//This listener is for the click of the player
cells.forEach((cell) => {
  cell.addEventListener("click", move);
});




