import React from 'react'

const Header = () => {
  return (
    <div className="headerSection">
        <div className="left">
            <div className="title">
                <h2>shopping mall</h2>
        </div>
        </div>
        <div className="center">
              <ul>
               <li>Women</li> 
               <li>Men</li>
               <li>children</li>
               <li>beauty</li>
              </ul>
            </div>
            <div className='search'>
                <input type="search" placeholder="search"/>
            </div>
        <div className="right">
            <div className="signin"></div>
                 Signin/Signup
        </div>
        <div className="cart">
            Cart
        </div>
        </div>
        
  )
}

export default Header;
