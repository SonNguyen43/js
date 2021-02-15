let button = document.querySelector('button')

let observer = {
    next: (val) => {
        console.log(val);
    },
    error: (err) => {
        console.log(err);
    },
    complete: () => {
        console.log('completed');
    }
}
/** exp 1 */
Rx.Observable.fromEvent(button, 'click')
    .subscribe(observer)

/** exp 2
 * nếu có error xảy ra nó sẽ không chạy dòng next tiếp theo
 * nếu complete xảy ra nó cũng sẽ không chạy thêm dòng code nào
 */
// var supscrition = Rx.Observable.create(function (obs) {

//     button.onclick = (e) => {
//         obs.next(e)
//     }

//     obs.next('This is next value')
//     // obs.error('This is error')
//     setTimeout(() => {
//         //obs.complete()
//     }, 1000);
//     obs.next('This is sencond value')

// }).subscribe(observer)

// setTimeout(() => {
//     supscrition.unsubscribe()
// }, 5000);