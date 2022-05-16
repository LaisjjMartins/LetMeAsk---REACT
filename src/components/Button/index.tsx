import React, {ButtonHTMLAttributes} from 'react';
import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; 
// interface typescript

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} /> //Repasse de todas as propedades, spredoperations
  )
}