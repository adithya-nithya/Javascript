const inputbox=document.getElementById("input-box")
const taskcontainer=document.getElementById("task-container")
function addtask(){
    if(inputbox.value==''){
        alert("you must write something")
}
   else{
      let li=document.createElement("li");
      li.innerHTML=inputbox.value;
      taskcontainer.appendChild(li);

    
      //display cross icon"X"
      //create a span element for remove button

      let removebtn=document.createElement("span")
      removebtn.textContent= "\u00d7"   //"X" symbol
      removebtn.className="remove-btn"
      removebtn.onclick=function(){          //announimess function
            li.remove();
      };
      li.appendChild(removebtn);

      //checked class
      li.onclick=function(){
        li.classList.toggle("checked");
      };
      taskcontainer.appendChild(li)

      inputbox.value="";

}
inputbox.value="";

}

//display when enter key press

document.getElementById("input-box").onkeydown=function(e){
    if(e.key==="Enter"){
        addtask()
    }
}