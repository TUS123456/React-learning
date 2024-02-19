import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{
      border:"1px solid",
      width:"100px",
      height:"100px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      cursor:"pointer"
    }}
    className='Block'>
        <h1>{props.value}</h1>      
    </div>
  )
}

export default Square
