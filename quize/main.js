let countspan=document.querySelector('.count span');
let spanContainer=document.querySelector('.bullets .spans');
let Qarea=document.querySelector('.quiz-area');
let answerArea=document.querySelector('.answers-area');
let submiteButton=document.querySelector('.submit');
let resultsContainer=document.querySelector('.results');
let bulletses=document.querySelector('.bullets');
let countdowencont=document.querySelector('.count-dowen')
let objIndex=0;
let rightAnswers=0;
let countdowen;
function getQustion(){
    let myrequest= new XMLHttpRequest();
    myrequest.onreadystatechange=function(){
        if(this.readyState ==4 && this.status ==200){ 
            let objectreq=JSON.parse(this.responseText);
            let objectLength=objectreq.length
            creatBullets(objectLength);
            AddQustion(objectreq[objIndex],objectLength);
            countdownfun(5,objectLength);
            submiteButton.onclick = ()=>{
              let rightAnswer=objectreq[objIndex].right_answer;
              objIndex++;
              checkAnswer(rightAnswer,objectLength);
              Qarea.innerHTML="";
              answerArea.innerHTML="";
              AddQustion(objectreq[objIndex],objectLength);
              handlebullt();
              clearInterval(countdowen);
              countdownfun(5,objectLength);

              showresult(objectLength);
            };
        }
        
    };
    myrequest.open("GET","html_qustions.json",true);
    myrequest.send();
}
getQustion();
function creatBullets(num){
countspan.innerHTML=num;
for(let i=0;i<num;i++){
    let bullets=document.createElement("span");

    if(i===0){
        bullets.className='on';
    }
    spanContainer.appendChild(bullets);
}}
function AddQustion(obj,count){
    if(objIndex<count){
 let h2ele=document.createElement('h2');
 let h2Text=document.createTextNode(obj.title);
 h2ele.appendChild(h2Text);
 Qarea.appendChild(h2ele);
 for(let i=1 ;i<=4 ;i++){
    let divMain=document.createElement("div");
    divMain.className='answer';
    let inputRdio=document.createElement("input");
inputRdio.name='quastion';
inputRdio.type='radio';
inputRdio.id=`answer_${i}`;
inputRdio.dataset.answer=obj[`answer_${i}`];
let lable=document.createElement("lable");
lable.htmlFor=`answer_${i}`;
let labletext=document.createTextNode(obj[`answer_${i}`]);
if(i===1){
    inputRdio.checked=true;
}
lable.appendChild(labletext);
divMain.append(inputRdio);
divMain.appendChild(lable);
answerArea.appendChild(divMain);
}

 }}
 function  checkAnswer(rAnswer,count){
   let answers=document.getElementsByName("quastion");
   let chosen;
   for(let i=0; i<answers.length; i++){
    if(answers[i].checked){
        chosen=answers[i].dataset.answer;
    }
   }
  if(rAnswer === chosen){
    rightAnswers++;
  }
 }
function handlebullt(){
    let bulletspan=document.querySelectorAll('.bullets .spans span');
    let arraybulle=Array.from(bulletspan);
    arraybulle.forEach((span,index)=>{
        if(objIndex===index){
            span.className='on';
        }
    })
}
function showresult(count){
    let theresult;
if(objIndex===count){
    Qarea.remove();
    answerArea.remove();
    bulletses.remove();
    submiteButton.remove();
if (rightAnswers > (count / 2 ) && rightAnswers < count){
    theresult=`<span class="good">Good</span>,${rightAnswers}from${count} is good`;
}else if(rightAnswers===count){
    theresult=`<span class="perfect">Perfect</span>,${rightAnswers}from${count} is perfect`;
}else{
    theresult=`<span class="bad">bad</span>,${rightAnswers}from${count} is bad`;
}
resultsContainer.innerHTML=theresult;

}

    } 
    function countdownfun(duration,count){
if(objIndex<count){
    let minutes,seconds;
    countdowen=setInterval(function(){
        minutes=parseInt(duration /60);
        seconds=parseInt(duration %60);
        minutes= minutes<10?`0${minutes}`:minutes;
        seconds= seconds<10?`0${seconds}`:seconds;
        countdowencont.innerHTML=`${minutes}:${seconds}`;
        if(--duration<0){
            clearInterval(countdowen);
    submiteButton.click();

        }
    },1000);
};
    };