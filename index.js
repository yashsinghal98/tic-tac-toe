let turn=1;
let name1="",name2="";
let gameover=false;
let board=[["","",""],["","",""],["","",""]];
const calcWinner=()=>
{
  if (turn < 4) {
    return false;
  }
  const winnerCombinations = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
  ];
  for (let i = 0; i < winnerCombinations.length; i++) {
    let [val1, val2, val3] = winnerCombinations[i];
      if (
      board[val1[0]][val1[1]] !== "" &&
      board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
      board[val1[0]][val1[1]] === board[val3[0]][val3[1]]
    ) {
      document.getElementById(`${val1}`).classList.add("gren");
      document.getElementById(`${val2}`).classList.add("gren");
      document.getElementById(`${val3}`).classList.add("gren");
      let nam=turn%2===0?name1:name2;
      nam=nam.toUpperCase();
      console.log(nam);
      document.getElementById("result").innerHTML=`${nam} WIN!!!!!`;
      return true;
    }
  }

  return false;
}
const rem=()=>
{
  if(gameover===true)
  return;
  name1=document.getElementById("player1").value;
  name2=document.getElementById("player2").value;
  if(name1===""||name2==="")
  {
    alert("Type Name of Both Players");
    return ;
  }
  else if(name1===name2)
  {
    alert("Players name cannot be same");
    return;
  }
  else
  {
    document.getElementById("pl1").innerHTML=`Player 1:${name1}`;
    document.getElementById("pl2").innerHTML=`Player 2:${name2}`;
  }
let ele=document.getElementById("game-container");
ele.classList.remove("hide");
document.getElementById("turn").innerHTML=`${name1}'s turn`;
};
const clicked=(el)=>
{
  if(el.innerHTML!==""||gameover)
  return;
  let id=el.id;
  
  let a=parseInt(id[0]);
  let b=parseInt(id[1]);
  board[a][b]=turn%2===0?"X":"0";
  el.innerHTML=board[a][b];
  turn++;
  gameover=calcWinner();
  if(gameover===true)return;
  if(turn===10)
  {
    for(let i=0;i<3;i++)
    {
      for(let j=0;j<3;j++)
      {
        document.getElementById(i.toString()+j).classList.add("yell");
      }
    }
     document.getElementById("draw").innerHTML=`IT'S A DRAW!!!!!`;
  }
  if(turn%2===0)
  document.getElementById("turn").innerHTML=`${name2}'s turn`;
  else 
  document.getElementById("turn").innerHTML=`${name1}'s turn`;
};