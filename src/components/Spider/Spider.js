import React, { useEffect, useRef, useState } from 'react';
import './Spider.css';

const Spider = () => {
    const spiderRef = useRef(null);
    const webRef = useRef(null);
    const [isClimbing, setIsClimbing] = useState(false);

    useEffect(() => {
        const animateSpider = () => {
            const spider = spiderRef.current;
            const web = webRef.current;

            if (!spider || !web) return;

            let spiderTop = parseFloat(window.getComputedStyle(spider).top);
            const gravity = 9.8;
            const climbSpeed = 1;
            const maxFallPosition = window.innerHeight * 0.4;

            if (isClimbing) {
                spiderTop -= climbSpeed;
                if (spiderTop <= 0) {
                    spiderTop = 0;
                    setIsClimbing(false);
                }
            } else {
                spiderTop += gravity;
                if (spiderTop >= maxFallPosition) {
                    spiderTop = maxFallPosition;
                    setIsClimbing(true);
                }
            }

            web.style.height = `${spiderTop + 50}px`;
            spider.style.top = `${spiderTop}px`;

            requestAnimationFrame(animateSpider);
        };

        animateSpider();
    }, [isClimbing]);

    return (
        <div className="spider-container">
            <div ref={spiderRef} className="spider">
                <div className="legs">
                    <div className="leg leg1"></div>
                    <div className="leg leg2"></div>
                    <div className="leg leg3"></div>
                    <div className="leg leg4"></div>
                    <div className="leg leg5"></div>
                    <div className="leg leg6"></div>
                    <div className="leg leg7"></div>
                    <div className="leg leg8"></div>
                </div>
                <div className="eye-left"></div>
                <div className="eye-right"></div>
                <div className="pupil-left"></div>
                <div className="pupil-right"></div>
                <div className="smile"></div>
                <div className="fang fang-left"></div>
                <div className="fang fang-right"></div>
                <div className="blood-left"></div>
            </div>
            <div ref={webRef} className="web"></div>
        </div>
    );
};

export default Spider;
