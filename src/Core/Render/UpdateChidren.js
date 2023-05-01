export class UpdateSetting{
    querySelector;
    items;
    onCreate;
    idAttribute;
    isRerender;
}

export function updateChildren(node, setting, dependencies){
    if(setting.items.lenght !== 0){
        for(let item of setting.items){
            let child = node.querySelector(setting.querySelector(item));
        
            if(child && setting.isRerender && setting.isRerender(child, item)){
                node.removeChild(child);
                setting.onCreate(item);
                continue;
            }

            if(dependencies && child){
                for(let dep of dependencies){
                    let attribute = child.getAttribute(dep);
                    if(attribute != item[dep] && attribute != undefined){
                        child.setAttribute(dep, item[dep]);
                    }
                }
            }

            if(child == null){
                setting.onCreate(item);
            }
        }
    }
    let children = node.children;
    for(let i = 0; i < children.length; i++){
        let child = children.item(i);
        let entity = child.getAttribute(setting.idAttribute);
        let current = setting.items.find(item => item.id == entity);
        
        if(current == null){
            node.removeChild(child);
        }
    }
}