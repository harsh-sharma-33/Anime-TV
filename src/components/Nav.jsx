import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [query, setQuery] = useState("")

    const handleChange = (event) => {
        const requiredValue = event.target.value
        setQuery(requiredValue)
    }

    return (
        <div className="nav">
            <h1 className='logo'>AnimeClub<span className='tv'>Tv</span></h1>
            <input onChange={handleChange} className='nav-input' type="text" />
            <Link to={`/search/${query}`}>
                <button className='nav-search'>Search</button>
            </Link>
        </div>
    )
}

export default Nav
