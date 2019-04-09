const DATE = new Date();
const YEAR = DATE.getFullYear();
const MONTH = DATE.getMonth() + 1;
const DAY = DATE.getDate();
var monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
//某年某月1号是周几
function whatDay(year, month, day=1) {
    var sum = 0;
    sum += (year-1)*365+Math.floor((year-1)/4)-Math.floor((year-1)/100)+Math.floor((year-1)/400)+day;
    for(var i=0; i<month-1; i++){
        sum += monthDay[i];//sum+=j和sum=sum+j结果一样。
    }
    return sum%7; //余数为0代表那天是周日，为1代表是周一，以此类推
}
//当前显示月份添加至顶部
var curdate= YEAR +"年"+ MONTH +"月";
var curDateElement = document.getElementById("curDate");//这样起名容易辨别。
curDateElement.innerHTML = curdate;//向对象插入内容

//显示日历
function showCld(year,month,firstDay){
    var i;
    var tagClass = "";
    var nowDate = new Date();
    var days= monthDay[month-1];//从数组中抽取每月天数
    var tbodyHtml = '<tr>'; 
    for(i=0;i<firstDay;i++){//对1号前空白格的填充
        tbodyHtml +="<td></td>";
    }
    var changeLine = firstDay;
    for(i=1;i<=days;i++){//每个日期的填充
        if(year==YEAR&&month==MONTH&&i==DATE){
            tagClass="curDate";//当前日期对应格子
        }
        else{
            tagClass="isDate";//普通日期对应格子，设置class便于与空白格子区分开来
        }
        tbodyHtml +="<td class=" + tagClass + ">" + i + "</td>";
        changeLine = (changeLine+1)%7;
        if(changeLine ==0&&i !=days){//是否换行填充的判断
            tbodyHtml +="</tr><tr>";
        }
    }
    if(changeLine!=0){//添加结束，对该行剩余位置的空白填充
        for (i=changeLine;i<7;i++){
            tbodyHtml +="<td></td>"
        }
    }
    tbodyHtml +="</tr>";
    var tbodyElement = document.getElementById('tbody');
    tbodyElement.innerHTML = tbodyHtml;//调用
}
var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth() + 1;
    showCld(curYear,curMonth,whatDay(curYear,curMonth));

function nextMonth(){
    var topStr = document.getElementById("curDate").innerHTML;
    var pattern = /\d+/g;//正则    /表达式内容/参数     \D:类似[^0-9] 非数字   /g：全局
    var listTemp = topStr.match(pattern);//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    var year = Number(listTemp[0]);//Number() 函数把对象的值转换为数字。
    var month = Number(listTemp[1]);
    var nextMonth = month+1;
    if(nextMonth > 12){
        return false;
    }
    document.getElementById('curDate').innerHTML = YEAR +"年"+ nextMonth +"月";
    showCld(year, nextMonth, whatDay(year, nextMonth));
}//第一次点的下个月是针对当时的curDate来的，第二次再点时提取的curDate已经变成第一次点的日期了。
    function preMonth(){
        var topStr = document.getElementById("curDate").innerHTML;
        var pattern = /\d+/g;
        var listTemp = topStr.match(pattern);
        var year = Number(listTemp[0]);
        var month = Number(listTemp[1]);
        var preMonth = month-1;
        if(preMonth<1){
            return false;
        }
        document.getElementById('curDate').innerHTML = YEAR +"年"+ preMonth +"月";
        showCld(year, preMonth, whatDay(year, preMonth));
    }
document.getElementById('right').onclick = function(){
    nextMonth();
}
document.getElementById('left').onclick = function(){
    preMonth();
}


























