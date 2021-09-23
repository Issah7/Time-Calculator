var count = 0


document.querySelectorAll(".user").forEach( function (user) {
    user.id = "a" + ++count;
    var userid = user.id;
    

    var amount = 0
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var milliseconds = 00;
    var out = "KES = 0";

   
    var hrs = document.querySelector(`#${userid} #hours`);
    console.log(hrs)
    var min = document.querySelector(`#${userid} #minutes`);
    var secs = document.querySelector(`#${userid} #seconds`);
    var millisecs = document.querySelector(`#${userid} #milliseconds`);
    let output = document.querySelector(`#${userid} div`);

    var btnstrt = document.querySelector(`#${userid} #btn_start`);
    var btnstp = document.querySelector(`#${userid} #btn_stop`);
    var btnrst = document.querySelector(`#${userid} #btn_reset`);
    

    var interval;

    btnstrt.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    btnstp.onclick = function () {
        clearInterval(interval);
    }
    btnrst.onclick = function () {
        clearInterval(interval);
        milliseconds = "00";
        seconds = "00";
        minutes = "00";
        min.innerHTML = minutes;
        secs.innerHTML = seconds;
        millisecs.innerHTML = milliseconds;
        output.innerHTML = out;

    }

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            millisecs.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            millisecs.innerHTML = milliseconds;

        }

        if (milliseconds > 99) {

            seconds++;
            secs.innerHTML = "0" + seconds;
            milliseconds = 0;
            millisecs.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            secs.innerHTML = seconds;
        }

        if (seconds > 59) {

            minutes++;
            min.innerHTML = "0" + minutes;
            seconds = 0;
            secs.innerHTML = "0" + 0;
            amount += 1
            output.innerHTML = "KES = " + amount;
        }

        if (minutes > 9) {
            min.innerHTML = minutes;
        }
        if (minutes > 59) {

            hours++;
            hrs.innerHTML = "0" + hours;
            minutes = 0;
            min.innerHTML = "0" + 0;
        }

        if (hours > 9) {
            hrs.innerHTML = hours;
        }

        
    }


})
