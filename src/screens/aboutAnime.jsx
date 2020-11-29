import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { Link, useHistory } from 'react-router-dom'


const AboutAnime = ({ match }) => {

    const history = useHistory()

    const [ani, setAni] = useState({})
    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${match.params.id}`)
            .then(response => {
                setAni(response.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Nav />
            <div className="bg-img" style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ani.image_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'blur(40px)',
                zIndex: '-1'
            }}>
            </div>

            <div className="front">

                <div className="left-2">

                    <button onClick={() => { history.goBack() }} className='goback'>Go back</button>

                    <img className='image-about' src={ani.image_url} alt={ani.title} />
                </div>
                <div className="front-info">
                    <p className="studio">{ani.studios === undefined ? null : `${ani.studios[0].name}'s`}</p>
                    <div className="title-about">{ani.title}</div>
                    <p className='anime-score'>{ani.score}</p>

                    {ani.genres && ani.genres.length && ani.genres.map((gen, index) => (<span className='genres' style={{ marginLeft: index === 0 ? '30px' : '7px' }}>{index === 0 ? gen.name : `|  ${gen.name}`}</span>))}<p className='synopsis'>{ani.synopsis}</p>
                    <button className='about-btn-watch'>watch now</button>
                    <button className='about-btn-add'>add to profile</button>

                </div>
            </div>


        </>
    )
}

export default AboutAnime
