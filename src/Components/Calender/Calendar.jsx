import React from 'react'
import { useRecoilValue } from 'recoil'
import { eventAtom } from "../../State"
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "./TodoCalendar.css"

const locales = {
  "en-US" : require("date-fns/locale/en-US")
};



const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});



export function Calendar() {

  const allEvents = useRecoilValue(eventAtom)

  
    return (
      <div>
        <h1>Calendar</h1>
        <BigCalendar
          localizer={localizer}
          events = {allEvents}
          startAccessor = "start"
          endAccessor= "end"
          category = "cat"
          className='calendar'
          eventPropGetter={(allEvents) => {
            const backgroundcolor = allEvents.cat ? allEvents.cat : 'red' ;
            const color = allEvents.color ? allEvents.color : 'red';
            return { 
              style: {backgroundcolor, color}
            }
          }}/>
      </div>
)} 

export default Calendar