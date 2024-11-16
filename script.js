/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr
    .map((employee) => {
      if (employee.profession === "developer") {
        return employee;
      }
    })
    .filter((employee) => employee !== undefined);

  console.log(developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee); // Push developers to the array
    }
  });

  console.log(developers);
}

function addData() {
  const newEmployee = {
    id: 4,
    name: "james",
    age: "21",
    profession: "developer",
  };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const updatedArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(updatedArr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "alex", age: "22", profession: "developer" },
    { id: 5, name: "mahesh", age: "21", profession: "developer" },
    { id: 6, name: "kishore", age: "24", profession: "admin" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
