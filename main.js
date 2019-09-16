let timer;
let sec = 0;
let min = 0;
let hour = 0;


let start_btn = document.getElementById("start_btn");
let pouse_bnt = document.getElementById("pouse_btn");
let reset_bnt = document.getElementById("reset_btn");

let display_element = document.getElementById("display");


start_btn.addEventListener("click", function(){
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = true;
    start_btn.disabled = true;    
    
});
 

pouse_bnt.addEventListener("click", function(){
    timer = clearInterval(timer);
    reset_btn.disabled = false;
    start_btn.disabled = false;
});


reset_bnt.addEventListener("click", function(){   
    reset_btn.disabled = true;
    start_btn.disabled = false;
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    display_element.innerHTML = "00:00:00"
});



function TimerHandler(){
    sec++;
    if (sec == 60) {
        sec = 00;
        min++;
    }

    if (min == 60){
        min == 00;
        hour++;
    }

    DisplayTime();
}

function DisplayTime(){
    let sec_dou = sec;
    let min_dou = min;
    let hour_dou = hour;
    
    if (sec < 10){
        sec_dou = "0" + sec;
    }
    if (min < 10){
        min_dou = "0" + min;
    }
    if (hour < 10){
        hour_dou = "0" + hour;
    }
    display_element.innerHTML = hour_dou + ":" + min_dou + ":" + sec_dou;
}