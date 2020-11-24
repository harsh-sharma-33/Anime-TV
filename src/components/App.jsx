import React from 'react'
import Header from './headeer'
import Card from './card.jsx'
import axios from 'axios'

const https = require('https')
const base_url = 'https://api.jikan.moe/v3/search/anime?q='

function App() {
  const [animeList, setAnimeList] = React.useState([])

  const searchElement = (name) => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${name}`)
      .then((response) => {
        // console.log(response)
        setAnimeList(response.data.results)
      })

    console.log(animeList)
  }


  return (
    <div>
      <Header
        Search={searchElement}
      />

      <hr />

      <div className="section-2">
        {animeList.map(anime => {
          return (
            <Card
              image={anime.image_url}
              title={anime.title}
              plot={anime.synopsis}
              rating={anime.rating}
            />
          )
        })}
      </div>

    </div>



  )

}
export default App