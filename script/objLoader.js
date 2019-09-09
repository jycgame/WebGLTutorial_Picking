function objLoader() {

    this.meshes = [];

    this.load = function(path, callback) {
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function() {
           if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
              var txt = xmlHttpRequest.responseText;

              var lines = txt.split('\n');

              //ignore lines not contain vertices
              var index = 0;
              while(lines[index].indexOf('v ') == -1) {
                 index++;
              }

              //1， 读取顶点数据
              vertices = [];
              while(lines[index].indexOf('v ') == 0) {
                 //这里是每一个顶点数据
                 var str = lines[index];
                 var values = str.split(' ');
                  
                 vertices.push(parseFloat(values[1]));
                 vertices.push(parseFloat(values[2]));
                 vertices.push(parseFloat(values[3]));

                 index++;
              }

              //2，读取uv数据
              uvs = [];
              while(lines[index].indexOf('vt ') == 0) {
                 var str = lines[index];
                 var values = str.split(' ');

                 uvs.push(parseFloat(values[1]));
                 uvs.push(parseFloat(values[2]));
                 index++;
              }

              //3，处理法线数据
              var normals = [];
              while(lines[index].indexOf('vn ') == 0) {
                 var str = lines[index];
                 var values = str.split(' ');

                 normals.push(parseFloat(values[1]));
                 normals.push(parseFloat(values[2]));
                 normals.push(parseFloat(values[3]));
                 index++;
              }

              while(lines[index].indexOf('f ') == -1) {
                 index++;
              }
               
              //3，处理顶点索引：位置和UV，法线
              while(lines[index].indexOf('f ') == 0) {
                 var line = lines[index];
                 var values = line.split(' ');

                 if (values.length == 5) {
                    // first vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[1]);
                    // second vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[2]);
                    // third vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[3]);

                    //第二个三角形
                    // 1st vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[1]);
                    // 2nd vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[3]);
                    // 3rd vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[4]); 
                 }
                 else if(values.length == 4) {
                    // first vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[1]);
                    // second vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[2]);  
                    // third vertex
                    extractAndProcessVertex(vertices, uvs, normals, values[3]);
                 }
                 else {
                    console.log("Impossible!");
                 }

                 index++;
              }

              vertices = getPositionArray();
              uvs = getUvArray();
              indices = getIndexArray();

              var mesh = new mesh();
              mesh.setProperty("Vertices", vertices);
              mesh.setProperty("UVs", uvs);
              mesh.setProperty("Indices", indices);

              this.meshes.push(mesh);

              if (callback) {
                  callback(this);
              }
           }
        
        }
        xmlHttpRequest.open("GET", path);
        xmlHttpRequest.send();         
    };
}