// 1.Tạo object chứa các thông tin của person gồm key: name, age, favorite với các giá trị tương ứng: “Phạm Văn A”, 20, [“Javascript”, “Html”, “Css”].
//     a.Tạo thêm key cho person: “school”, giá trị: “ĐH Quốc Gia HN”, k thay đổi khai báo ban đầu.
//     b.Tạo thêm key, value, đều nhập từ bàn phím



let person ={
    name: "Phạm văn A",
    age: 20,
    
}
favorite = ["Javascri", "Html", "Css"] 
favorite.push(person);
// school: "ĐH Quốc Gia HN";
// school.push(person);
person.newKey=prompt("Nhap key muon them moi: ");
person.newValue =prompt("Nhap gia tri themoi: ");
console.log(person);
