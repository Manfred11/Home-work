// let arr=[1,2,3,4,5];
// let t= 0;
// for(let i = 0; i< arr.length; i++)
// {
//     t+= arr[i];
// }
//     console.log(t);

// let tb=0;
// for(let i =0; i< arr.length; i++)
// {
//     t+=arr[i];
// }
// tb=t/(arr.length);
// console.log(tb);

// let arr=[1,2,3,4,5];
// let max =arr[0];
// let min = arr[1];
// for(let i = 0; i< arr.length; i++)
// {
//     if(max <arr[i])
//     {
//         max = arr[i];
//     }
//     if(min>arr[i])
//     {
//         min = arr[i];
//     }
// }
//     console.log(max);
//     console.log(min);
    

//giam dan
let arr = [ 6,7,3,2,9]; 
let temp;
for(let i = 0; i< (arr.length)-1; i++)
{
    for(let j = (i+1) ; j < arr.length ;j++)
    {
        if(arr[i]<arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }
}
    console.log(arr);


