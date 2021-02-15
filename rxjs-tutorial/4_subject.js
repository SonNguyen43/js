var subject = new Rx.Subject();

subject.subscribe({
    next: (val) => {
        console.log(val);
    },
    error: (err) => {
        console.log(err);
    },
    complete: () => {
        console.log('Complete');
    }
});

subject.subscribe({
    next: (val) => {
        console.log(val);
    },
});

subject.next('A new data piece');
subject.complete()
