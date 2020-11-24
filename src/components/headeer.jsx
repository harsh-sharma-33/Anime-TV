import React from "react"
import img from "../bg.png"
import Input from "./Search"


const Header = (props) => {


    return (
        <div className="header" style={{ backgroundImage: "url(" + img + ")" }}>

            <Input search={props.Search} />

        </div>
    )
}

export default Header