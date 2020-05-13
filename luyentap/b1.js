
// 1.Tính các tổng S sau:
// a.S =   1+x+x2+x3+... +xNvới x và N nhập từ bàn phím.
// b.S = 1! + 2! + 3! + … + N! với N nhập từ bàn phím

// a
// var x = parseInt(prompt("nhap x: "));
// var n = parseInt(prompt("Nhap N: "));
// var s =0; 
// for (let i = 0; i <= n ; i++) {
//     s += Math.pow(x,i);
    
// }
// console.log(s);

// b

var n = parseInt(prompt("Nhap N: "));
var sum = 1;
for (let i = 1; i < n; i++) {
    sum += sum*i ;
    
}
console.log(sum);

