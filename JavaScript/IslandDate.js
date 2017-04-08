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

function dayToMonthL(dayNum){
  var monthName = "";
  var monthNum = 0;
  if(dayNum<=31) monthNum =1;
  else if(dayNum<=60) monthNum =2;
  else if(dayNum<=91) monthNum =3;
  else if(dayNum<=121) monthNum =4;
  else if(dayNum<=152) monthNum =5;
  else if(dayNum<=182) monthNum =6;
  else if(dayNum<=213) monthNum =7;
  else if(dayNum<=244) monthNum =8;
  else if(dayNum<=274) monthNum =9;
  else if(dayNum<=305) monthNum =10;
  else if(dayNum<=336) monthNum =11;
  else if(dayNum<=366) monthNum =12;

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

function monthToDaysL(monthNum){
  var monthName = "";
  var numOfDays = 0;
  var monthArray = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];
  monthName = monthArray[monthNum-1];
  switch(monthName) {
    case "January": numOfDays = 31; break;
    case "February": numOfDays = 29; break;
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

function dayInMonth(dayNum)
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

function dayInMonthL(dayNum)
{
  var dateNum = dayNum;
  var monthNum = 0;
  if(dayNum<=31) monthNum =1;
  else if(dayNum<=60) monthNum =2;
  else if(dayNum<=91) monthNum =3;
  else if(dayNum<=121) monthNum =4;
  else if(dayNum<=152) monthNum =5;
  else if(dayNum<=182) monthNum =6;
  else if(dayNum<=213) monthNum =7;
  else if(dayNum<=244) monthNum =8;
  else if(dayNum<=274) monthNum =9;
  else if(dayNum<=305) monthNum =10;
  else if(dayNum<=335) monthNum =11;
  else if(dayNum<=366) monthNum =12;
  for(i=monthNum; i>1; i--)
  {
    dateNum = dateNum - monthToDaysL(i);
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

function fullDate2(dayNum){
  var yearsPast = numLeapYears = numNoneLeapYears = daysPast = 0;
  var dayOfWeek = month = "";
  var dateNum =  0;
  yearsPast = parseInt(dayNum / 365);
  if(yearsPast>=4) numLeapYears = parseInt(yearsPast / 4);
  numNoneLeapYears = yearsPast - numLeapYears;
  daysPast = dayNum - ((366 * numLeapYears) + (365 * numNoneLeapYears));
  if(daysPast <0){
    if(((2017+yearsPast)%4) == 0) daysPast = 366 - numLeapYears;
      else daysPast = 365 - numLeapYears;
    yearsPast = yearsPast--;
  }
  currentYear = 2017 + yearsPast;
  if(currentYear%4 == 0) {
    dayOfWeek =  weekDayName(daysPast);
    month = dayToMonthL(daysPast);
    dateNum = dayInMonthL(daysPast);
  }
  else {
    dayOfWeek =  weekDayName(daysPast);
    month = dayToMonth(daysPast);
    dateNum = dayInMonth(daysPast);
  }
  console.log(dayOfWeek + ", " + month + " " + dateNum + ", " + currentYear);
}

// someDays();
// console.log(monthToDays(5));
// console.log(dayToMonth(365));
// fullDate(142);
fullDate2(8475);
