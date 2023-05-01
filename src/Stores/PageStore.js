import { post } from "../Core/Api/Api.js";

class PageStore{
    id;
    subscribers = [];
    urlLoad;
    urlSave;
    urlNew;

    async new(data){
        let response = await post(this.urlNew, data);
        return response;
    }

    async save(data){
        data["id"] = this.id;
        let response = await post(this.urlSave, data);
        return response;
    }

    async load(data){
        let response = await post(this.urlLoad, data);
        if(response){
            this.id = response.id;
            for(let subscribe of this.subscribers){
                subscribe(response);
            }
        }
    }
}

export default PageStore;