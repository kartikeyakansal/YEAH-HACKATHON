document.getElementById("Stone").addEventListener("click", function(){
    
    document.getElementById("player-image").src = "stone.jpg"
    var i=0;
    i= (Math.floor(Math.random()*10000)%3)
    if(i===0){
        var cpu = "stone2.jpg"
        var res ="TIE"   
    }
    if(i===1){
        var cpu = "paper2.jpg"
        var res ="YOU LOSE"
    }
    if(i===2){
        var cpu = "scissors2.jpg"
        var res="YOU WIN"
    }
    document.getElementById("cpu-image").src = cpu
    document.getElementById("result").innerHTML= (res)    
});

document.getElementById("Paper").addEventListener("click", function(){
    
    document.getElementById("player-image").src = "paper.jpg"
    var i=0;
    i= (Math.floor(Math.random()*10000)%3)
    if(i===0){
        var cpu = "stone2.jpg"
        var res="YOU WIN"
    }
    if(i===1){
        var cpu = "paper2.jpg"
        var res ="TIE"
    }
    if(i===2){
        var cpu = "scissors2.jpg"
        var res ="YOU LOSE"
    }
    document.getElementById("cpu-image").src = cpu
    document.getElementById("result").innerHTML= (res)    
});

document.getElementById("Scissors").addEventListener("click", function(){
    
    document.getElementById("player-image").src = "scissors.jpg"
    var i=0;
    i= (Math.floor(Math.random()*10000)%3)
    if(i===0){
        var cpu = "stone2.jpg"
        var res ="YOU LOSE"
    }
    if(i===1){
        var cpu = "paper2.jpg"
        var res="YOU WIN"
    }
    if(i===2){
        var cpu = "scissors2.jpg"
        var res ="TIE"
    }
    document.getElementById("cpu-image").src = cpu
    document.getElementById("result").innerHTML= (res)    
});






