import React from 'react'

const Nav = () => {
    return (
        <div className="nav">
            <h1 className='logo'>AnimeClub<span className='tv'>Tv</span></h1>
            <input className='nav-input' type="text" />
            <button className='nav-search'>Search</button>
        </div>
    )
}

export default Nav
