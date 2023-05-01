import ListStore from "./Store.js"

const boardListStore = new ListStore();
boardListStore.url = "/board/getallboards";

export default boardListStore;