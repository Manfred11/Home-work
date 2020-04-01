let a = parseInt(prompt("Nhap chieu dai a : "));
let b = parseInt(prompt("Nhap chieu rong b :"));
// for(let i = 0; i< a ; i++)
// {
//     for( let j = 0; j<b ;j++)
//     {
//         console.log("*");
        
//     }
    
// }
// let s="";
// for (let i =0; i <b; i++)
// {
//     s+="*";
// }
// for(let i=0; i<a ;i++)
// {
//     console.log(s);
// }

let s="";
for (let i =0; i <b; i++)
{
    s+="*";
    
}
let result=``;
for(let i=0; i<a ;i++)
{
    result+= s+ '\n' ;
}
    console.log(s);



