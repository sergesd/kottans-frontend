// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
var object;
for (var i = 0; i < contacts.length; i++) {
    console.log(i);
        console.log(contacts[i].firstName);

    if (contacts[i].firstName == name) {
        object = contacts[i];
        break;
    }
}
    console.log(object);
if (object === undefined) {
    return "No such contact";
}
console.log(object.hasOwnProperty(prop));
if (!object.hasOwnProperty(prop)) {
    return "No such property";
}

return object[prop];

// Only change code above this line
}

lookUpProfile("Akira", "likesс");

