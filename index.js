const employee = {
    name: "Sam",
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return employee = {
        name: "Sam",
        streetAddress: '11 Broadway',
     
    }
   
}
 function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
     return employee;
 }

 function deleteFromEmployeeByKey(employee, key) {
    const newEmp = {...employee}
    delete newEmp[key];
    return newEmp;
}
 function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key];
     return employee;
 }