class EventBus {
  eventHandlers = new Map;

  registerHandler(eventName, handler) {
        const collection = this.eventHandlers.get(eventName);
        if(collection){
            collection.push(handler);
        }
        else{
            this.eventHandlers.set(eventName, [handler]);
        }
  }

  unregisterHandler(eventName, handler) {
        const collection = this.eventHandlers.get(eventName);
        if(collection){
            const index = collection.indexOf(handler);
            if (index !== -1) {
                collection.splice(index, 1);
            }   
        }
  }

  dispatchEvent(eventName, event) {
        const collection = this.eventHandlers.get(eventName);
        if(collection){
            collection.forEach((handler) => {
                handler(event);
            });
        }
  }
}

const eventBus = new EventBus();

export default eventBus;