var h1=document.getElementsByTagName("button")[0];
console.log(h1);
h1.addEventListener("click",function(){
    let temp=document.getElementById("enlarge"),ans;
    if(temp.value.length===0){
        temp.style.transform="rotate(360deg)";
        temp.style.transition="all 2s";
    }
    else{
        ans=document.createElement("li");
        ans.appendChild(document.createTextNode(temp.value));
        document.getElementsByTagName("ul")[0].appendChild(ans);
        temp.value="";
    }
});
var ul=document.getElementsByTagName("ul")[0];
console.log(ul)
for(var i=0;i<ul;i++){
    ul[i].addEventListener("click",function(){
        ul[i].remove();
    });
}