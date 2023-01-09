

import React from 'react'
import { json } from 'react-router-dom'

const Weathercard = () => {

 
    
  return (
    <>
        
    <div className="widget">
    <div className="weatherIcon">
        <i className={"wi wi-day-sunny"}></i>
    </div>
    <div className="weatherInfo">
        <div className="temperature">
            <span>{}</span>
        </div>
        <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Pune,India</div>

        </div>
    </div>
    <div className="date">{new Date().toLocaleString()}</div>
    {/* (four colum section below end) */}
    <div className="extra-temp">
        <div className="temp-info-minmax">
            <div className="two-sided-section">
                <p><i className='wi wi-sunset'></i></p>
                <p className='extra-info-leftside'>19:19 PM Sunset<br/></p>
            </div>

            <div className="two-sided-section">
                <p><i className='wi wi-humidity'></i></p>
                <p className='extra-info-leftside'>19:19 PM Humidity<br/></p>
            </div>
        </div>

        <div className="weather-extra-info">
        <div className="two-sided-section">
                <p><i className='wi wi-rain'></i></p>
                <p className='extra-info-leftside'>19:19 PM Pressure<br/></p>
        </div>

        <div className="two-sided-section">
                <p><i className='wi wi-strong-wind'></i></p>
                <p className='extra-info-leftside'>19:19 PM Speed<br/></p>
        </div>


        </div>
    </div>
    </div>
    </>
  )
}

export default Weathercard