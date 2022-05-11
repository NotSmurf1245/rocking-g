import React from 'react'

function ImageLeftBO(props) {
  return (
    <div className="bodyObject">
    {/* <img src={props.image} className="imageLeft"/> */}
    <div className="imageLeft" />
    <div className="bodySection">
        <h3 className="bodyTitle">{props.title}</h3>
        <p className="bodyText">{props.body}</p>
    </div>
</div>
  )
}

export default ImageLeftBO