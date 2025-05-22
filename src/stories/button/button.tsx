import React from "react";

interface ButtonProps {
  bgColorButton?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: '0%' | '25%' | '50%' | '75%' | '100%';
  label?: string;
}

export const Button = ({bgColorButton, size = 'small', rounded, label} : ButtonProps) => {
  let newStyleSize = '';
  if (['small', 'medium'].includes(size)) {
    newStyleSize = size == 'small' ? 'text-sm py-1.5 px-2.5' : 'text-lg py-2 px-2.5';
  }
  if(size == 'large'){
    newStyleSize = 'px-4 py-4 text-2xl';
  }

  return <button style={{backgroundColor : bgColorButton, borderRadius : rounded}} type="button" className={`${newStyleSize} font-semibold text-white shadow-sm`}>{label}</button>
}
