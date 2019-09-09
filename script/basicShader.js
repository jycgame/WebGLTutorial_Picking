function basicShader(gl) {
    var vertCode =
        'attribute vec3 aVertexPosition;' + 
        'attribute vec2 aTextureCoord; ' + 
        'varying highp vec2 vTextureCoord; ' +
        'uniform mat4 modelTransform;' +
        'uniform mat4 viewTransform;' +
        'uniform mat4 projectionTransform;' +
        'void main(void) {' + 
        ' gl_Position = projectionTransform * viewTransform * modelTransform * vec4(aVertexPosition, 1.0);' + 
        ' vTextureCoord = aTextureCoord; ' + 
        '}';

    var fragCode = 
        'varying highp vec2 vTextureCoord; ' +
        'uniform sampler2D uSampler; ' + 
        'void main(void) {' + 
        ' gl_FragColor = texture2D(uSampler, vTextureCoord); ' + 
        '}';

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);

    this.shaderProgram = gl.createProgram();
    gl.attachShader(this.shaderProgram, vertShader); 
    gl.attachShader(this.shaderProgram, fragShader);
    gl.linkProgram(this.shaderProgram);
}