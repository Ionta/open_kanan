async function LoadFile(path) {
    let response = await fetch(path);
    let text = await response.text();
    return text;
}

export default LoadFile;