function aabb() {
    // 8 vertices of a box
    this.vertices = [];

    // vertices: array of glMatrix.vec3
    this.computeFromVertices = function(vertices) {
        var minx = maxx = vertices[0][0];
        var miny = maxy = vertices[0][1];
        var minz = maxz = vertices[0][2];        

        for (var i = 1; i < vertices.length; ++i) {
            if (vertices[i][0] < minx) minx = vertices[i][0];
            if (vertices[i][1] < miny) miny = vertices[i][1];
            if (vertices[i][2] < minz) minz = vertices[i][2];

            if (vertices[i][0] > maxx) maxx = vertices[i][0];
            if (vertices[i][1] > maxy) maxy = vertices[i][1];
            if (vertices[i][2] > maxz) maxz = vertices[i][2];
        }

        this.vertices.push(glMatrix.vec3.fromValues(minx, miny, minz));
        this.vertices.push(glMatrix.vec3.fromValues(maxx, miny, minz));
        this.vertices.push(glMatrix.vec3.fromValues(maxx, miny, maxz));
        this.vertices.push(glMatrix.vec3.fromValues(minx, miny, minz));

        this.vertices.push(glMatrix.vec3.fromValues(maxx, maxy, maxz));
        this.vertices.push(glMatrix.vec3.fromValues(minx, maxy, maxz));
        this.vertices.push(glMatrix.vec3.fromValues(minx, maxy, minz));
        this.vertices.push(glMatrix.vec3.fromValues(maxx, maxy, minz));
    }
}