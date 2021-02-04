var calendarType = 5;
var daycounts = 31;
var nowYear = 2021;
var nowMonth = 1;

function isLeapyear(){
    var leapyear;
    if (nowYear % 400 == 0) leapyear = true;
    else if (nowYear % 100 == 0) leapyear = false;
    else if (nowYear % 4 == 0) leapyear = true;
    else leapyear = false;
    /*
    if (leapyear == true){
        if(nowMonth == 1 || nowMonth == 4 || nowMonth == 7) calendarType += 0;
        else if (nowMonth == 10) calendarType += 1;
        else if (nowMonth == 5) calendarType += 2;
        else if (nowMonth == 2 || nowMonth == 8) calendarType += 3;
        else if (nowMonth == 3 || nowMonth == 11) calendarType += 4;
        else if (nowMonth == 6) calendarType += 5;
        else if (nowMonth == 9 || nowMonth == 12) calendarType += 6;
    }
    else{
        if(nowMonth == 1 || nowMonth == 10) calendarType += 0;
        else if (nowMonth == 5) calendarType += 1;
        else if (nowMonth == 8) calendarType += 2;
        else if (nowMonth == 2 || nowMonth == 3 || nowMonth == 11) calendarType += 3;
        else if (nowMonth == 6) calendarType += 4;
        else if (nowMonth == 9 || nowMonth == 12) calendarType += 5;
        else if (nowMonth == 4 || nowMonth == 7) calendarType += 6;
    }*/
    return leapyear;
}

function printCalendar(){

    document.getElementById("theTitle").innerHTML = nowYear + "年 " + nowMonth + "月";

    var date = 1 - calendarType;

    for (let i = 2; i < 8; i ++){
        for (let j = 1; j < 8; j ++){
            if (date <= daycounts && date > 0){
                document.getElementById("d"+i+"d"+j).innerHTML = date;
            }
            else {
                document.getElementById("d"+i+"d"+j).innerHTML = "";
            }
            date ++;
        }
    }
}

function calendarTypeFix(){
    if (calendarType >= 7) calendarType -= 7;
    else if (calendarType < 0) calendarType += 7;
}

function timebackward1(){
    nowMonth -= 1;
    if(nowMonth < 1){
        nowMonth += 12;
        nowYear -= 1;
    }

    if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12){
        calendarType -= 3;
    }
    else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11){
        calendarType -= 2;
    }
    else if (nowMonth == 2){
        if (isLeapyear()){
            calendarType -= 1;
        }
        else{
            calendarType -= 0;
        }
    }

    dayCountsFunction();
    calendarTypeFix();
    printCalendar();
}

function timebackward2(){
    if(isLeapyear()) calendarType -= 2;
    else calendarType -= 1;
    nowYear -= 1;
    calendarTypeFix();
    printCalendar();
}

function timebackward3(){
    for(let i = 0; i < 10; i ++){
        timebackward2();
    }
}

function timeforward1(){
    if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12){
        calendarType += 3;
    }
    else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11){
        calendarType += 2;
    }
    else if (nowMonth == 2){
        if (isLeapyear()){
            calendarType += 1;
        }
        else{
            calendarType += 0;
        }
    }
    
    nowMonth += 1;
    if(nowMonth > 12){
        nowMonth -= 12;
        nowYear += 1;
    }

    dayCountsFunction();
    calendarTypeFix();
    printCalendar();
}

function timeforward2(){
    nowYear += 1;
    if(isLeapyear()) calendarType += 2;
    else calendarType += 1;
    calendarTypeFix();
    printCalendar();
}

function timeforward3(){
    for(let i = 0; i < 10; i ++){
        timeforward2();
    }
}

function dayCountsFunction(){
    if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12){
        daycounts = 31;
    }
    else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11){
        daycounts = 30;
    }
    else if (nowMonth == 2){
        if (isLeapyear()){
            daycounts = 29;
        }
        else{
            daycounts =28 ;
        }
    }
}


printCalendar();