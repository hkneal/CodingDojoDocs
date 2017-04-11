function quizGame(){
  var userName;
  userName = window.prompt("Please Enter Your Name:");
  if(userName === null){
    return;
  }
  console.log(userName);
}

quizGame();
