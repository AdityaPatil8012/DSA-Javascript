// // let's start here with basics of array and solve some problems;

// let arr = ["Aditya", "harsh", "kunal", "Madan"];

// console.log(arr[0]);
// console.log(arr[3]);

// // inserting elements using methods: 

// // if I want to insert element from back we can get

// arr.push("Jayraj");

// console.log(arr);

// // if I want to isert the element from front:

// arr.unshift("Sanskar");

// console.log(arr);


// // now let's delete some items from the array;

// arr.pop();
// console.log(arr);

// // let's now delete the element from front;

// arr.shift();

// console.log(arr);

// arr.splice(1,1);
// console.log(arr);


// let's start with new array to study and practice loops for an array;


let arr2 = ["tkea", "sgi", "kit", "dyp"];

// for(let i = 0; i<arr2.length; i++){
//   console.log(arr2[i]); 
// }

// we can do the same thing using for of loop

// for(let collage of arr2){
//   // let's add something to it;
//   console.log(`I have studied from ${collage}`);
// }

// let's do the same with forEach loop;

arr2.forEach((collage)=>{
  console.log(collage + "is great place to study");
  
})






