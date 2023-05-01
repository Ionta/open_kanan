import ListStore from "./Store.js"

const columnsListStore = new ListStore();

columnsListStore.url = "/Board/getboards";

export default columnsListStore;