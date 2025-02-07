import Calendar from 'react-calendar';
import "./CSS/CalenderStyle.css";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function Calender({ selectedDate , setSelectedDate }){
    const [date, setDate ] = useState(new Date());
    return(
        <Calendar className="p-4" onChange = {setSelectedDate} value={selectedDate} formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'narrow' })} />
    )
}