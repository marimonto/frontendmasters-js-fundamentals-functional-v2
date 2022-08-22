const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

//Excercise part 1

function foo(){
    for(let i=0; i< game.suspects.length; i++){
        console.log(game.suspects[i])
    }
}

//Excercise part 2

const gameLoop = () =>{
    for(let i=0; i< game.suspects.length; i++){
        console.log('outer loop');
        for(var key in game.suspects[i]){
            console.log(key)
            if(game.suspects[i][key]==="Rusty"){
                console.log('Found \'em !')
            }else{
                console.log('next time!')
            }
        }
    }
}

//Excercise part 3

const [firstColor, secondColor] = [game.suspects[0].color, game.suspects[1].color];

const [{color: firstColor1}, {color:secondColor2}] = game.suspects;

 

foo()
gameLoop();
console.log(firstColor, secondColor, firstColor1, secondColor2)