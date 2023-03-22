import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {localizer,getMessages, useAuthStore} from '../../helpers'

import { Navbar } from "../components/Navbar";
import { CalendarEvent } from '../components/CalendarEvent';
import { useEffect, useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';








export const CalendarPage = () => {
  const {user}=useAuthStore()
  const { openDateModal, closeDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  
  
  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347c7f' :'#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    };

    
    return {
      style
    };
  };

  useEffect(() => {
    startLoadingEvents()
  }, []);
  
  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  };

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
          event: CalendarEvent
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
};

