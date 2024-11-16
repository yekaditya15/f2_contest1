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
      developers.push(employee);
    }
  });

  console.log(developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const updatedArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(updatedArr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "alice", age: "22", profession: "developer" },
    { id: 5, name: "bob", age: "25", profession: "developer" },
    { id: 6, name: "charlie", age: "23", profession: "admin" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
