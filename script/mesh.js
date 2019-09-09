function mesh() {

    this.setProperty = function(propertyName, values) {
        if (propertyName == "Vertices") {
            this.vertices = values || null;
        }
        else if (propertyName == "UVs") {
            this.UVs = values || null;
        }
        else if (propertyName == "Normals") {
            this.normals = values || null;
        }
        else if (propertyName == "Indices") {
            this.indices = values || null;
        }
    }
}