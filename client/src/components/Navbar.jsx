import React from 'react'
import { menuItems } from '../utils/menuItems'
import { signout } from '../utils/icons'
import "./components.css"

const Navbar = ({active, setactive}) => {

  return (
    <div className="navbar">
        <div className="user-profile">
            <img src="melvinoh.jpg" alt="img" />
            <div className="text">
                <h3>welcome back</h3>
                <p>Melvin</p>
            </div>
        </div>
        <div className="menuitems">
            {
                menuItems.map((item) =>{
                    return <li key={item.id} onClick={() => setactive(item.id)} className={active === item.id ? 'active' : '' }>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })
            }
        </div>
        <div className="bottom-nav">
            <li>
                {signout}
                <span>sign out</span>
            </li>
        </div>

    </div>
  )
}

export default Navbar