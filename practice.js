alert("test");

function formatName(user){
    return user.firstname + " " + user.lastname;
}

let user = {
    firstname: "bob",
    lastname: "joe"
}

let element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

document.getElementById('root') = element;
document.getElementById('root').innerHTML = "string";