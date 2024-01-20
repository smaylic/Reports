console.log("///");

const aboutMe = {
    name: "Егор",
    age: 18,
};
console.log(aboutMe);

console.log("///");

const user = {
    egor:{
        greet(name){
            console.log (`Hello ${name}`)
        }
    }
}

user.egor.greet("Егор");

console.log("///");

const users = [
    { name : "Алексей", isAdmin: false },
    { name : "Елена", isAdmin: true },
    { name : "Иван", isAdmin: false },
    { name : "Мария", isAdmin: false },
    { name : "Николай", isAdmin: true },
]


let simpleUsersCount = 0;
users.forEach(function(user) {
    if (!user.isAdmin) {
    simpleUsersCount++;
    }
});

console.log("Количество простых пользователей:", simpleUsersCount);