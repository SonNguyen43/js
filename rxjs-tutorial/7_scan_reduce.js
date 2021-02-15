var input = document.querySelector('input')
var observable = Rx.Observable.of(1,2,3,4,5)

/**
 * reduce() đã học với map(), filter()
 * scan() thay vì tính tổng và trả về giá trị cuối cùng như reduce()
 * thì nó giống như theo dõi dữ liệu đang có giá trị bao nhiêu tại từng thời điểm
 */
observable
.scan((total, currentValue) => {
    return total + currentValue
})
.subscribe({
    next: (val)=>{
        console.log(val);
    }
})