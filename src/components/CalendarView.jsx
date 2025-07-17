import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function CalendarView() {
  const [events, setEvents] = useState([]);

  const handleSelect = ({start, end}) => {
    const title = prompt('Nombre de tarea/asignatura:');
    if (title) setEvents([...events, {start, end, title}]);
  };

  return (
    <div className="calendar">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="week"
        onSelectSlot={handleSelect}
        style={{height: 500}}
      />
    </div>
  );
}
