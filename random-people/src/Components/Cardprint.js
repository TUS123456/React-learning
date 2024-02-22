import React from "react";
const Cardprint = (props) => {
  return (
    <div className="card-print">
        <img src={props.data.picture.medium} alt="img"/>
        <h1>{props.data.name.title}-{props.data.name.first}-{props.data.name.last}</h1>
        <p>{props.data.phone}</p>
        <p>{props.data.gender}</p>
      </div>
  )
}

export default Cardprint;
