var time = document.getElementById("time")

var date = new Date()

time.innerHTML = date.getHours() + " " + date.getMinutes() + " " + date.getSeconds()