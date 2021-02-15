var ball = document.getElementsByClassName("ball");
document.onmousemove = function(){
    /* event.clientX: Lấy tọa độ ngang của onmousemove || window.innerWidth: Lấy chiều rộng của browser */
    var x = event.clientX * 100 / window.innerWidth + "%";
     /* event.clientY: Lấy tọa độ dọc của onmousemove || window.innerHeight: Lấy chiều cao của browser */
    var y = event.clientY * 100 / window.innerHeight + "%";

    for (var i = 0; i < 2; i++) {
        ball[i].style.left = x;
        ball[i].style.top = y;

        /* Hạn chế phần hidden */
        ball[i].style.transform = "translate(-"+x+", -"+y+")";
    }
} 