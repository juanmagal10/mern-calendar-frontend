import { fireEvent, render, screen } from "@testing-library/react"
import {CounterApp} from '../src/CounterApp'

describe('Pruebas en el <CounterApp />', () => {
  const initialValue = 10;
    test('debe de hacer match con el snapshot', () => {
      
      const { container } = render(<CounterApp initialValue={initialValue} />)
      expect(container).toMatchSnapshot();
    })
  
  test('debe mostrar el valor inicial de 100', () => {

    render(<CounterApp value={100} />)
    expect(screen.getByText('100')).toBeTruthy()

    expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
  })

  test('debe incrementar con el boton de +1', () => {
    const initialValue=10
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy();
  })

  test('debe incrementar con el boton de -1', () => {
    const initialValue=10
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('9')).toBeTruthy();
  })

  test('debe de funcionar el boton de reset ', () => {
    const initialValue=10
    render(<CounterApp value={initialValue} />)
    // fireEvent.click(screen.getByText('reset'))
    fireEvent.click(screen.getByRole('button', {name:'btn-reset'})
)
    expect(screen.getByText(0)).toBeTruthy();
  })
  
  
  
})
