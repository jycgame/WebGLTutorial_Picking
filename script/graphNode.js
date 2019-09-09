// p(ostion): vec3; r(otation): vec3, in angle; s(cale):vec3
function graphNode(p, r, s) {
    this.position = p || glMatrix.vec3.create();
    
    var x = 0, y = 0, z = 0;
    if (r) {
        x = glMatrix.glMatrix.toRadians(r[0]);
        y = glMatrix.glMatrix.toRadians(r[1]);
        z = glMatrix.glMatrix.toRadians(r[2]);
    }
    var quaternion = glMatrix.quat.create();
    glMatrix.quat.fromEuler(quaternion, x, y, z);
    this.rotation = quaternion;

    this.scale = s || glMatrix.vec3.fromValues(1, 1, 1);
}