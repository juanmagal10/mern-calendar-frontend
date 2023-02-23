import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {localizer,getMessages} from '../../helpers'

import { Navbar } from "../components/Navbar";
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';







export const CalendarPage = () => {
  const { openDateModal, closeDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  
  
  
  const [lastView, setLastView]=useState(localStorage.getItem('lastView')||'week')
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347c7f',
      borderRadius: '0px',
      opacity: 0.8,
      color:'white'
    }

    
    return {
      style 
    }
  }
  
  const onDoubleClick = (event) => {
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />
 
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal></CalendarModal>
      <FabAddNew />
      <FabDelete />
 
    </>
  )
}

