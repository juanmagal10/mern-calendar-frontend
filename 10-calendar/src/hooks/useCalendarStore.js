import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { converEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from "../store";


export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    };

    const startSavingEvent = async (calendarEvent) => {
        //todo update event

        try {
                //* todo bien
            if (calendarEvent.id) {
                // actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({ ...calendarEvent, user }));

                return
            } 
                // creando
            const { data } = await calendarApi.post('/events', calendarEvent);

            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
        } catch (error) {
            console.log(error);
            Swal.fire('error al guardar', error.response.data.msg, 'error');
        };

       
    };

    const startDeletingEvent = async () => {
        //todo llegar al backend
        // dispatch(onDeleteEvent())
        
        try {
                //* todo bien
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());

            return
        } catch (error) {
            console.log(error);
            Swal.fire('error al eliminar', error.response.data.msg, 'error');
        };
    };

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = converEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log('error cargando eventos');
            console.log(error);
        };
    };


    return {
        //*properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //*metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    };
};


