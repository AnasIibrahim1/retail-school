"use client"
import React from "react";

export type OverlayIconButtonProps = {
    label: string;
    onClick?: () => void;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    className?: string;
};

export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
);

export default function OverlayIconButton({ label, onClick, Icon, className }: OverlayIconButtonProps) {
    return (
        <button aria-label={label} onClick={onClick} className={className} style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            background: '#2F2D51',
            color: '#fff',
            border: 'none',
            outline: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        }}>
            <Icon width={18} height={18} />
        </button>
    );
}


