var st =parseInt(prompt("Nhap so tien doi:"));

let a = parseInt(st/100000);
let b = parseInt((st % 100000) /50000);
let c = parseInt(((st% 100000) %50000) /20000);
let d = parseInt((((st % 100000)%50000)%20000)/10000);
console.log(st +" vnd = "+ a +" to 100k + "+ b +" to 50k + "+ c +" to 20k + "+ d +" to 10k");