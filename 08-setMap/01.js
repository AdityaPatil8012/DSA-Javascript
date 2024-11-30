// let's start with set's first;
// let's create a set 

const mySet = new Set();

// let's know see how to add values to set;

mySet.add(1); // here we can add number
mySet.add("hello from my first set"); // we can add string values
mySet.add(true); // we can add boolean values;

// let's now check the values exists;

console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has("hello from my first set"));
console.log(mySet.has(true));


// now let's remove the values from the set;

mySet.delete("hello from my first set");

console.log(mySet.has("hello from my first set"));
console.log(mySet);


// let's see how we can iterate through the set;

for(const value of mySet){
  console.log(value);
}

// how can we check the size of the set;

console.log(mySet.size);

// Clearing the set;
mySet.clear();

console.log(mySet);

// now let's add something in this set;

mySet.add(1)
mySet.add(2)
mySet.add(3)


console.log(mySet);

// now let's delete the 1 from this set;

mySet.delete(1);

console.log(mySet);

// let's check whether we have 1 or not;

console.log(mySet.has(1)); // false;








