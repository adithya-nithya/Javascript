let display=document.getElementById("dispaly")
calculationcomplete=false

function btnclick(value){
    let display=document.getElementById("display")
   if(calculationcomplete && !isNaN(value)){
    display.value=value;
    calculationcomplete=false;
   }
   else{
    display.value+=value
   }
}

function clearitems(){
    let display=document.getElementById("display")
    display.value="";

}
function findresult(){
    let display=document.getElementById("display")
    try{
        display.value=eval(display.value);
        calculationcomplete=true
    }
    catch(e){
        display.value=error;
    }
}