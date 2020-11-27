import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

const AboutAnime = ({ match }) => {

    const [anime, setAnime] = useState({})
    useEffect(async () => {
        // const response = await axios.get(`https://api.jikan.moe/v3/anime/${match.params.id}`)
        // const data = await response.data
        // console.log(data)
        // setAnime(data)

        axios.get(`https://api.jikan.moe/v3/anime/${match.params.id}`)
            .then(response => {
                setAnime(response.data)
                // console.log(response.data)

            }).catch(err => {
                console.log(err)
            })
    }, [])

    // console.log(anime.genres)
    console.log(anime)

    return (
        <>
            <Nav />
            <div className="bg-img" style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${anime.image_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'blur(15px)',
                zIndex: '-1'
            }}>


            </div>

            <div className="front">
                <img className='image-about' src={anime.image_url} alt={anime.title} />
                <div className="front-info">
                    <p className="studio">{anime.studios === undefined ? null : `${anime.studios[0].name}'s`}</p>
                    <div className="title-about">{anime.title}</div>
                    <p className='anime-score'>{anime.score}</p>

                    {anime.genres.map((gen, index) => {
                        return
                        (
                            <span className='genres' style={{ marginLeft: index === 0 ? '30px' : '7px' }}>{index === 0 ? gen.name : `|  ${gen.name}`}</span>

                        )
                    })}

                    <p className='synopsis'>{anime.synopsis.slice(0, -25)}</p>

                    <button className='about-btn-watch'>watch now</button>
                    <button className='about-btn-add'>add to profile</button>

                </div>
            </div>

        </>
    )
}

export default AboutAnime

//anime.studios