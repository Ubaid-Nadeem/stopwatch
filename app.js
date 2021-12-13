var sec = document.getElementById('sec');
var seconds = 0
var mint = document.getElementById('mint');
var minuts = 0
var hour = document.getElementById('hour');
var hours = 0
function start() {
    ++seconds
    sec.innerHTML = seconds
    mint.innerHTML = minuts + ' : '
    hour.innerHTML = hours + ' : '
    if (seconds == 60) {
        seconds = 0
        ++minuts
    }
    if (seconds < 10) {
        sec.innerHTML = '0' + seconds
    }
    if (minuts < 10) {
        mint.innerHTML = '0' + minuts + ' : '
    }
    if (minuts == 60) {
        ++hours
        minuts = 0
    }

    if (hours < 10) {
        hour.innerHTML = '0' + hours + ' : '
    }
}



var startbtn = document.getElementById('start');
var Stop = document.getElementById('stop');
var reset = document.getElementById('reset')
var b;
startbtn.addEventListener('click',()=>{
 b =  setInterval(start, 1000)
Stop.style.display='inline'
startbtn.style.display='none'

})


Stop.addEventListener('click',()=>{
    clearInterval(b)
Stop.style.display='none'
startbtn.style.display='inline'
})


reset.addEventListener('click',()=>{
    location.reload()
})