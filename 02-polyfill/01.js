// let's learn about array methods and thier polyfill;

const employees = [
  {name: "Harsh", age: 22},
  {name: "kunal", age: 22},
  {name: "Ketan", age: 22},
  {name: "Omkar", age: 22},
]

const employeesName = employees.map(employee => employee.name);

employeesName

// when we want to work with older versions of browsers and we need to use array method but they are not present, we can basically create our own methods that are know as polyfills

