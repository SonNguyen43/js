/**
 * switchMap rất hữu ích khi làm việc với HTTP request, 
 * giả sử request cũ chưa trả về giá trị mà người dùng đã request dữ liệu mới 
 * thì chúng ta có thể cancel để tránh việc dư thừa hoặc xử lý sai dữ liệu (dữ liệu cũ hơn response sau dữ liệu mới hơn). 
 * Khi cần đảm bảo chỉ có stream mới nhất đang chạy.
 */

var button = document.querySelector('button')

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);

// obs1.subscribe(event => {
//   obs2.subscribe(value => {
//     console.log(value);
//   })
// })

obs1.switchMap(e => {
  return obs2
}).subscribe(val => {
  console.log(val);
})