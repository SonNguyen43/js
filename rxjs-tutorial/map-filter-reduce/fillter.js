/**
 * Với filter(), ta cần đảm bảo câu lệnh return trả về true hoặc false 
 * vì nó là điều kiện để "lọc" ra các giá trị phù hợp trong mảng.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lọc số chẵn
// trả về các giá trị đúng, tạo ra mảng mới
let newArr = arr.filter(value => {
    return value % 2 === 0
})
console.log(newArr);

// tìm kiếm chuỗi
var string = ['i', 'am', 'a', 'superman', 'so', 'i', 'am', 'stronger'];
var filter = string.filter(value => {
    return value.includes('am')
})
console.log(filter);
