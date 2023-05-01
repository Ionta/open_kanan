

class FilterStore{
    Filter = null;
    subscribers = [];

    change(value){
        this.Filter = value;
        for(let subscribe of this.subscribers){
            subscribe();
        }
    }

    subscribe(func){
        this.subscribers.push(func);
    }

}

const filterStore = new FilterStore();

export default filterStore;