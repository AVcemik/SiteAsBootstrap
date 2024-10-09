class User {
    constructor(Name, Email, Password, BirthDate) {
        this.Name = Name;
        this.Email = Email;
        this.Password = Password;
        this.BirthDate = BirthDate;
    }
};

export function registration() {
    let name = document.getElementById('Name');
    let email = document.getElementById('Email');
    let password = document.getElementById('Password');
    let brithDay = document.getElementById('BirthDate');
    let registrationButton = document.getElementById("registrationButton");

    registrationButton.addEventListener("click", (event) => {
        event.preventDefault();

        let newUser = JSON.stringify(new User(name.value, email.value, password.value, brithDay.value));

        fetch('http://localhost:36155/registration', {
            method: 'POST',
            body: newUser
        })
            .then(response => {
                if (200 >= response.status < 300) {
                    return response.json();
                } else {
                    return Promise.reject(new Error(response));
                }
            })
            .then(data => {
            })
            .catch(error => {

            });
    });
}


