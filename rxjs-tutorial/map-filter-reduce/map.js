/**
 * map() trả về 1 mảng mới với các giá trị đã được chỉnh sửa
 * do đó có thể dễ dàng gán nó cho 1 biến khác. 
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// trả về giá trị cho mảng mới, giữ nguyên độ dài của mảng
let newArr = arr.map((value, index, arr) => {
    return value % 2
})
console.log(newArr);

// chuyển đổi mảng object sang mảng string
// có thể áp dụng các phép biến đổi bằng hàm util
const songs = [
    {"id": 1, "name": "Ngây thơ", "single": "Phong max"},
    {"id": 2, "name": "With you", "single": "Hoaprox"},
    {"id": 3, "name": "Ăn gì đây", "single": "Hòa minzy"},
]
let nameSong = songs.map(value => {
    return value.name.toLocaleUpperCase()
});
console.log(nameSong);