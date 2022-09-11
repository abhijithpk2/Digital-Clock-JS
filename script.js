function displayTime(){
    var dateTime = new Date();

    var date = dateTime.getDate();
    var months = dateTime.getMonth()+1;
    var years = dateTime.getFullYear();

    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hours>11){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    if(hours>12){
        hours = hours - 12;
    }

    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = months;
    document.getElementById('year').innerHTML = years;

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}

setInterval(displayTime,10)