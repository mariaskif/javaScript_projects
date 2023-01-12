let input=document.querySelector('.input');
let inputAdd=document.querySelector('.add');
let inputTaskes=document.querySelector('.taskes');
let taskArray=[];
if(localStorage.getItem("tasks")){
    taskArray=JSON.parse(localStorage.getItem("tasks"));
}
getfromlocal();
inputAdd.onclick=function(){
    if (input.value !=""){
        ADDtaskfun(input.value);
        input.value="";
    };
};
inputTaskes.addEventListener("click",(e)=>{
if(e.target.classList.contains("del")){
    e.target.parentElement.remove();
    deletefromlocal(e.target.parentElement.getAttribute("data-id"));
}

});

function ADDtaskfun(taskval){
    const task={
    id:Date.now(),
   Text:taskval,
   completed:false
}
taskArray.push(task);
AddElementtopage(taskArray);
addtolocal(taskArray);
}
function AddElementtopage(taskArray){
    inputTaskes.innerHTML="";
    taskArray.forEach((task) => {
        let div=document.createElement("div");
        div.className="task";
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.Text));  
        let span=document.createElement("span");
        span.className="del";
span.appendChild(document.createTextNode("Delete"));
div.appendChild(span);
inputTaskes.appendChild(div);

    });
}
function addtolocal(taskArray){
window.localStorage.setItem("tasks", JSON.stringify(taskArray))
}
function getfromlocal(){
    let data=window.localStorage.getItem("tasks")
    if(data){
        let tasks=JSON.parse(data);
        AddElementtopage(tasks);
    }
}
function deletefromlocal(idtask){
    taskArray=taskArray.filter((task)=> task.id != idtask )
    addtolocal();
}