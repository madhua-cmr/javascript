const myarr=[];


const view=()=>{
  let htmlcode=``
  document.querySelector("ul").innerHTML="";

for(let i=0;i<=myarr.length-1;i++){
  const{name,date}=myarr[i];
  const code=`<li>Name : ${name} 
  Date : ${date}<button onclick="
  handledelete(${i})">Delete </button></li>`
  htmlcode+=code;
  document.querySelector("ul").innerHTML=htmlcode;
  }
}
const addtask=()=>{

myarr.push({name:document.querySelector(".name").value,date:document.querySelector('.date').value});
view();
console.log(myarr)
}
function handledelete(i){

myarr.splice(i,1);
console.log(myarr);
view();
}