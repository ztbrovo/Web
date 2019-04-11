function information(ids){
var infoElements=document.getElementsByClassName("card-info");
for(i=0;i<infoElements.length;i++){
    if(infoElements[i].id=ids){
        infoElements[i].style.display="none";
    }
}
}
