var input = document.querySelector('input')
var observable = Rx.Observable.fromEvent(input,'input')

/** debounceTime(2000) sau 2s thì gửi yêu cầu */
// observable
// .map(e => e.target.value)
// .debounceTime(500)
// .distinctUntilChanged()
// .subscribe({
//     next: (value) => {
//         console.log(value);
//     }
// })

/**
 * pluck() sẽ giúp observable không subscribe() 
 * nếu value được thay đổi nhưng giá trị vẫn như cũ 
 * (giá trị giống như trước khi thay đổi)
 */
observable
.pluck('target', 'value')
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
    next: (value) => {
        console.log(value);
    }
})