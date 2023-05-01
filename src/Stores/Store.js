import { post } from "../Core/Api/Api.js";

class ListStore{
    subscribers = [];
    url;

    async load(data){
        let response = await post(this.url, data);
		if(response.count !== 0){
            let first = true;
			for(let item of response.items){
                for(let subscribe of this.subscribers){
                    subscribe(item, first);
                }
                first = false;
			}
		}
    }
}

export default ListStore;