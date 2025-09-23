import React from 'react';
import './GradiantButton.css';

// A reusable box with a gradient border. You can pass any JSX as children.
export default function GradiantButton({
  children,
  color1 = '#4F5DE4',
  color2 = '#F57005',
  fadeToTransparent = false,
  borderWidth = '2px',
  borderRadius = '12px',
  backgroundColor = '#ffffff',
  padding = '16px',
  width = 'fit-content',
  height = 'fit-content',
  alignItems = 'center',
  justifyContent = 'center',
  style = {},
  role = 'button',
  ariaLabel,
}) {
  const toTransparent = (hexColor) => {
    const normalized = hexColor.trim();
    // If already rgba or named color, return transparent
    if (normalized.startsWith('rgb') || normalized.toLowerCase() === 'transparent') {
      return 'rgba(0,0,0,0)';
    }
    // #RGB or #RRGGBB
    const hex = normalized.replace('#', '');
    const isShort = hex.length === 3;
    const r = parseInt(isShort ? hex[0] + hex[0] : hex.slice(0, 2), 16);
    const g = parseInt(isShort ? hex[1] + hex[1] : hex.slice(2, 4), 16);
    const b = parseInt(isShort ? hex[2] + hex[2] : hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0)`;
  };

  const endColor = fadeToTransparent ? toTransparent(color1) : color2;

  return (
    <div
      className="gradient-border-box"
      role={role}
      aria-label={ariaLabel}
      style={{
        '--c1': color1,
        '--c2': endColor,
        '--angle': '180deg',
        '--radius': borderRadius,
        '--border': borderWidth,
        '--bg': backgroundColor,
        '--padding': padding,
        '--ai': alignItems,
        '--jc': justifyContent,
        width,
        height,
        ...style,
      }}
    >
      <div className="gradient-border-box__inner">
        {children}
      </div>
    </div>
  );
}