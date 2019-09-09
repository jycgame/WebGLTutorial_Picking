function ray(o, d) {
    this.o = o;
    this.d = d;

    this.intersectSphere = function(center, radius) {
        // direction: from camera to sphere center
        var v = glMatrix.vec3.create();
        glMatrix.vec3.sub(v, this.o, center);

        var b = glMatrix.vec3.dot(this.d, v);
        var c = glMatrix.vec3.dot(v, v) - radius * radius;
        var b_squared_minus_c = b * b - c;

        if (b_squared_minus_c < 0) {
            return false;
        }

        if (b_squared_minus_c > 0) {
            var ta = -b + Math.sqrt(b_squared_minus_c);
            var tb = -b - Math.sqrt(b_squared_minus_c);
            if (ta < 0) {
                if (tb < 0) {
                    return false;
                }
            }
            
            return true;
        }

        console.log("aaaaaaaaaaaaallsdjfls");
    }
}