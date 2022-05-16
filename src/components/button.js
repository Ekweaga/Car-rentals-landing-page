import React from 'react'
import './button.css'
function Button({imps,text,link}) {
  return (
    <div className={`button ${imps=="secondary" ? "button_white": "" }`}>
        <a href={link}>{text}</a>
    </div>
  )
}

export default Button