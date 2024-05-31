import React, { useEffect } from 'react';
import './Sparks.css';

const Sparks = ({ startLocation,animationcount, startAnimation, color }) => {

    useEffect(() => {
        const createSpark = () => {
            const xTranslate = Math.random() * 400 - 200;
            const initialYUp = Math.random() * 150 + 25;
            const scale = Math.random() * 1 + 0.5;

            // Calculate finalYDown relative to window height
            const windowHeight = "500px";
            const finalYDown = "500px";

            // Create a unique animation name
            const rawAnimationName = `spark-animation-${new Date().getTime()}-${Math.random()}`;
            const animationName = rawAnimationName.replace(/[^\w-]/g, '');

            // Dynamically create and inject CSS keyframes rule
            const keyframes = `@keyframes ${animationName} {
                0%, 25% {
                    opacity: 0.5;
                    transform: translate(0px, 0px) scale(${scale});
                }
                99% {
                    opacity: 1;
                    transform: translate(${xTranslate}px, -${initialYUp}px);
                }
                100% {
                    opacity: 0.2;
                    transform: translate(${xTranslate}px, ${finalYDown}px) scale(1);
                }
            }`;

            const styleSheet = document.styleSheets[0];
            try {
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
            } catch (e) {
                console.error('Failed to insert CSS rule:', e);
                console.log('Rule Text:', keyframes);
                return;
            }

            // Create and configure the spark element
            const spark = document.createElement('div');
            spark.className = `Spark ${color}`;
            spark.style.left = `${startLocation.x}px`;
            spark.style.top = `${startLocation.y}px`;
            spark.style.transform = `scale(${scale})`;
            spark.style.animation = `${animationName} 1.2s ease-in-out forwards`;

            // Append spark to container
            const sparksContainer = document.querySelector('.Sparks-container');
            if (sparksContainer) {
                sparksContainer.appendChild(spark);
                setTimeout(() => {
                    spark.remove();
                    // Optionally remove the CSS rule after animation ends
                    styleSheet.deleteRule(styleSheet.cssRules.length - 1);
                }, 1500);
            }
        };

        if (startAnimation) {
            const numSparks = Math.floor(Math.random() * 3) + 5;
            for (let i = 0; i < numSparks; i++) {
                createSpark();
            }
        }
    }, [startAnimation, animationcount, color]);

    return (
        <div className="Sparks-container" />
    );
};

export default Sparks;
