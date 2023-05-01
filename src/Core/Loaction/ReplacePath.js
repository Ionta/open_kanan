import eventBus from "../EventBus.js"

export const ReplacePath = "replacePath"; 

export function replacePath(path){
    window.location.search = "?"+path;
    eventBus.dispatchEvent(ReplacePath,{new:path});
}