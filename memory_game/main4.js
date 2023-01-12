document.querySelector(".controle_button span").onclick=function(){
    let yourName=prompt("whats your name?");
    if (yourName== null ||yourName==""){
        document.querySelector(".name span").innerHTML="unknown";
    }else{
        document.querySelector(".name span").innerHTML=yourName;
    }
    document.querySelector(".controle_button ").remove();
    
};
let duration=1000;
let memoryblocks=document.querySelector(".memory_game_blocks");
let blocks = Array.from(memoryblocks.children);
// let oderrange=[...Array(blocks.length).keys()];
let oderrange =Array.from(Array(blocks.length).keys());
shuffel(oderrange);


blocks.forEach((block,index) =>{

    block.style.order=oderrange[index];
    block.addEventListener('click',function(){
        isflibed(block);
    })
});

function shuffel(array){
    let current=array.length,
    temp,
    random;
    while(current>0){
        random =Math.floor(Math.random() * current);
        current--;
        temp=array[current];
        array[current]=array[random];
        array[random]=temp;
        
    }
    return array;
};

function isflibed(theblock){
theblock.classList.add('isflibed');
let isflepedblocks=blocks.filter(flbl => flbl.classList.contains('isflibed'));
if(isflepedblocks.length=== 2){
      
    stopclick();
    matched(isflepedblocks[0],isflepedblocks[1]);

}

}
function stopclick(){
    memoryblocks.classList.add('stop-click');
    setTimeout(()=>{
memoryblocks.classList.remove('stop-click')
    },duration);

}
function matched(firstblock,secblock) {
    let tries=document.querySelector(".tries span");

    if(firstblock.dataset.tec===secblock.dataset.tec){
        firstblock.classList.remove('isflibed');
       secblock.classList.remove('isflibed');

       firstblock.classList.add('has_match');
      secblock.classList.add('has_match');
    }
    else{
        tries.innerHTML=parseInt(tries.innerHTML)+1;
        setTimeout(()=>{
            firstblock.classList.remove('isflibed');
            secblock.classList.remove('isflibed');
        },duration);
    }
}