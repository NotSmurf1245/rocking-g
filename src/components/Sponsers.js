import React from 'react'

function Sponsers(props) {
  return (
    <div className="sponserContainer">
        <h1 className="bodyTitle">{props.title}</h1>
        <div className="imageContainer">
            <img className="sponserImage" src={props.image1} alt={props.alt1}/>
            <img className="sponserImage" src={props.image2} alt={props.alt2}/>
        </div>
    </div>
  )
}

export default Sponsers