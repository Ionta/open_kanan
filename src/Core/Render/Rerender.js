export function rerenderComponents(query){
    let columns = document.querySelectorAll(query);
    for(let i = 0; i < columns.length; i++){
        let column = columns.item(i);
        column.render();
    }
}