let height = parseFloat(prompt("Nhap vao chieu cao: "));
let weight = parseFloat(prompt("Nhap vao can nang: "));
let BMI = parseFloat(weight/(height**2));

console.log("Chi so BMI la: "+BMI);
console.log("Tinh trang suc khoe theo chi so BMI: ");

if(BMI<18.5){
    console.log("Gay!");
}
else if(BMI>=18.5 && BMI<25)
{
    console.log("Binh thuong!");
}
else if(BMI>=25 && BMI<30)
{
    console.log("Hoi beo");
}
else if(BMI>=30 && BMI<35)
{
    console.log("Beo phi cap 1!");
}
else if(BMI>=35 && BMI<40)
{
    console.log("Beo phi cap 2!");
}
else if(BMI >=40)
{
    console.log("Beo phi cap 3!");  
}