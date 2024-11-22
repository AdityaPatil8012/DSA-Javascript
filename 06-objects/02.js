// lets start from the beginning;

// let's first create an object;

const person = {
  firstName: "Aditya",
  lastName: "Patil",
  age: 21,
  "company name": "Arigo software",
  isBusinessman: true,
  skills: ["programming", "marketing", "sales", "accounting"],
  busy: ()=>{
    return "Sorry, busy with coding"
  }
}


console.log(person.age);

console.log(person["company name"]);

console.log(person.hasOwnProperty("skills"));
console.log(person.hasOwnProperty("lazy"));



// now let's start with adding, deleting and updating keys;

person.middleName = "Minesh"
person.location = "Warananagar, Kodoli"

console.log(person.middleName);
console.log(person.location);

console.log(person.hasOwnProperty("location"));
console.log(person.hasOwnProperty("middleName"));
console.log(person.hasOwnProperty("nickName"));

person.nickName = "Adi";

console.log(person.hasOwnProperty("nickName"));


// now let's start with creating copys of the object;


// this is the shallow copy of the original object
const person2 = person;

console.log(person2);


// let's create a Deep copy;

const person3 = Object.assign({}, person);

console.log(person3);



// let's now get the keys and values; 

console.log(Object.keys(person));
console.log(Object.values(person));


for(let key in person){
  console.log(`${key}: ${person[key]}`);
  
}


// loop through array using forEach loop;

Object.keys(person).forEach((key)=> console.log(key));