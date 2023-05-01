function render(node, content){
    let root = document.createElement("div");
    root.innerHTML = content;
    node.appendChild(root);
    updateInTemplate(root);
    updateInFile(root);
}

function updateInTemplate(root){
    let templates = root.getElementsByTagName("template");
    for(let i = 0; i < (templates?.length ?? 0); i++){
        let item = templates.item(i).content;
        let scriptTemplate = item.querySelector("script");
        if(scriptTemplate){
            let newScript = updateJs(scriptTemplate);
            item.removeChild(scriptTemplate);
            item.appendChild(newScript);
        }
    }
}

function updateInFile(root){
    let scripts = root.children;
    for(let i = 0; i < (scripts?.length ?? 0); i++){
        console.log(scripts[i].tagName);
        if(scripts[i].tagName === "SCRIPT"){
            let newScript = updateJs(scripts[i]);
            document.body.appendChild(newScript);
        }
    }
}

function updateJs(script){
    let script1 = document.createElement('script');
    script1.setAttribute("type", script.type);
    script1.text = script.text;
    return script1;
}

export default render;
