let student={
    name:"Aksa Sara",
    age:19,
    gender:"female",
    course:"BCA",
    rollNO:7,
    address:{
        house:"Green Villa",
        street:"MG Road",
        district:"Ernakulam",
        state:"Kerala",
    },
    marks:{
        english:98,
        maths:96,
        biology:100
    },
    phone:1234567890,
    email:"aksasara123@gmail.com",
    bloodgroup:"O+",
    hobbies:["music","reading","studying"],
    languages:["english","malayalam","hindi"],
    ishosteller:false,
}
console.log(student);

document.getElementById("name").innerText="Name:" + student.name;
document.getElementById("name").style.color="chocolate";
document.getElementById("name").style.fontFamily="cursive";
document.getElementById("name").style.fontSize="50px";
document.getElementById("name").style.paddingLeft="50px";
document.getElementById("age").innerText="Age:" + student.age;
document.getElementById("age").style.paddingLeft="80px";
document.getElementById("age").style.fontSize="30px";
document.getElementById("age").style.color="darkgray";
document.getElementById("gender").innerText="Gender:" + student.gender;
document.getElementById("gender").style.paddingLeft="80px";
document.getElementById("gender").style.color="darkgray";
document.getElementById("gender").style.fontSize="30px";
document.getElementById("course").innerText="Course:" + student.course;
document.getElementById("course").style.paddingLeft="80px";
document.getElementById("course").style.color="darkgray";
document.getElementById("course").style.fontSize="30px";
document.getElementById("rollNo").innerText="RollNo:" + student.rollNO;
document.getElementById("rollNo").style.paddingLeft="80px";
document.getElementById("rollNo").style.fontSize="30px";
document.getElementById("rollNo").style.color="darkgray";
document.getElementById("address").innerText ="Address:" + 
student.address.house + ", " +
student.address.street + ", " +
student.address.district + ", " +
student.address.state;
document.getElementById("address").style.paddingLeft="80px";
document.getElementById("address").style.fontSize="30px";
document.getElementById("address").style.color="darkgray";
document.getElementById("marks").innerText ="Marks:" + 
"English: " + student.marks.english +
", Maths: " + student.marks.maths +
", Biology: " + student.marks.biology;
document.getElementById("marks").style.paddingLeft="80px";
document.getElementById("marks").style.fontSize="30px";
document.getElementById("marks").style.color="darkgray";
document.getElementById("phone").innerText="Phone:" + student.phone;
document.getElementById("phone").style.paddingLeft="80px";
document.getElementById("phone").style.fontSize="30px";
document.getElementById("phone").style.color="darkgray";
document.getElementById("email").innerText="Email:" + student.email;
document.getElementById("email").style.paddingLeft="80px";
document.getElementById("email").style.fontSize="30px";
document.getElementById("email").style.color="darkgray";
document.getElementById("bloodgroup").innerText= "BloodGroup:" + student.bloodgroup;
document.getElementById("bloodgroup").style.paddingLeft="80px";
document.getElementById("bloodgroup").style.fontSize="30px";
document.getElementById("bloodgroup").style.color="darkgray";
document.getElementById("hobbies").innerText= "Hobbies:" + student.hobbies;
document.getElementById("hobbies").style.paddingLeft="80px";
document.getElementById("hobbies").style.fontSize="30px";
document.getElementById("hobbies").style.color="darkgray";
document.getElementById("languages").innerText= "Languages:" + student.languages;
document.getElementById("languages").style.paddingLeft="80px";
document.getElementById("languages").style.fontSize="30px";
document.getElementById("languages").style.color="darkgray";
document.getElementById("hosteller").innerText =
"Hosteller: " + student.ishosteller;
document.getElementById("hosteller").style.paddingLeft="80px";
document.getElementById("hosteller").style.fontSize="30px";
document.getElementById("hosteller").style.color="darkgray";
