/**
 * Nó cũng khá giống với map và filter nhưng hơi khác ở đối số callback . 
 * Callback bây giờ nhận bộ tích luỹ 
 * nó tích luỹ tất cả các giá trị trả về , giá trị của nó là sự tích luỹ của các tích luỹ trả về trước đó
 * giá trị hiện tại,index hiện tại và cuối cùng là toàn bộ mảng .
 */

// tính tổng
const number = [1, 5, 3, 19];

var sum = number.reduce((value, currentValue) =>{
    return value + currentValue
})
console.log(sum);

// biến các mảng thành môt mảng duy nhất
const songs = [
    {"id": 1, "name": "Ngây thơ", "single": "Phong max"},
    {"id": 2, "name": "With you", "single": "Hoaprox"},
    {"id": 3, "name": "Ăn gì đây", "single": "Hòa minzy"},
]
const mutil = [songs, [{"id": 4, "name": "Hoa hải đường", "single":"Jack"}]]

arrSong = mutil.reduce((value, currentValue) => {
    return value.concat(currentValue)
})
console.log(arrSong);

