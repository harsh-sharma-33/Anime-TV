import React from 'react'
import Header from '../components/headeer'
import Card from '../components/card'
import axios from 'axios'
import './style.css'

const HomeScreen = () => {

    const [animeList, setAnimeList] = React.useState([])

    const searchElement = (name) => {
        axios
            .get(`https://api.jikan.moe/v3/search/anime?q=${name}`)
            .then((response) => {
                setAnimeList(response.data.results)
            }).catch(err => {
                console.log(err)
            })

        console.log(animeList)
    }

    return (
        <div>
            <Header
                Search={searchElement}
            />

            <hr className='home-hr' />

            <div className="section-2">
                {animeList.map(anime => {
                    return (
                        <Card
                            key={anime.mal_id}
                            image={anime.image_url}
                            title={anime.title}
                            plot={anime.synopsis}
                            rating={anime.rating}
                            id={anime.mal_id}
                        />
                    )
                })}
            </div>



        </div>
    )
}

export default HomeScreen
