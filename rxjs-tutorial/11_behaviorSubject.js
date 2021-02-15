/**
 * Một trong các biến thể của Subject đó là BehaviorSubject, nó là biến thế có khái niệm về “the current value”.
 * BehaviorSubject lưu trữ lại giá trị mới emit gần nhất để khi một Observer mới subscribe vào, 
 * nó sẽ emit giá trị đó ngay lập tức cho Observer vừa rồi.
 */

var button = document.querySelector('button')
var div = document.querySelector('div')

var clickEmitted = new Rx.BehaviorSubject('Not click!');

button.addEventListener('click', ()=>{
  clickEmitted.next('Clicked!')
})

clickEmitted.subscribe(value =>{
  div.textContent = value
})