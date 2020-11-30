import { React, useState, useEffect } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import Card from '../components/card'
const SearchResults = ({ match }) => {
    const inputSearch = match.params.query
    const [anime, setAnime] = useState([])

    useEffect(async () => {
        const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${inputSearch}`)
        const data = await response.data.results
        console.log(response.data.results)

        setAnime(data)
    }, [match.params.query])

    // console.log(anime)

    return (
        <div className="search-result-wrap">
            <Nav />
            <div className="search-result">
                <h1 className="result">Search Results</h1>
                <div className="grid-card">
                    {anime.map(a => {
                        return (<Card
                            key={a.mal_id}
                            image={a.image_url}
                            title={a.title}
                            plot={a.synopsis}
                            rating={a.score}
                            id={a.mal_id}
                        />

                        )
                    })}


                </div>
            </div>

        </div>
    )


}

export default SearchResults