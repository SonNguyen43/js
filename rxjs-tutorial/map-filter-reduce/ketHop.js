const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * b1: lọc, trả về các giá trị chia hết cho cho | [2,4,6,8]
 * b2: lấy các giá trị được lọc ở bước 1 sử dụng *2 | [4,8,12,16]
 * b3: tính tổng các giá trị ở bước 2 | 116
 */
let newArr = arr.filter(value => {
    return value % 2 === 0
}).map(value => {
    return value * 2
}).reduce((val, nextVal) => {
    return val + nextVal
})

// 40
console.log(newArr);