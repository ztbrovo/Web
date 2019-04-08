const DATE = new Date();
const YEAR = DATE.getFullYear();
const MONTH = DATE.getMonth() + 1;
const DAY = DATE.getDate();
//获取某年某月有多少天
function getMonthDays(year, month){
    return new Date(year, month, 0).getDate();
}
function getWeekday(year, month, day){
    return new Date(year, month-1, day).getDay();
}
//获取月份有几个星期
function getweeksInMonth(year,month){
    var days=getmonthDays(year,month);
    var FirstDayWeekday=getWeekday(year,month,1);
    return Math.ceil((days+FirstDayWeekday)%7);
}
//当前显示月份添加至顶部
var curdate= YEAR +"年"+ MONTH +"月";
var curDate = document.getElementById("curDate");
curDate.innerHTML = curdate;//向对象插入内容
//循环生成月份对象
//获取某年某月的具体天数的排列顺序
var dayArrays=new Array();
var weekName=getElementById("week");
var days = function getMonthDays(year, month){
    return new Date(year, month, 0).getDate();
};
var preDays = function getMonthDays(year, month){
    return new Date(year, month-1, 0).getDate();
};
var thisMonthFirstDayInWeek = function getWeekday(year, month, day=1){
    return new Date(year, month-1, day).getDay();
};
var thisMonthLastDayInWeek = function getWeekday(year, month, day){
    return new Date(year, month-1, day).getDay();
};
function  getMonthDaysArray(year, month, day) {//上月在当月日历面板中的排列
for (var i = 0; i < thisMonthFirstDayInWeek; i++) {
    dayArrays.push({
        dayNum: (preDays - thisMonthFirstDayInWeek + i + 1),
        weekDay: weekName[i],
    })
};
//当月日历面板中的排列
for (var i = 1; i <= days; i++) {
    var weekDayFlag = (thisMonthFirstDayInWeek + i - 1) % 7
    dayArrays.push({
        dayNum: i,
        weekDay: weekName[weekDayFlag],
    })
};
//下月在当月日历面板中的排列
for (var i = 1; i <= (6 - thisMonthLastDayInWeek); i++) {
    var weekDayFlag = (thisMonthFirstDayInWeek + days + i - 1) % 7
    dayArrays.push({
        dayNum: i,
        weekDay: weekName[weekDayFlag],
    })
};
return dayArrays;
}









































