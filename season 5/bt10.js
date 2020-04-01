let N=Number(prompt("Nhap so N: ")); 
// var f0=0 , f1=1 ,fn=1;
// var t=0;
// for(let i=2; i < (N+2) ; i++)
// {
//     f0 = f1;
//     f1 = fn;
//     fn = f1 + f0;
//     t+= fn;

// }
// console.log(fn);
// console.log(t);
let f1=1 , f2=1 ;
let count = 2;
for(let i =1; i< n/2 ; i++)
{
    f1 =f1+f2;
    count++;
    f3 =f2+f1;
    count++;
}
console.log(`f${count-1}: ${f1}, ${count}: ${f2}`);

