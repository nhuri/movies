import React from 'react'
import SearchInput from '../movie/SearchInput'

const Navbar = ({searchMovie}) => {
  return (
    <nav className='main-menu'>
        <ul>
            <li>Home</li>
            <li>Adput</li>
            <li>Shop</li>
            <li>Contact</li>
        </ul>
        <SearchInput searchMovie={searchMovie}/>
    </nav>
  )
}

export default Navbar