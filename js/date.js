var d=new Date();
var month=new Array(12)
month[0]="1月"
month[1]="2月"
month[2]="3月"
month[3]="4月"
month[4]="5月"
month[5]="6月"
month[6]="7月"
month[7]="8月"
month[8]="9月"
month[9]="10月"
month[10]="11月"
month[11]="12月"
document.getElementById('day').innerHTML= month[d.getMonth()]+d.getDate()+"日";

function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// add a zero in front of numbers<10
m=checkTime(m)
s=checkTime(s)
document.getElementById('time').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}



