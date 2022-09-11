function displayTime(){
    var dateTime = new Date();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hours>12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    if(hours>12){
        hours = hours - 12;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}

setInterval(displayTime,10)