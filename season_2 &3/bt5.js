var x = Number(prompt("nhap 1 so co 3 chu so:"));

let a = parseInt(x/100);
let b = parseInt(x%100)/10;
let c = parseInt(x%100)%10;
let t =parseInt(a + b + c);

console.log("So "+ x + " co tong cac chu so la " + t);