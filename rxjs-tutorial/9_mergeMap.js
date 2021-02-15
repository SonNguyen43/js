var ip1 = document.querySelector('#ip1')
var ip2 = document.querySelector('#ip2')
var span = document.querySelector('span')

var obs1 = Rx.Observable.fromEvent(ip1,'input')
var obs2 = Rx.Observable.fromEvent(ip2,'input')

obs1.mergeMap(event1 => {
    return obs2.map(event2 => 
      event1.target.value + ' ' + event2.target.value
    )
}).subscribe(
  combinedValue => span.textContent = combinedValue
)