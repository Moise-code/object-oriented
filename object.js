// lets create a user object//

// const userOne = {
//     userName: 'ryu',
//     email: 'byiringiromoise12@gmail.com',
//     login(){
//         console.log('the user loogeed in successfully')
//     },
//     logout(){
//         console.log('the user logged out successfully');
//     }
// };

// console.log(userOne.email, userOne.userName);
// userOne.login();
// its okay when you want to create a new user object however it is properly and good to use the new keyword to create a new user object

// example wee just use new keyword with the name user to create a new user there is a way to use prototype model using the class keyword
// a class is a bluue point of the object it demonstrate the properties and functionality using the blue print.
// const userTwo = new User('amahoro@gmail.com','Moise');

// class User {
//     // create constructor to set the new user later on the constructor is containing the parameter of the argument chaning in the new user value
//     constructor(name, age){
//         // set up the properties here value of the property must be equals to the parameter passed in the constructor
//         this.username = name;
//         this.age = age;

//     }
// }
// // here in the new user bracket we are going to pass in the value in the constructor as the actual argument here in new user parameter.
// const UserOne = new User('Moise','60 years');
// const UserTwo = new User('Byiringiro', '70 years old');

// console.log(UserOne, UserTwo);

// now lets associate the methods on our object here we dont declare them in the constructor instead we declare them after the constructor in addition inside class we dont comma separate the methods

// now we are going to do the so called method chaining//
// this is all about calling the two method once on the same user.
// remember to chain the methods you just go ahead and first return the methods and then be able to chain them together at the end.


class userrr {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age
    }

    // we are going to add the methods then to the class here//
    // then to chain the methods while calling them we shall return the this keyword
    login(){
        console.log(`the user who goes by the name ${this.name} with the email: ${this.email} has ${this.age} years old`);
        return this;
    }
    logout(){
        console.log(`the user who goes by the name ${this.name} with the email address: ${this.email} has ${this.age} years old y'all and he has logged out successfully`);
        return this;
    }
}
const userrr1 = new userrr('Byiringiro','mbyiringiro18@gmail.com',34);
const userrr2 = new userrr('Kagabo', 'moisewowe@gmail.com', 63);

userrr1.login().logout();