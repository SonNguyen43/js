var input = document.querySelector('input')
var observable = Rx.Observable.fromEvent(input,'input')

/** debounceTime(2000) sau 2s thì gửi yêu cầu */
observable
.map(e => e.target.value)
.debounceTime(2000)
.distinctUntilChanged()
.subscribe({
    next: (val) => {
        console.log(val);
    }
})