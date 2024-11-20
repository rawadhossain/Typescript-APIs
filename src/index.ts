interface User {
    name: string;
    age: number;
    email: string;
}

function SumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

// console.log(SumOfAge({ name: 'John', age: 30 }, { name: 'Jane', age: 25 }));

// Pick
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>; //will pull out the properties from a type or interface and create a new type

function updateUser(uodatedProps: UpdateProps) {
    //hit database
}

updateUser({
    name: 'John',
    age: 30,
    email: 'john@me.com', //must need all three properties
});

//Partial pick
type UpdatePropsPartial = Partial<UpdateProps>;

function updateUserPartial(uodatedProps: UpdatePropsPartial) {
    //something...
}

updateUserPartial({
    name: 'John',
    age: 30,
    // email: 'john@me.com', //optional, even if no property is passed it is fine
});
