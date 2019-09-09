function sceneGraph() {
    this.graphNodes = [];

    // functions
    this.addGraphNode = function(node) {
        this.graphNodes.push(node);
    };

    this.preRender = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].preRender) {
                graphNodes[i].preRender();
            }
        }
    };

    this.render = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].render) {
                graphNodes[i].render();
            }
        }
    };

    this.postRender = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].postRender) {
                graphNodes[i].postRender();
            }
        }
    };

    this.beforeUpdate = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].beforeUpdate) {
                graphNodes[i].beforeUpdate();
            }
        }
    };

    this.update = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].update) {
                graphNodes[i].update();
            }
        }
    };

    this.postUpdate = function() {
        for(var i = 0; i < this.graphNodes.length; ++i) {
            if (graphNodes[i].postUpdate) {
                graphNodes[i].postUpdate();
            }
        }
    }
}