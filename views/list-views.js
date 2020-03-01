const lists_view = ((data) => {
    let html = `
    <html>
    <body>
        Logged in as user: ${data.user_name}
        <form action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>`;


    data.lists.forEach((list) => {
        html += list.text;
        html += `
            <form action="delete-list" method="POST">
                <input type="hidden" name="list_id" value="${list._id}">
                <button type="submit">Delete Item</button>
            </form>
            `;
    });

    html += `
        <form action="/add-list" method="POST">
            <input type="text" name="list">Product <br>
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