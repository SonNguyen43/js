/**
 *  map() OR throttleTime() 
 * Operator là một pure function. Với cùng một giá trị đầu vào, 
 * chúng ta sẽ luôn có cùng một giá trị ở đầu ra.
 */

let observable = Rx.Observable.interval(1000)

let observer = {
    next: (val) => {
        console.log(val);
    }
}

observable.map(value => {
    return 'Number ' + value * 2
})
.throttleTime(2000)
.subscribe(observer)