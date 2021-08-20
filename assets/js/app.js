function updateTime() {

    var dateTime = new Date();
    var endTime = new Date('August 31 2021 23:59:59');
    const diff = endTime - dateTime;
    var hr;
    var min = (dateTime.getMinutes < 10) ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
    var sec = (dateTime.getSeconds < 10) ? "0" + dateTime.getSeconds() : dateTime.getSeconds();
    var amPm = (dateTime.getHours >= 12) ? "PM" : "AM";

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    //show hours in 24 
    if (dateTime.getHours() == 0) {
        hr = 12;
    } else if (dateTime.getHours() > 12) {
        hr = dateTime.getHours() - 12;
    } else {
        hr = dateTime.getHours();
    }

    document.getElementById('timemana').innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

}

updateTime();
setInterval(function() {
    updateTime()
}, 1000);