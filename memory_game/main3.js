let input=document.querySelector(".input");
let adding=document.querySelector(".add");
let task1=document.querySelector(".task")

adding.onclick=function(){
   if (input.value !== ""){

let task=document.createElement("div");
task.style.cssText="padding:20px;margin:20px;font-size:30px; border:1px solid black;display:flex;justify-content: space-between;";
task1.appendChild(task);

let text=document.createTextNode(input.value);
task.appendChild(text);

let bot=document.createElement("button");
bot.value="delete"
task.appendChild(bot);
bot.onclick=function(){
    task.remove();
}
input.value="";
   }
   else{
       return "";
   }
};

