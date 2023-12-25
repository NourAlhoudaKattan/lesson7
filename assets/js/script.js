let product=[{category:"bag1",imges:["./assets/img/1.jpg","./assets/img/1-1.jpg","./assets/img/1-2.jpg","./assets/img/1-3.jpg"]},
             {category:"bag2",imges:["./assets/img/2.jpg","./assets/img/2-1.jpg","./assets/img/2-2.jpg","./assets/img/2-3.jpg"]},
             {category:"bag3",imges:["./assets/img/3.jpg","./assets/img/3-1.jpg","./assets/img/3-2.jpg","./assets/img/3-3.jpg"]},
             {category:"bag4",imges:["./assets/img/4.jpg","./assets/img/4-1.jpg","./assets/img/4-2.jpg","./assets/img/4-3.jpg"]},
             {category:"bag5",imges:["./assets/img/5.jpg","./assets/img/5-1.jpg","./assets/img/5-2.jpg","./assets/img/5-3.jpg"]},
             {category:"bag6",imges:["./assets/img/6.jpg","./assets/img/6-1.jpg","./assets/img/6-2.jpg","./assets/img/6-3.jpg"]}]

const continer=document.querySelector(".continer")
const clos=document.querySelector(".clos")
const popup=document.querySelector(".popup")
const slider=document.querySelector(".slider")
const sliderImage=document.querySelector(".slider img")
const prev=document.querySelector("#prev")
const next=document.querySelector("#next")
const total=document.querySelector(".total")
const num=document.querySelector(".num")
let selectproduct;
let count=0;

 product.forEach(element => {
   continer.innerHTML+=`<img src="${element.imges[0]}" id="${element.category}">`
   });
   const imges=document.querySelectorAll(".continer img")
  imges.forEach(e=>{
    e.addEventListener(("click"),()=>{
      popup.style.display="block"
      num.innerHTML=1;
      prev.style.display="block"
      next.style.display="block"
   let category=e.id;
     selectproduct=product.find((element=>{return element.category==category}))
    sliderImage.src=selectproduct.imges[0];
    total.innerHTML=selectproduct.imges.length;
    })
   
  }) 
 next.addEventListener(("click"),()=>{
  console.log("next")
    if (count<selectproduct.imges.length-1){
       prev.style.display="inline"
       count++;
       console.log(count)
        num.innerHTML=count+1;
        sliderImage.src=selectproduct.imges[count];
      if (count==selectproduct.imges.length-1){next.style.display="none"}
  }})
  prev.addEventListener(("click"),()=>{
      if (count>0){
        num.innerHTML=count;
        count--;
         next.style.display="inline"
        sliderImage.src=selectproduct.imges[count];
        if(count==0)
       { prev.style.display="none"}
  
    }}
    
)
  clos.addEventListener(("click"),()=>{
    popup.style.display="none"
  }) 