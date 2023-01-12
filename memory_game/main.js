//body section
document.body.style.margin=0 ;
document.body.style.backgroundColor="rgb(236,236,236)";

//header section
let header1=document.createElement("header");
header1.classList.add("website-head");
header1.style.cssText="display:flex;padding:20px;background-color:rgb(255,255,255);justify-content:space-between;align-items:center";
document.body.appendChild(header1);

let divlog=document.createElement("div");
divlog.classList.add("logo");
divlog.title="website"
divlog.style.cssText="font-weight:bold;color:rgb(35,169,110);font-size:26px";
header1.appendChild(divlog);

 let texthed=document.createTextNode("Elzero");
divlog.appendChild(texthed);

let list=document.createElement("ul");
list.classList.add("menue");
list.style.cssText="padding:0px;margin:0px;display:flex;list-style:none";
 header1.appendChild(list);

 let i1=document.createElement("li");
 i1.style.marginRight="10px";
 list.appendChild(i1);
  let textli1=document.createTextNode("Home");
i1.appendChild(textli1);

   let i2=document.createElement("li");
   i2.style.marginRight="10px";
   list.appendChild(i2);
    let textli2=document.createTextNode("Services");
     i2.appendChild(textli2);

     let i3=document.createElement("li");
     i3.style.marginRight="10px";
     list.appendChild(i3);
      let textli3=document.createTextNode("About");
       i3.appendChild(textli3);

   let i4=document.createElement("li");
       i3.style.marginRight="10px";
       list.appendChild(i4);
        let textli4=document.createTextNode("Contact");
         i4.appendChild(textli4);

//content section
 
let divcontent=document.createElement("div");
divcontent.classList.add("content");
divcontent.style.cssText="display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box";
document.body.appendChild(divcontent);
 
for(i=0;i<15;i++){


let dproduct=document.createElement("div"[i]);
dproduct.classList.add("product");
dproduct.style.cssText="padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc:((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px";
divcontent.appendChild(dproduct);

let span=document.createElement("span");
span.style.cssText="font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px"
dproduct.appendChild(span);

let num1=document.createTextNode(i+1);
span.appendChild(num1);
 
let textpro=document.createTextNode("product");
dproduct.appendChild(textpro);

}

//footer section
let fot=document.createElement("footer");
fot.classList.add("footer");
fot.style.cssText="background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255)";
document.body.appendChild(fot);

let textfot=document.createTextNode("copyright 2021");
fot.appendChild(textfot);