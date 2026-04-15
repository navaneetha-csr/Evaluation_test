// your code goes here

  const players=[
   {id:1,name:'Virat Kohli',runs:75,balls:50},
   {id:2,name:'Dhoni',runs:60,balls:40},
   {id:3,name:'Rohit Sharma',runs:30,balls:20},
]


const calculate=(runs,balls)=>{
return ((runs/balls)*100).toFixed(2);
};
console.log("cricket players stats")
players.forEach(player=>{
    const strikerate = calculate(player.runs,player.balls);

    console.log(player.name);
    console.log(player.runs);
    console.log(player.balls);
    console.log(strikerate);
});