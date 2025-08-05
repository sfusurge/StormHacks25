import React, { useState, useEffect, useRef } from 'react';

interface ScrollingTextProps {
    text: string;
    className?: string;
}

export const ScrollingText: React.FC<ScrollingTextProps> = ({text, className}) => {
    const speed = 40;
    const pauseDuration = 1500;

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const textElement = textRef.current;

        if (!container || !textElement){
            return;
        }

        const containerWidth = container.offsetWidth;
        const textWidth = textElement.scrollWidth;

        const needsScrolling = textWidth > containerWidth;
        setShouldScroll(needsScrolling);

        if (!needsScrolling) {
            setTranslateX(0);
            return;
        }

        const maxScroll = textWidth - containerWidth;
        let currentPosition = 0;
        let direction = 1;
        let lastTime = Date.now();
        let pauseEndTime = 0;

        const animate = () => {
            const now = Date.now();
            const deltaTime = now - lastTime;
            lastTime = now;

            if (pauseEndTime > now) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const moveDistance = (speed * deltaTime) / 1000;
            currentPosition += moveDistance * direction;

            if (currentPosition >= maxScroll) {
                currentPosition = maxScroll;
                direction = -1;
                pauseEndTime = now + pauseDuration;
            } else if (currentPosition <= 0) {
                currentPosition = 0;
                direction = 1;
                pauseEndTime = now + pauseDuration;
            }

            setTranslateX(-currentPosition);
            animationRef.current = requestAnimationFrame(animate);
        };

        const timeout = setTimeout(() => {
            pauseEndTime = Date.now() + pauseDuration;
            animationRef.current = requestAnimationFrame(animate);
        }, pauseDuration);

        return () => {
            clearTimeout(timeout);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [text, speed, pauseDuration]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            style={{ width: '100%' }}
        >
            <div
                ref={textRef}
                className="whitespace-nowrap transition-transform duration-100 ease-linear"
                style={{
                    transform: shouldScroll ? `translateX(${translateX}px)` : 'translateX(0px)',
                }}
            >
                {text}
            </div>
        </div>
    );
};