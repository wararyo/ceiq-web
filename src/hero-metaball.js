const D = {
    isPerformanceMode: false,
    init: function() {
        var canvas = document.getElementById("hero-metaball");
        var gl = canvas.getContext('webgl');

        var NUM_METABALLS = 24;
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;

        /**
         * Shaders
         */

        // Utility to fail loudly on shader compilation failure
        function compileShader(shaderSource, shaderType) {
            var shader = gl.createShader(shaderType);
            gl.shaderSource(shader, shaderSource);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
            }

            return shader;
        }

        var vertexShader = compileShader('\n\
        attribute vec2 position;\n\
        \n\
        void main() {\n\
            // position specifies only x and y.\n\
            // We set z to be 0.0, and w to be 1.0\n\
            gl_Position = vec4(position, 0.0, 1.0);\n\
        }\
        ', gl.VERTEX_SHADER);

        var fragmentShader = compileShader('\n\
        precision highp float;\n\
        uniform vec3 metaballs[' + NUM_METABALLS + '];\n\
        const float WIDTH = ' + WIDTH + '.0;\n\
        const float HEIGHT = ' + HEIGHT + '.0;\n\
        \n\
        void main(){\n\
            float x = gl_FragCoord.x;\n\
            float y = gl_FragCoord.y;\n\
            float v = 0.0;\n\
            for (int i = 0; i < ' + NUM_METABALLS + '; i++) {\n\
                vec3 mb = metaballs[i];\n\
                float dx = mb.x - x;\n\
                float dy = mb.y - y;\n\
                float r = mb.z;\n\
                v += r*r/(dx*dx + dy*dy);\n\
            }\n\
            if (v > 1.0) {\n\
                gl_FragColor = vec4(1.0, 1.0,\n\
                                        1.0, 1.0);\n\
            } else {\n\
                gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n\
            }\n\
        }\n\
        ', gl.FRAGMENT_SHADER);

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        /**
         * Geometry setup
         */

        // Set up 4 vertices, which we'll draw as a rectangle
        // via 2 triangles
        //
        //   A---C
        //   |  /|
        //   | / |
        //   |/  |
        //   B---D
        //
        // We order them like so, so that when we draw with
        // gl.TRIANGLE_STRIP, we draw triangle ABC and BCD.
        var vertexData = new Float32Array([
            -1.0,  1.0, // top left
            -1.0, -1.0, // bottom left
            1.0,  1.0, // top right
            1.0, -1.0, // bottom right
        ]);
        var vertexDataBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

        /**
         * Attribute setup
         */

        // Utility to complain loudly if we fail to find the attribute

        function getAttribLocation(program, name) {
            var attributeLocation = gl.getAttribLocation(program, name);
            if (attributeLocation === -1) {
                throw 'Can not find attribute ' + name + '.';
            }
            return attributeLocation;
        }

        // To make the geometry information available in the shader as attributes, we
        // need to tell WebGL what the layout of our data in the vertex buffer is.
        var positionHandle = getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionHandle);
        gl.vertexAttribPointer(positionHandle,
                            2, // position is a vec2
                            gl.FLOAT, // each component is a float
                            gl.FALSE, // don't normalize values
                            2 * 4, // two 4 byte float components per vertex
                            0 // offset into each span of vertex data
                            );

        /**
         * Simulation setup
         */

        var metaballs;
        var metaballsHandle;

        var setup = function() {
            metaballs = [];

            var scaleFactor = Math.max(Math.min(WIDTH / 800,1),0.65);

            metaballs.push({
                x: WIDTH/2,
                y: HEIGHT/2 + 64,
                z: 0,
                vx: 0,
                vy: 0,
                r: 220 * scaleFactor
            });

            for (var i = 1; i < NUM_METABALLS; i++) {
                var maxRadius = Math.min(HEIGHT/8,50);
                var radius = (Math.random() * 36 + 10) * scaleFactor;
                var dist = (Math.random() * 320 + 100) * scaleFactor;
                var angle = Math.random() * Math.PI * 2;
            metaballs.push({
                x: Math.cos(angle) * dist + WIDTH/2,
                y: Math.sin(angle) * dist + HEIGHT/2 + 100,
                z: Math.random() * 1000,
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
                r: radius
            });
            }

            /**
             * Uniform setup
             */

            // Utility to complain loudly if we fail to find the uniform
            function getUniformLocation(program, name) {
                var uniformLocation = gl.getUniformLocation(program, name);
                if (uniformLocation === -1) {
                    throw 'Can not find uniform ' + name + '.';
                }
                return uniformLocation;
            }
            metaballsHandle = getUniformLocation(program, 'metaballs');

        };

        /**
         * Simulation step, data transfer, and drawing
         */

        let frame = 0;//パフォーマンスモード時に使用
        var step = function() {
            if(D.isPerformanceMode) {
                frame++;
                if(frame % 2 == 0) {
                    requestAnimationFrame(step);
                    return;
                }
            }
            if(window.pageYOffset > HEIGHT-24) {//見えてないときは更新も描画もしない
                requestAnimationFrame(step);
                return;
            }
            // Update positions and speeds
            for (var i = 1; i < NUM_METABALLS; i++) {
                var mb = metaballs[i];

                //万有引力
                let dx = mb.x - WIDTH/2;
                let dy = mb.y - HEIGHT*0.55;
                let dist = Math.hypot(dx,dy);
                let GRAVITY = D.isPerformenceMode ? 0.0002 : 0.0001;
                mb.vx -= dx / dist * (GRAVITY * mb.r / dist*dist);
                mb.vy -= dy / dist * (GRAVITY * mb.r / dist*dist);
                
                //移動と折り返し
                mb.x += mb.vx;
                /*if (mb.x - mb.r < 24) {
                    mb.x = mb.r + 1;
                    mb.vx = Math.abs(mb.vx);
                } else if (mb.x + mb.r > WIDTH - 24) {
                    mb.x = WIDTH - mb.r;
                    mb.vx = -Math.abs(mb.vx);
                }*/
                mb.y += mb.vy;
                /*if (mb.y - mb.r < 24) {
                    mb.y = mb.r + 1;
                    mb.vy = Math.abs(mb.vy);
                } else if (mb.y + mb.r > HEIGHT - 24) {
                    mb.y = HEIGHT - mb.r;
                    mb.vy = -Math.abs(mb.vy);
                }*/
            }
            
            // To send the data to the GPU, we first need to
            // flatten our data into a single array.
            var dataToSendToGPU = new Float32Array(3 * NUM_METABALLS);
            for (var i = 0; i < NUM_METABALLS; i++) {
                var baseIndex = 3 * i;
                var mb = metaballs[i];
                var zToDevideBy = 1.0 ;//+ mb.z * 0.004;
                dataToSendToGPU[baseIndex + 0] = mb.x / zToDevideBy;
                dataToSendToGPU[baseIndex + 1] = mb.y / zToDevideBy;
                dataToSendToGPU[baseIndex + 2] = mb.r;
            }
            gl.uniform3fv(metaballsHandle, dataToSendToGPU);
            //gl.clearColor(0.0,0.0,0.0,0.0);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(step);
        };

        var resizeTimer = 0;
        window.addEventListener('resize', function(){
            if (resizeTimer > 0) {
                clearTimeout(resizeTimer);
              }
             
            resizeTimer = setTimeout(function(){
                if(WIDTH !== window.innerWidth) {
                    WIDTH = window.innerWidth;
                    HEIGHT = window.innerHeight;
                    setup();
                }
            }, 200);
        });
        setup();
        step();
    }
};

export { D as default };