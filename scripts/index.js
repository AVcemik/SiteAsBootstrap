import { drawNavbar } from "./modules/loadTemplates.js";
import { loadCardItems } from "./modules/loadContentModule.js";
import { authorization } from "./modules/authorization.js";
import { registration } from "./modules/registratioModule.js";

document.addEventListener('DOMContentLoaded', async () => {
    await drawNavbar();
    authorization();
    
    let uri = document.documentURI.split('/');
    let searchInput = document.getElementById('searchInput');
    let searchKey = uri[uri.length - 1].split('.')[0];
    
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        localStorage.setItem('searchKey', searchInput.value);
    })
    
    let urlPart = uri[uri.length - 1];
    if (urlPart === 'search.html' || urlPart === 'search.html?') {
        loadCardItems(localStorage.getItem('searchKey'));
    }
    else if (urlPart === 'registration.html' || urlPart === 'registration.html?') {
        registration();
    }
    else {
        loadCardItems(searchKey);
    }
})
