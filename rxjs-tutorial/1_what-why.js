let button = document.querySelector('button');

/**
 * Basic
 */
// button.addEventListener('click', (e) => {
//     console.log(e);
// })

/**
 * throttleTime(1000) cứ sau 1s thì mới subscribe được
 * map(): trả về một mảng mới với các giá trị đã được tinh sửa, do đó có thể gán nó dễ dàng cho một biến khác
 */
Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((data) => {return data.clientY})
    .subscribe(event => {
        console.log(event);
    })