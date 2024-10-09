export async function loadCardItems(subTypeItem) {
    const response = await fetch(`http://localhost:36155/good-search/${subTypeItem}`);

    if (!response.ok) {
        throw new Error("Ошибка загрузки списка товара");
    }

    const goods = await response.json();

    let table = document.getElementById("table");

    for (let i = 0; i < goods.length; i++) {
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.classList = "card h-100";

        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${goods[i].Image}`;
        image.alt = goods[i].Title;
        
        let cardBody = document.createElement("div");
        cardBody.classList = "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitel = document.createElement("h5");
        cardTitel.classList = "card-title";
        cardTitel.textContent = goods[i].Title;

        let cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.textContent = goods[i].Description; 

        let price = document.createElement("p");
        price.classList = "card-text";
        price.textContent = goods[i].Price;

        let wrapButton = document.createElement("div");
        wrapButton.classList = "d-flex";

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Подробнее";

        if (goods.length > 1) {

            wrapper.appendChild(cardTitel);
            wrapper.appendChild(cardText);
            wrapper.appendChild(price);
            wrapButton.appendChild(button);
            cardBody.appendChild(wrapper);
            cardBody.appendChild(wrapButton);
            card.appendChild(image);
            card.appendChild(cardBody);
            col.appendChild(card);

            table.appendChild(col);

        } else {
            cardTitel.classList += " text-center";

            wrapper.appendChild(cardTitel);
            wrapper.appendChild(price);
            cardBody.appendChild(wrapper);
            table.appendChild(image);
            table.appendChild(cardBody);
        }

    }
}
function painCard(data) {
    

    let listParts = data[i].Description.split("\r\n");
    for (let j = 0; j < listParts.length; j++) {
        if (listParts[j]) {
            let cardText = document.createElement("p");
            cardText.classList = "card-text";
            if (j % 3 == 0) {
                cardText.classList += "font fw-bold";
            }
            cardText.textContent = listParts[j];

            wrapper.appendChild(cardText);
        }
    }
}