const lists_view = ((data) => {
    let html = `
    <html>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <h2> Shopping lists </h2>
    <body>
        Logged in as user: ${data.user_name}
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;

        html += `
        <form action="/" method="GET">
            <button type="submit">Back</button>
        </form>`;
        
    data.lists.forEach((list) => {
        html += `item name:  `+list.text;
        html += `<br>`;
        html += `quantity:  `+list.number;
        html += `<br>`;
    });

    html += `
        <form action="/add-list" method="POST">
        Product<br>
        <input type="text" name="list"><br>
        Quantity<br>
        <input type="number" name="number"><br>


            <button type="submit">Add Item</button>
        </form>
    </html>
    </body>
    `;
    return html;
});


const list_view = (data) => {
    let html = `
    <html>
    <body>
        List text: ${data.text}
        List number: ${data.number}
    </body>
    </html>
    `;
    return html;
};

module.exports.lists_view = lists_view;
module.exports.list_view = list_view;

// mun postaus postaa väärän