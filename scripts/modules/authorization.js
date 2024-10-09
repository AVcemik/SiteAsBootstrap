export async function authorization() {
    const authorization = document.getElementById('authorization');

    const name = document.getElementById('Name');
    const password = document.getElementById('Password');

    authorization.addEventListener('click', async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:36155/enter', {
                method: 'POST',
                body: JSON.stringify({
                    Name: name.value,
                    Password: password.value
                })
            });
    
            if (!response.ok) {
                throw new Error("Ошибка ответа от сервера на авторизацию");
            }
    
            const responseFromTheServer = await response.text();
            alert(responseFromTheServer);
            
        } catch (error) {
            console.log(`Возникла ошибка при авторизации ${error}`);
        }
    });
}