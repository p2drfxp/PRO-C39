class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref("gameState");
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

 start(){
    
      contestant = new Contestant();
      contestantCount = contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
   fill(0);
   textSize(30);
   text("Resultado do Quiz",340,50);
Contestant.getPlayerInfo();
if(allContestants !== undefined){
  debugger;
  var display_Answers = 230;
 
for(var plr in allContestants){
  debugger;
  var correctAns = "2"
  if (correctAns === allContestants[plr].answer)
    fill("Green")
  else
    fill("red")

  display_Answer+=30;
  textSize(20);
  text(allContestants[plr].name + ": " + allContestants[plr].answer,250,display_Answers)  
}
}
       
  }
}