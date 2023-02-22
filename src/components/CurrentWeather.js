import "./CurrentWeather.css"

const CurrentWeather = ({ data, name }) => {
    const { temp, feels_like, humidity, pressure } = data.main
    const weather = data.weather[0]
    return (
        <div className='weather'>
            <div className="top">
                <div className="top__left">
                    <p className="city">{name}</p>
                    <p className="weather-description">{weather.main}</p>
                </div>
                <img src={`icons/${weather.icon}.png`} alt="weather icon" className="weather-icon" />
            </div>
            <div className="bottom">

                <p className="temperature">{parseInt(temp)}°C</p>
                <div className="details">
                    <div className="detail-row">
                        <p className="detail-label">Feeds like</p>
                        <p className="detail-value">{parseInt(feels_like)}°C</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Wind</p>
                        <p className="detail-value">{data.wind.speed}m/s</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Humidity</p>
                        <p className="detail-value">{humidity}%</p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-label">Pressure</p>
                        <p className="detail-value">{pressure}hPa</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CurrentWeather