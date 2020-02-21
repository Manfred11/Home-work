let x = parseInt(prompt("Nhap vao so dien: "));
let sT;
if(x>0 && x<=50)
{
    sT = x*1678;
}
else if(x>50 &&x<101)
{
    sT = (x-50)*1734 + 50*1678;
}
else if(x>100 && x<201)
{
    sT = (x-100)*2014 + 50*1678 + 50*1734;
}
else if(x>200 && x<301)
{
    sT= (x-200)*2536 + 100*2014 + 50*1678 +50*1734;
}
else if(x>300 && x<401)
{
    sT = (x-300)*2834 + 100*2536 + 100*2014 + 50*1678 + 50*1734;
}
else 
{   
    sT = (x-400)*2927 + 50*1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834;
}

console.log("So tien dien phai tra cho "+x+" so dien la "+sT+"");