import React from 'react'
import { useState } from 'react'

function Square(props) { 
  return (
    <div
        onClick={props.onClick}
        className='square'
        style={{
        height: '100px',
        width: '100%',
        border: '1px solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square