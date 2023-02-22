import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import "./style/forecast.css"

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Forecast = ({ forecastData }) => {
    const data = forecastData.list
    const list = data.slice(0, 7);
    const date = new Date(list[0].dt_txt);
    const daysList = days.slice(date.getDay(), days.length).concat(days.slice(0, date.getDay()))
    console.log(daysList)
    return (
        <div className='forecast'>
            <Accordion allowMultipleExpanded={true}>
                {list.map((item, index) => {
                    return (
                        <AccordionItem key={index} className="forecast--item">
                            <AccordionItemHeading>
                                <AccordionItemButton className='forecast__button'>
                                    <div className='forecast__icon'>
                                        <img src={`icons/${item.weather[0].icon}.png`} alt="weather icon" />
                                        <span>{daysList[index]}</span>
                                    </div>
                                    <div className='forecast__description'>
                                        <span>{item.weather[0].description}</span>
                                        <span>{parseInt(item.main.temp)}°C / </span>
                                        <span>{parseInt(item.main.temp_max)}°C</span>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='forecast__details'>
                                    <div>

                                        <div>
                                            <span>Pressure</span>
                                            <span>{item.main.pressure} hPa</span>
                                        </div>
                                        <div>
                                            <span>Clouds</span>
                                            <span>{item.clouds.all}%</span>
                                        </div>
                                        <div>
                                            <span>see level</span>
                                            <span>{item.main.sea_level} hPa</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>Humidity</span>
                                            <span>{item.main.humidity}%</span>
                                        </div>
                                        <div>
                                            <span>Wind speed </span>
                                            <span>{item.wind.speed} m/s</span>
                                        </div>
                                        <div>
                                            <span>Feels like</span>
                                            <span>{parseInt(item.main.feels_like)}°C</span>
                                        </div>

                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>

        </div>
    )
}

export default Forecast