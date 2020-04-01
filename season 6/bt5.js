let arr=[];
let length ;
for(let i =0; i < length; i++)
{
    let n = parseInt(prompt("Nhap 5 so thu "+ i+ ":"));
    arr.push(n);
}
let max =0;
for(let i = 0; i< arr.length;i++)
{
    if(max<arr[i])
    {
        max=arr[i];
    }
}
let max2=0;
for(let i = 0; i< arr.length;i++)
{
    if(max==arr[i])
    {
    continue;
    }
    else if(max2<arr[i]){
        max2 = arr[i];
    }
}
console.log(max2);


// for(let i = 0; i< arr.length; i++)
// {
//     if(N < arr[i])
//     {
//         console.log(arr[i]);
//     }
// }