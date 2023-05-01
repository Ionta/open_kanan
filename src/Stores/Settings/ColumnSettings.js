export function getColumnSetting(items) { 
    return {
        querySelector: (item) => `column-board[entity="${item.id}"]`,
        items: items,
        idAttribute: "entity",
        onCreate: (item) =>{
            let boards = document.getElementById('boards');
            let board = document.createElement('column-board');
            board.setAttribute("entity", item.id);
            board.setAttribute("onCreate", `createDiologOpen(${item.id})`)
            board.title = item.name;
            boards.appendChild(board);
        }
    }
}