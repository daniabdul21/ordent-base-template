import react from "react";

interface LabelProps {
  label : string;
  size?: 'small' | 'medium' | 'large';
}

export const Label = ({label, size} : LabelProps) => {
  let newSize = 'text-sm';
  if(size == 'medium') {
    newSize = 'text-lg';
  }
  if(size == 'large') {
    newSize = 'text-2xl';
  }
  return <label htmlFor="email" className={`block ${newSize} font-medium text-gray-900`}>{label}</label>;
}
