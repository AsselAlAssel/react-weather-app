import "./CurrentWeather.css"

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className="top">
                <div className="top__left">
                    <p className="city">London</p>
                    <p className="weather-description">sunday 12 june</p>
                </div>
                <img src="icons/01d.png" alt="weather icon" className="weather-icon" />
            </div>
            <div className="bottom">

                <p className="temperature">20°C</p>
                <div className="details">
                    <div className="detail-row">
                        <p className="detail-label">Feeds like</p>
                        <p className="detail-value">20°C</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Wind</p>
                        <p className="detail-value">2m/s</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Humidity</p>
                        <p className="detail-value">20%</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Pressure</p>
                        <p className="detail-value">1000hPa</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CurrentWeather