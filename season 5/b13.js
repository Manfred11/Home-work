// let pass=prompt("Nhap mat khau: ");
// while(pass.length<8)
// {
//     let pass=prompt("Nhap lai mat khau: ");
// }

//b14
// let pass= prompt("Nhap mat khau: ");
// while(pass.length<8)
// {
//     let pass=prompt("Mat khau ngan,Nhap lai mat khau: ");
// }

let pass= prompt("Nhap mat khau: ");
while(!(pass.length>8 && pass.indexOf("@","_","$")>=0))
{
    let pass=prompt("Nhap lai mat khau: ");
}