import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (<nav className=' flex justify-between container mx-auto bg-orange-600 p-4'>
    <div>
      <ul className=' flex space-x-3 '>
        <li>
          <NavLink to={'/Home'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/Products'}>Products</NavLink>
        </li>
        <li>
          <NavLink to={'/Categories'}>Categories</NavLink>
        </li>
        <li>
          <NavLink to={'/Carts'}>Carts</NavLink>
        </li>

      </ul>
    </div>

    <div className='flex gap-4'>
      <ul className=' flex items-center gap-5'>
        <li>
          <i className='fa-brands fa-facebook-f'></i>
        </li>
        <li>
          <i className='fa-brands fa-twitter'></i>
        </li>
        <li>
          <i className='fa-brands fa-linkedin'></i>
        </li>
        <li>
          <i className='fa-brands fa-behance'></i>
        </li>
        <li>
          <i className='fa-brands fa-youtube'></i>
        </li>

      </ul>

      <ul className=' flex gap-4'>
        <li>
          <NavLink to={'/Register'}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Login'}>
            Login
          </NavLink>
        </li>
        <li>
          <span>
            LogOut 
          </span>
        </li>


      </ul>
    </div>


  </nav>
  )
}
