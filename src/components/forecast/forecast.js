import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton  } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
   const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

  return (
    <>
      <label className='title'>5 Day Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 5).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather" className="small-icon" src={`icons/${item.weather[0].icon}.png`}/>
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_min)}˚F - {Math.round(item.main.temp_max)}˚F</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="daily-details-grid">
              <div className="daily-details-item">
                <label>Pressure:</label>
                <label>{item.main.pressure} hPa</label>
              </div>
              <div className="daily-details-item">
                <label>Humidity:</label>
                <label>{item.main.humidity} %</label>
              </div>
              <div className="daily-details-item">
                <label>Wind Speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div className="daily-details-item">
                <label>Feels Like:</label>
                <label>{Math.round(item.main.feels_like)} m/s</label>
              </div>
            </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
