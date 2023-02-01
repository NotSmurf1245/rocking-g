import React from 'react'
import ImageCarrosel from "../components/ImageCarrosel";
import ImageRightBO from "../components/ImageRightBO";
import ImageLeftBO from "../components/ImageLeftBO";

function Landing() {
  return (
      <div>
        <ImageCarrosel />
        <h1 className="bodyTitle">About Us</h1>
        <ImageRightBO title="History" body=""/>
        <ImageLeftBO title="Title" body=""/>
      </div>

  )
}

export default Landing