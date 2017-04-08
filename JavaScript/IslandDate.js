function weekDayName(dayNum){
  var weekdayNum = numWeeks = 0;
  var weekDayName = "";
  weekdayNum = dayNum / 7;
  weekdayNum = (weekdayNum%1); //not sure why weekdayNum%7 wouldn't work.
  if(weekdayNum == 0) weekdayNum = 7;
  else {
    weekdayNum = Math.round(weekdayNum * 7);
  }
  switch(weekdayNum) {
  case 1: weekDayName = "Sunday"; break;
  case 2: weekDayName = "Monday"; break;
  case 3: weekDayName = "Tuesday"; break;
  case 4: weekDayName = "Wednesday"; break;
  case 5: weekDayName = "Thursday"; break;
  case 6: weekDayName = "Friday"; break;
  case 7: weekDayName = "Saturday"; break;
  }
return weekDayName;
}


function weekDayName2(dayNum){
  var weekdayNum = numWeeks = 0;
  var weekDayName = "";
  weekdayNum = dayNum / 7;
  weekdayNum = (weekdayNum%1); //not sure why weekdayNum%7 wouldn't work.
  if(weekdayNum == 0) weekdayNum = 7;
  else {
    weekdayNum = Math.round(weekdayNum * 7);
  }
switch(weekdayNum) {
  case 1: weekdayName = "Sunday, Enjoy your day off!"; break;
  case 2: weekdayName = "Monday, Work Hard"; break;
  case 3: weekdayName = "Tuesday, Work Hard"; break;
  case 4: weekdayName = "Wednesday, Work Hard"; break;
  case 5: weekdayName = "Thursday, Work Hard"; break;
  case 6: weekdayName = "Friday, Work Hard"; break;
  case 7: weekdayName = "Saturday, Enjoy your day off!"; break;
}
console.log(weekdayName);
}

function someDays(){
  var randNum = 0;
  for(var i = 1; i <=17; i++) {
    randNum = Math.ceil(Math.random() * 366);
    weekDayName2(randNum);
  }
}

function dayToMonth(dayNum){
  var monthName = "";
  var monthNum = 0;
  if(dayNum<=31) monthNum =1;
  else if(dayNum<=59) monthNum =2;
  else if(dayNum<=90) monthNum =3;
  else if(dayNum<=120) monthNum =4;
  else if(dayNum<=151) monthNum =5;
  else if(dayNum<=181) monthNum =6;
  else if(dayNum<=212) monthNum =7;
  else if(dayNum<=243) monthNum =8;
  else if(dayNum<=273) monthNum =9;
  else if(dayNum<=304) monthNum =10;
  else if(dayNum<=334) monthNum =11;
  else if(dayNum<=365) monthNum =12;

  var monthArray = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];
  monthName = monthArray[monthNum-1];
  return monthName;
}

function monthToDays(monthNum){
  var monthName = "";
  var numOfDays = 0;
  var monthArray = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];
  monthName = monthArray[monthNum-1];
  switch(monthName) {
    case "January": numOfDays = 31; break;
    case "February": numOfDays = 28; break;
    case "March": numOfDays = 31; break;
    case "April": numOfDays = 30; break;
    case "May": numOfDays = 31; break;
    case "June": numOfDays = 30; break;
    case "July": numOfDays = 31; break;
    case "August": numOfDays = 31; break;
    case "September": numOfDays = 30; break;
    case "October": numOfDays = 31; break;
    case "November": numOfDays = 30; break;
    case "December": numOfDays = 31; break;
  }
  return numOfDays;
}

function dayInMonth(dayNum, month)
{
  var dateNum = dayNum;
  var monthNum = 0;
  if(dayNum<=31) monthNum =1;
  else if(dayNum<=59) monthNum =2;
  else if(dayNum<=90) monthNum =3;
  else if(dayNum<=120) monthNum =4;
  else if(dayNum<=151) monthNum =5;
  else if(dayNum<=181) monthNum =6;
  else if(dayNum<=212) monthNum =7;
  else if(dayNum<=243) monthNum =8;
  else if(dayNum<=273) monthNum =9;
  else if(dayNum<=304) monthNum =10;
  else if(dayNum<=334) monthNum =11;
  else if(dayNum<=365) monthNum =12;
  for(i=monthNum; i>1; i--)
  {
    dateNum = dateNum - monthToDays(i);
  }
  return dateNum;
}

function fullDate(dayNum){
var dayOfWeek = month = "";
var dateNum = yearNum = 0;
dayOfWeek =  weekDayName(dayNum);
month = dayToMonth(dayNum);
dateNum = dayInMonth(dayNum);
yearNum = 2017;
console.log(dayOfWeek + ", " + month + " " + dateNum + ", " + yearNum);
}

// someDays();
// console.log(monthToDays(5));
// console.log(dayToMonth(365));
fullDate(142);
