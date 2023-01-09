// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=eceed182c93886c97a410ec9436c8ce8
import React, { useEffect } from 'react'
import '../weather/style.css'
import { useState } from 'react'

const Temp = () => {
    useEffect(()=>{
        getweatherInfo();
    },[])

    const[finalValue,setFinalValue]=useState([])
    const[searchValue,setSearchValue]=useState("pune")
    const[facts,setFacts]=useState([])

    const getweatherInfo=async()=>{
        
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=eceed182c93886c97a410ec9436c8ce8`)
       .then(response=>response.json())
       .then(data=>
            {  
                console.log(data)
                
                setFacts(data.main.temp);
               
                
                const name=data.name
                const climate=data.weather[0].main
                const country=data.sys.country
                const speed=data.wind.speed
                const pressure=data.main.pressure


                const NewEverything={
                    name,
                    climate,
                    country,
                    speed,
                    pressure,
                
                };
                setFinalValue(NewEverything)

       



            }
           
                                     )
       .catch(error=>console.log(error))
    
      
 }

    

    useEffect(()=>{
        getweatherInfo();
    },[])



  return (
    
    <>
    <div className="wrap">
        <div className="search">
            <input type="search" placeholder='search..'
            autoFocus className='searchTerm'  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button className="searchButton" onClick={getweatherInfo}>Search</button>

        </div>

        
    </div>

    <div className="widget">
    <div className="weatherIcon">
        <i className={"wi wi-day-sunny"}></i>
    </div>
    <div className="weatherInfo">
        <div className="temperature">
            <span>{JSON.stringify(facts)}°C</span>
        </div>
        <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">{JSON.stringify(finalValue.name)},{JSON.stringify(finalValue.country)}</div>

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
                <p className='extra-info-leftside'>{JSON.stringify(finalValue.pressure)} hPa<br/></p>
        </div>

        <div className="two-sided-section">
                <p><i className='wi wi-strong-wind'></i></p>
                <p className='extra-info-leftside'>{JSON.stringify(finalValue.speed)}km/hr<br/></p>
        </div>


        </div>
    </div>
    </div>
   

</>
 )
 
  }

export default Temp

