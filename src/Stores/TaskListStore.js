import ListStore from "./Store.js"

const taskListStore = new ListStore();
taskListStore.url = "/board/gettasks";

export default taskListStore;