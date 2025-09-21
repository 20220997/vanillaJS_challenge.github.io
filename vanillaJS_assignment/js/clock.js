const clock = document.querySelector(".clock");

function getClock() {
    const now = new Date();
    const dayOfTheWeek = ["월", "화", "수", "목", "금", "토", "일"];

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.innerText = `${now.getFullYear()}년${now.getMonth()}월${now.getDate()}일 (${dayOfTheWeek[now.getDay()]}) 
    ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);