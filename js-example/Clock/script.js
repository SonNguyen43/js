//Mỗi 1 giây sẽ gọi setClock()
setInterval(setClock, 1000);

/* querySelector: Lấy phần tử trong file index  */
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const sencondHand = document.querySelector('[data-second-hand]');

function setClock(){
    /* Lấy giờ phút giây bằng class Date */
    const currenDate = new Date();
    const secondRadio = currenDate.getSeconds() / 60;
    const minuteRadio = (secondRadio + currenDate.getMinutes()) / 60; 
    const hourRadio = (minuteRadio + currenDate.getHours()) / 12;

    setRotation(sencondHand, secondRadio);
    setRotation(minuteHand, minuteRadio);
    setRotation(hourHand, hourRadio);
}

function setRotation(element, rotationRadio){
    element.style.setProperty('--rotation', rotationRadio * 360);
}

setClock();