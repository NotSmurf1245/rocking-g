import React from 'react'
import Button from '@mui/material/Button'

function CustomBtn(props) {
  return (
    <Button variant="contained" className="menuItem" fontFamily="Ariel">{props.txt}</Button>
  )
}

export default CustomBtn