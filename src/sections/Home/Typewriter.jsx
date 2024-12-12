import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings, delay = 150, pause = 1500 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index >= strings.length) return;
        if (subIndex === strings[index].length + 1 && !reverse && setTimeout(() => setReverse(true), pause)) return;

        if (
        subIndex === 0 &&
        reverse &&
        setTimeout(() => {
            setReverse(false);
            setIndex((prev) => (prev + 1) % strings.length);
        }, pause)
        )
        return;

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, delay, pause, strings]);

    useEffect(() => {
        const timeout = setTimeout(() => {setBlink((prev) => !prev);}, 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    return (
        <p>
        {`${strings[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </p>
    );
};

export default Typewriter;
