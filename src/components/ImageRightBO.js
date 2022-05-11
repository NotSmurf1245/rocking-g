import React from 'react'

function ImageRightBO(props) {
  return (
    <div className="bodyObject">
        <div className="bodySection">
            <h3 className="bodyTitle">{props.title}</h3>
            <p className="bodyText">{props.body}</p>
        </div>
        {/* <img src={props.image} className="imageRight"/> */}
        <div className="imageRight" />
    </div>
  )
}

export default ImageRightBO