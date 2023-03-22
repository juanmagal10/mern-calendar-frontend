import { addHours } from "date-fns";

export const events = [
    {
        id: '1',
        title: 'Cumpleaños de fernando',
        notes: 'alguna nota',
        start: new Date('2022-10-21 13:00:00'),
        end: addHours(new Date('2022-10-21 15:00:00'), 2),
    },
    {
        id: '2',
        title: 'Cumpleaños de juan',
        notes: 'alguna nota de juan',
        start: new Date('2022-11-21 13:00:00'),
        end: addHours(new Date('2022-11-21 15:00:00'), 2),
    }
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null,
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}