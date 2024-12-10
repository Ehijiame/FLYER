import React from "react"

export default function Card(props){
    return(
        <div className="card-layout">
        <div>
        <img src={props.imageUrl} className="image"/>
        </div>
        <div className="card-text">
        <div className="card-head">
        <h3><span><i class="fa-solid fa-location-dot"> </i> 
        </span> {props.location}  </h3>
        <p> View on Google Maps</p>
        </div>
        <h1>{props.title}</h1>
        <h5>{props.startDate}-{props.endDate}</h5>
        <p className="p">{props.description}</p>
        </div>
        </div>
    )
}