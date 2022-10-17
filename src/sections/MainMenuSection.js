import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav class="mainmenu container">
        <div class="logo">
            Fixxo.
        </div>
        <div class="menu-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-repeat" />
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection