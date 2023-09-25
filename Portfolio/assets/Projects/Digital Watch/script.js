timer=true;
function showtime(){
    
    var time=new Date();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    meridiem="AM";
    timer=true;

    if (hour>12){
        hour=hour-12;
        meridiem="PM";
    }
    if (hour<10){
        hour="0"+hour;
    }
    if (minutes<10){
        minutes="0"+minutes;
    }
    if (seconds<10){
        seconds="0"+seconds;
    }
    document.getElementById("hr").innerHTML=hour+":";
    document.getElementById("min").innerHTML=minutes+":";
    document.getElementById("sec").innerHTML=seconds;
    document.getElementById("meridiem").innerHTML=meridiem;   
}

setInterval(showtime, 1000); 


