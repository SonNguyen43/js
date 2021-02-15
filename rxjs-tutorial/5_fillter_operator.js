var observable = Rx.Observable.interval(1000);

observable
    .filter((value) => {
        return value % 2 === 0
    })
    .subscribe({
        next: (val) => {
            console.log(val);
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {
            console.log('completed');
        }
    });