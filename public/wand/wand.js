const bodyEL=document.querySelector("body")

bodyEL.addEventListener("mousemove",(event) => {
   const xPost = event.offsetX
   const ypost = event.offsetY
   const spanEL = document.createElement("span")
   spanEL.style.left = xPost + "px";
   spanEL.style.top = ypost + "px";
   const size = Math.random() *100;
   spanEL.style.width = size + "px";
   spanEL.style.height = size + "px";

   bodyEL.appendChild(spanEL);
   setTimeout(()=>{
    spanEL.remove();
   }, 3000)
})