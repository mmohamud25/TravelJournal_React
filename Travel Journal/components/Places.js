import React from "react";
import pinPic from "../Images/Fill.png"

export default function Places(props) {
    return (
        <div className="places">
            <img src={`../Images/${props.item.image}`} className='images' alt="Place Image" />
            <div className="details">
                <div className="logo-and-location">
                    <img src={pinPic}className="details--logo" alt="Details Logo" />
                    <span className="places-location">{props.item.location}</span>
                    <p className="places-map">
                        <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                    </p>
                </div>
                
                <h1 className="places-title">{props.item.title}</h1>
                <span className="places--start">{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}
