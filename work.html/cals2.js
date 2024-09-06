let calculationcomplete=false;

function btnclick(value){
    const screen=document.getElementById("screen")
    if(calculationcomplete && !isNaN(value)){ //isNaN means is not a number then here use ! operator is used here it means it is a num
        screen.value=value;
        calculationcomplete=false;
    }
    else{
        screen.value+=value;
    }
}
function clearscreen(){
    document.getElementById("screen").value="";
    calculationcomplete=false;
}
function findresult(){
   const screen= document.getElementById("screen");
    try{ // it used for the condition is true
    screen.value=eval(screen.value);//eval using for mathemathical calculation
    calculationcomplete=true;
}
   catch (e){
     screen.value="error"//condition is wrong
}
}