let x = parseInt(prompt("Nhap nam can kiem tra"));

if((x%4===0 && x%100!==0)|| x%400===0)
{  
    console.log("Nam "+x+" co 366 ngay!");
}
else console.log("Nam "+x+" co 365 ngay!");