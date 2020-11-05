import React from "react"
// import img from "../naruto.jpg"

const Card = (props)=>{
    console.log(props.image);
    console.log(props.title);
    return(
        
        <div className = "card">
            <img src = {props.image}  />
            <div className = "info">
                <div className="wrapper">
                <h2 className= "title">{props.title}</h2>
                <h3 className = "rating">Rating {props.rating}</h3>
                <p className = "plot">
                   {props.plot}
                </p>
                <button className = "watch-btn">watch now</button>
                </div>
                
            </div>
        </div>
    )
}


export default Card