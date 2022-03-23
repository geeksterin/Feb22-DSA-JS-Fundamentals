class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display(){
        console.log('name', this.name, 'age', this.age);
    }
}

let user = new User("john", 20);
user.display();
user.address = '123, park street';

console.log(JSON.stringify(user));
