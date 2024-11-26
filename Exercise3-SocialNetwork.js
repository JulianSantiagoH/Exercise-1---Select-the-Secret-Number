/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const userDatabase = [
    {
        username: "Andres",
        password: "123",
    },

    {
        username: "Camilo",
        password: "456",
    },

    {
        username: "Julian",
        password: "789",
    },
];


const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me gusta el cafe",
    },

    {
        username: "Cristhian",
        timeline: "Viva Cristo Rey",
    },

    {
        username: "Ana",
        timeline: "Mi perro es muy lindo",
    },

    {
        username: "Maria",
        timeline: "He subido un nuevo video en Twitch, vayan a verlo!!",
    }
];



const nameModifier = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}





let loginOn = false;
let logout = false;


while (!logout) {
    let userFound = false;
    let passwordFound = false;
    const menu = prompt(`
    =========Welcome to Nosebook=========

    Select an Option

    1.Login
    2.Register
    3.Exit
    `)

    if (menu == '1') {

        const usernameJoin = prompt('Insert your Username');

        const usernameModified = nameModifier(usernameJoin)

        const userPassword = prompt('Insert your Password');


        for (let i in userDatabase) {
            if (usernameModified == userDatabase[i].username) {
                userFound = true;
                break
            };

        }

        for (let i in userDatabase) {
            if (userPassword == userDatabase[i].password) {
                passwordFound = true;
                break
            };

        }

        if (userFound && passwordFound) {

            let userAccount = `

                                        Welcome ${usernameModified}
            
                New Post
                `;

            for (let i in usersTimeline) {
                userAccount += `
                ${usersTimeline[i].username}
                
                ${usersTimeline[i].timeline}
                ______________________________________________
                `};

            alert(userAccount);

        } else {
            alert('Error, Username or Password is incorrect, please try again or register.')
        }

    } else if (menu == '2') {

        const newUser = prompt('Insert your username');
        const newUsername = nameModifier(newUser);
        const newPassword = prompt('Insert your password');

        if (newUser && newPassword) {
            userDatabase.push({
                username: newUsername,
                password: newPassword
            });

            alert('Account Created Successfully');

        } else {
            alert('Insert valid values')
        };






    } else if (menu == '3') {
        alert('Thanks for select us')
        logout = true;
    }


}

