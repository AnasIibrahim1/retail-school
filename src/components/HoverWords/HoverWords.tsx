"use client"
import React from "react";

type HoverWordsProps = {
    text: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function HoverWords({ text, className, style }: HoverWordsProps) {
    const words = React.useMemo(() => text.split(/(\s+)/), [text]);
    return (
        <span className={className} data-cursor="text" style={{ display: 'inline', lineHeight: 1.4, ...style }}>
            {words.map((token, index) => {
                const isSpace = /^\s+$/.test(token);
                if (isSpace) {
                    return <span key={index}>{token}</span>;
                }
                return (
                    <span key={index} className="hover-word" data-cursor="text">
                        <span className="hover-word__bg" aria-hidden="true" />
                        <span className="hover-word__text">{token}</span>
                    </span>
                );
            })}
        </span>
    );
}


