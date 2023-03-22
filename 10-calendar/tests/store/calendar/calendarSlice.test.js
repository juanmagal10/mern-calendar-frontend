import { calendarWithActiveEventState, events, initialState, calendarWithEventsState } from "../../fixtures/calendarStates";
import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";


describe('Pruebas en el calendarSlice', () => {
    test('Debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState)
    });

    test('onSetACtiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent debe de agregar el evento ', () => {
        const newEvent = {
            id: '3',
            title: 'Cumpleaños de fernando',
            notes: 'alguna nota',
            start: new Date('2022-10-21 13:00:00'),
            end: (new Date('2022-10-21 15:00:00')),
        };

        const state = calendarSlice.reducer(calendarWithActiveEventState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent])
    });

    test('onUpdateEvent debe de actualizar el evento ', () => {
        const updatedEvent = {
            id: '1',
            title: 'Cumpleaños de fernando actualizado',
            notes: 'alguna nota actualizada',
            start: new Date('2022-10-21 13:00:00'),
            end: (new Date('2022-10-21 15:00:00')),
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
        expect(state.events).toContain(updatedEvent)
    });

    test('onDeleteEvent debe de borrar el evento activo', () => {
      // calendarWithACtiveState
          const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent());
        expect(state.activeEvent).toBe(null)
        expect(state.events).not.toContain(events[0])
    });

    test('onLoadEvent debe de establecer los eventos', () => {
      //initialState
        const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        expect(state.isLoadingEvents).toBeFalsy();
        expect(state.events).toEqual(events);
    });

    test('onLogoutCalendar debe de limpiar el estado', () => {
        //calendarWithActiveState
        const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())
        expect(state).toEqual(initialState)
    });  
    
});
