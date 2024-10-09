export async function drawNavbar() {
    try {
        const response = await fetch('/pages/templates/navbar.html');
        
        if(!response.ok) {
            throw new Error("Ошибка загрузки шаблона панели навигации");
        }
        
        const html = await response.text();
        document.getElementById('navbar').innerHTML = html;
        
    } catch (error) {
        console.log(`Ошибка загрузки шаблона панели навигации: ${error}` );
    }
}