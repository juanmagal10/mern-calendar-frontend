import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem";

describe('pruebas en el componente <TodoItem/>', () => {
    const todo = {
        ir: 1,
        description: 'Piedra del alma',
        donde:false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el todo pendiente de completar', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />)

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    });

    test('debe mostrar el todo completado', () => {

        todo.done = true;

          render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />)

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
         render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
         />)
        
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })

    test('el boton debe de llamar el deleteTodo cuando se hace click', () => {
         render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
         />)
        
        const btnElement = screen.getByLabelText('delete-btn')
        fireEvent.click(btnElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
    
    


    
    
  
})
