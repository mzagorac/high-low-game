import React, { useEffect, useRef } from 'react';

const CanvasTest = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = 600;

        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = 'back-card.png';
        
        image.addEventListener('load', function() {
            const position = [100, 100];
            const dim = [200, 300];
            let dx = 15;
            let scalingx = 0.75;
            let scalingy = 1;

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                position[0] += dx;
                dim[0] -= scalingx;
                dim[1] -= scalingy;
                
                if (position[0] == 700)  dx = 0
                if (dim[1] == 200) {
                    scalingx = 0;
                     scalingy = 0
                }
                requestAnimationFrame(draw);
                ctx.drawImage(image, ...position, ...dim)
            }

            draw();


        }, false)
    }, []);



    return <canvas ref={canvasRef}>Your browser does not support canvas</canvas>
};

export default CanvasTest;