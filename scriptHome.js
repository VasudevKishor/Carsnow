function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    document.getElementById("clock").innerHTML=hour+":"+min+":"+sec;
    if(day==1){day="Monday"}
    else if(day==2){day="Tuesday"}
    else if(day==3){day="Wednesday"}
    else if(day==4){day="Thursday"}
    else if(day==5){day="Friday"}
    else if(day==6){day="Saturday"}
    else if(day==7){day="Sunday"}
    document.getElementById("day").innerHTML=day;
}setInterval(displayTime,1000)
function goToNewPage()
{
    var url = document.getElementById('list').value;
    if(url != 'none') {
        window.location = url;
    }
}