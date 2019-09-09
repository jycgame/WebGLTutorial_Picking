function shaderManager(gl) {
    this.shaderMap = new Map();

    var shader = new basicShader(gl);
    this.shaderMap.set("default/basicShader", shader);
}