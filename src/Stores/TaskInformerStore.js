import PageStore from "./PageStore.js";

const taskInformerStore = new PageStore();

taskInformerStore.urlLoad = "/Board/taskinfo";
taskInformerStore.urlSave = "/Board/savetask";
taskInformerStore.urlNew = "/Board/createtask"

export default taskInformerStore;