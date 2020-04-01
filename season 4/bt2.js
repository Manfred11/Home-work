let year = parseInt(prompt("Nhap nam: "));
let month = parseInt(prompt("Nhap thang: "));
// if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     console.log("Thang "+month+" co 31 ngay!");
// }
// else if(month === 4 || month === 6 || month === 9 || month === 11){
//     console.log("Thang "+month+" co 30 ngay!");     
// }
// else if(month === 2 && year%4 === 0 && year%100 !== 0)
// {
//     console.log("Thang 2 co 29 ngay vi nam "+year+" la nam nhuan!");
// }
// else if(month === 2)
// {
//     console.log("Thang 2 co 28 ngay!");
// }
// else console.log("Nhap sai!");

switch (month) {
    case 1:
    case 3:
    case 5:
    case 8:
    case 10:
    case 12:
        console.log(31);
            break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30);
            break;
    case 2:
        if(month === 2 && year%4 === 0 && year%100 !== 0)
        console.log(29);
        else
        console.log(28);
            break;
    
    default:
        console.log("Nhap sai");
        
}