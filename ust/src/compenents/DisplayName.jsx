import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const DisplayName = () => {
    var[val,setval]=useState( )
    const react=()=>{
        console.log("react clicked")
        setval("react")
    }
    const angular=()=>{
        console.log("angular clicked")
        setval("angular")}

        const next=()=>{
            console.log("next clicked")
                setval("next")}

  return (
    <div>
        <Typography variant='h4'>welcome to { val}</Typography>
        <Button onClick={react} variant='contained'>react</Button>
        <Button onClick={angular} variant='contained'>angular</Button>
        <Button onClick={next} variant='contained'>next</Button>
    </div>
  )
}

export default DisplayName