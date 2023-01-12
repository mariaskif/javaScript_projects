//get sliders
var sliders=Array.from(document.querySelectorAll(".slider_container img"));
console.log(sliders);
//get number of slides
var numberSlider=sliders.length;
//set cuurent value
var currentSlide=1;
//slide number element
var slideNumber=document.getElementById('slide_number');
//prev and next slide
var nextbutton=document.getElementById('next');
var prevbutton=document.getElementById('prev');
//click on prev and next button

nextbutton.onclick=getnextslid;
prevbutton.onclick=getprevslid;
var ulelement=document.createElement('ul');
ulelement.setAttribute('id','ul_element')

for(let i=1 ;i<=numberSlider;i++)
{
    var lielement=document.createElement('li');

    lielement.setAttribute('data_index',i);
    lielement.appendChild(document.createTextNode(i));
    ulelement.appendChild(lielement);
}
document.getElementById('direct').appendChild(ulelement);

var paginationul=document.getElementById('ul_element');
var bulletsli=Array.from(document.querySelectorAll('#ul_element li'));
for(var i=0;i<bulletsli.length;i++){
    bulletsli[i].onclick=function(){
currentSlide=parseInt( this.getAttribute('data_index'))
checkslide();
    }
    
}


checkslide();

function checkslide(){
    slideNumber.textContent='slide # '+(currentSlide)+' of '+(numberSlider);
    removeclassactive();
    sliders[currentSlide-1].classList.add('active');
    paginationul.children[currentSlide-1].classList.add('active');
    if(currentSlide==1){
        prevbutton.classList.add('disabled');
    }else{
        prevbutton.classList.remove('disabled');
    }
    if(currentSlide == numberSlider){
        nextbutton.classList.add('disabled');
    }else{
        nextbutton.classList.remove('disabled');
    }
    
}
function removeclassactive(){
    sliders.forEach(function(img){
        img.classList.remove('active');
    });
    bulletsli.forEach(function(lis){
lis.classList.remove('active');
    });

}
function getnextslid(){
 if(nextbutton.classList.contains('disabled')){
return ;


 }else{
    currentSlide++;
    checkslide();
 }
}
function getprevslid(){
    if(prevbutton.classList.contains('disabled')){
        return ;
        
        
         }else{
            currentSlide--;
            checkslide();
         }
}