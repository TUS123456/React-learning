import React, { useState } from 'react'
import Square from './Square'
const Board = () => {
  const [state ,setstate]=useState(Array(9).fill(null));
  const [isXturn,setXturn]=useState(true);

  const handleClick=(index)=>{
    const copystate=[...state];
    copystate[index]= isXturn ?  "X" : "O";
    setstate(copystate);
    setXturn(!isXturn);
  }
  
  const checkwinner=()=>{
    const winnermappingindex=[
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6],
    ];
    for(let val of winnermappingindex){
        const [a,b,c]=val;
        if (state[a] && state[a]===state[b] && state[a]===state[c]){
          return true; 
        }
    }
    return false; 
  }

  const handleAgainPlay=()=>{
    setstate(Array(9).fill(null));
  }


  const isWinner=checkwinner();



  return (
    <div className='Board-Container'>
    {
      isWinner ? <div>
      <h1>You Are Winner</h1>
      <button onClick={()=>{handleAgainPlay()}}>PlayAGAIN</button>
      </div>
      :
      <>
      <div className='Board-Row'>
    <Square onClick={()=>{handleClick(0)}} value={state[0]}/>
    <Square onClick={()=>{handleClick(1)}} value={state[1]}/>
    <Square onClick={()=>{handleClick(2)}} value={state[2]}/>
    </div>
    <div className='Board-Row'>
    <Square onClick={()=>{handleClick(3)}} value={state[3]}/> 
    <Square onClick={()=>{handleClick(4)}}value={state[4]}/>
    <Square onClick={()=>{handleClick(5)}}value={state[5]}/>
    </div>
    <div className='Board-Row'>
    <Square onClick={()=>{handleClick(6)}}value={state[6]}/>
    <Square onClick={()=>{handleClick(7)}}value={state[7]}/>
    <Square onClick={()=>{handleClick(8)}}value={state[8]}/>
    </div> 
      </>
    }
    </div>
  )
}

export default Board
