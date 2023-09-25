var hr=00;
var min=00;
var sec=00;
var msec=00;

var timer=false;

function start(){
    timer=true;
    stopwatch()

}
function stop(){
    timer=false;

}
function reset(){
    timer=false;
    hr=00;
    min=00;
    sec=00;
    msec=00;
    document.getElementById("msec").innerHTML=msec;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML=min;
    document.getElementById("hr").innerHTML=hr;

}
function stopwatch(){
    if (timer==true){
        msec=msec+1;
        if(msec==1000){
            sec=sec+1;
            msec=00;
        }
        if (sec==60){
            min=min+1;
            sec=00;
        }
        if(min==60){
            hr=1;
            min=00;
        }
        document.getElementById("msec").innerHTML=msec;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        document.getElementById("hr").innerHTML=hr;

    }
    setTimeout("stopwatch()",1);
}