import React from "react"
import Faceoff from "./Photos/UFC 281.jpeg"
import "./Banner.css"

const Image = () => {
    return(
        <>
        <img className="faceoff" src ={Faceoff} alt = "Adesanya VS. Pereira"></img>
        </>
    )
}

export default Image