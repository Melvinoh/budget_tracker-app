import React from 'react'


const Button = ({name, icon, onClick, bg, bpad,color,brad}) => {
    const buttonStyle = {
        background:`${bg}`,
        padding:`${bpad}`,
        borderRadius:`${brad}`,
        color:`${color}`
    }
    console .log(icon)
  return (
        <button className="button" style={buttonStyle} onClick={onClick}>
            {icon}
            <span>{name}</span>
        </button>
  )
}

export default Button