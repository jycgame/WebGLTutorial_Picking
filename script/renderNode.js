function renderNode() {

}

renderNode.prototype = Object.create(graphNode.prototype);
Object.defineProperty(graphNode.prototype, 'constructor', { 
    value: graphNode, 
    enumerable: false,
    writable: true });