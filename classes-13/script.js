// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.

let data = "This is website data";

class User {
    constructor (Name,email) {
        this.Name = Name ;
        this.email = email ;
    }
    viewData (){
        console.log ("Data =", data);
    }
};

class Admin extends User {
    constructor(Name,email){
        super(Name,email);
    }
    edit(){
        data = "New value";
    }
}

let student1 = new User("saif", "saif@email.com");
let student2 = new User ("sucho", "abc@gmail.com");

let admin1 = new Admin("Saif","sHDSJ@gmail.com");




// Qs-02. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.




