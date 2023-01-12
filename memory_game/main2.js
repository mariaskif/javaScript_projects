let uli=document.querySelectorAll("ul li");
let dive=document.querySelector(".expermint");
if (window.localStorage.getItem("color")){
    dive.style.backgroundColor=window.localStorage.getItem("color");
    uli.forEach((li)=>{
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
};
uli.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        uli.forEach((li)=>{
            li.classList.remove("active");
    
        })
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
dive.style.backgroundColor=e.currentTarget.dataset.color;
    });

});


