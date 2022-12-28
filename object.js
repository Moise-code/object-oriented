// lets create a user object//

const userOne = {
    userName: 'ryu',
    email: 'byiringiromoise12@gmail.com',
    login(){
        console.log('the user loogeed in successfully')
    },
    logout(){
        console.log('the user logged out successfully');
    }
};

console.log(userOne.email, userOne.userName);
userOne.login();
// its okay when you want to create a new user object however it is properly and good to use the new keyword to create a new user object

// example wee just use new keyword with the name user to create a new user

const userTwo = new User('amahoro@gmail.com','Moise');