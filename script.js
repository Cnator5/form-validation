// function changeImage(newImage){
//     document.getElementById('mainImage').src = newImage;
// }


// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const evenNumbers = getEvenNumbers(numbers);
//   console.log(evenNumbers);

//   //const existNumber = number.find(num => num % 2 === 0);//

// let data = [1, 2, 3, 4, 5, 6, 7, 8];

// let primeNumbers = data.filter((num) => {
//     for (let i = 2, sqrt = Maths.sqrt(num); i <= sqrt; i++)
//         if (num % i === 0) return false;

//         return num > 1;
//     });
//     console.log(primeNumbers);
    

// let user ={
//     name: "John",
//     email: "bsg@gmail.com",
//     age: 45,
// }

// user.phoneNumber = 69997474;
// console.log(user.phoneNumber);


 

// const johnAge = 45;
// if (johnAge < 20){
//     console.log('JOHN IS a teenager');
// }
// else {
//     console.log('John is an adult');
// }

// function showIcon(elm){
//     alert(elm.value);
// }

// let user = {
//     firstName: "bey",
//     lastName: "oh"
// }

// let fullName = firstName + " " + lastName;
// console.log(fullName);
// let userInitials = fullName.split(" ") [0].charAt(0) + fullName.split(" ")[0].charAt(0) + 
// console.log(userInitials);

// let fullName = user.firstName.charAt(0) + user.lastName.charAt(0);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// // number = "5"
// number = "5.5"
// // parseInt(number)
// parseFloat(number)
// console.log(number);

// function setHoverColor() {
//     btn.style.background = "yellow";
// }
// let btn = document.getElementById("bttn");
// btn.addEventListener("mouseover", setHoverColor);


// function sayHello() {
//     alert("hello");
// }
// let btnn = document.getElementByClass(".bttn");
// btnn.addEventListener("click", sayHello);

// let date = new Date();
//     console.log(date);
// Number = 42
// Number.toString()

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: true,
    checkVisible: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        },
    },
});
})
