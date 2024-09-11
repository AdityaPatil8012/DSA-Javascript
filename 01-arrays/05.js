// let's see now how to delete, insert and modify the elements in the given array;

// let's delete the element from the array using splice() method;

let names = ["Aditya", "kunal", "Harsh", "Madan"];

names.splice(2, 1);

console.log(names);

// Now let's add some element using splice() method;

names.splice(2,0, "Yash");
console.log(names);

// now let's see how we can replace the element;

names.splice(2,1,"Shivram");

console.log(names);


// the purpose of splice() is to delete, add, replace the element of the array;
// the purpose of the slice() is to make a copy of the origin array or extract a portion of the array;



