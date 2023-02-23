import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)
    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = (calendarEvent) => {
        //todo llegar al backend

        //* todo bien
        if (calendarEvent._id) {
            // actualizando
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {
            // creando
            dispatch(onAddNewEvent({...calendarEvent, _id:new Date().getTime()}))
        }

    }

    const startDeletingEvent =  () => {
        //todo llegar al backend
        dispatch(onDeleteEvent())
    }


    return {
        //*properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //*metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
  }
}


