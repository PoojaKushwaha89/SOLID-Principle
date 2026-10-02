// class Car {

//     // Runs automatically when object is created
//     constructor(brand, model){
//         this.brand= brand;
//         this.model=model
//     }

//     accelerate(){
//         this.speed = this.speed +10
//     }

//     displayInfo(){
//         console.log(this.brand)
//         console.log(this.speed)
//     }
// }

// // New keyword use here to create the Instance of the Car
// const car1= new Car("Toyota","Fortuner")
// const car2= new Car("Honda","City")

// console.log("car1.brand ===> ",car1.brand)
// console.log("car1.brand ===> ", car1.model)
// console.log("car2.brand ===> ", car2.brand)
// console.log("car2.brand ===> ", car2.model)

class Employee {
  constructor(name, salary, role) {
    this.name = name;
    this.salary = salary;
    this.role = role;
  }

  showDetails() {
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
    console.log("Role:", this.role);
  }
}

const employee = new Employee("Amit", "500000", "Manager");
employee.showDetails()
