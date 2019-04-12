
//js 判断当前鼠标在哪个元素上
var el = window.document.body;//声明一个变量，默认值为body
window.document.body.onmouseover = function(event){
  el = event.target;//鼠标每经过一个元素，就把该元素赋值给变量el
  console.log('当前鼠标在', el, '元素上');//在控制台中打印该变量
}
//根据标签获取的结果是伪数组形式，伪数组是不具备数组的方法。要操作伪数组中的所有元素需要遍历伪数组。根据标签名获取元素时，有可能获取到的标签只有一个，但是形式还是伪数组。
//伪数组转换为数组var contents = document.getElementById('con').getElementsByTagName('span');contents = Array.prototype.slice.call(contents);

var picelements=document.getElementsByClassName("pic");
    picarr=Array.prototype.slice.call(picelements);
var cardelements=document.getElementsByClassName("card-info");
    cardarr=Array.prototype.slice.call(cardelements);
var authorelements=document.getElementsByClassName("author");
    pauthor=Array.prototype.slice.call(authorelements);
var playelements=document.getElementsByClassName("play");
    pplay=Array.prototype.slice.call(playelements);
var watchelements=document.getElementsByClassName("watch-later")
    watch=Array.prototype.slice.call(watchelements);
    console.log(picarr);
 console.log(cardarr);
 console.log(pauthor);

   for(var i=0;i<picarr.length;i++){
   if(el=picarr[i]){
            picarr[i].onmouseover=function(){
            cardarr[i].style.top="0";
            cardarr[i].style.height="100px";
            cardarr[i].style.background="rgba(0,0,0,0.6)";//设置背景透明文字不透明的方法。而opacity是都透明。
            watch[i].style.display="block";
            pauthor[i].style.opacity="1";
            pplay[i].style.opacity="1";//本来设置settimeout，setTimeout("pplay[0].style.opacity='1';",300);但出来的太僵硬。提前在CSS中设置transition（也可在js里设置），加上js的opacity实现淡入淡出效果。
            }
        picarr[i].onmouseout=function(){
            cardarr[i].style.top="68px";
            cardarr[i].style.height="20px";
            cardarr[i].style.background="linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))";
            watch[i].style.display="none";
            pauthor[i].style.opacity="0";
            pplay[i].style.opacity="0";
            }
        }
    }


   