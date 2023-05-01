import ListStore from "./Store.js"

const priorityStore = new ListStore();
priorityStore.url = "/board/getlookuplist";

export default priorityStore;