import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('pruebas en <FirstApp />', () => {
  
  // test('debe de hacer match con el snapchot', () => {

  //   const title = 'hola soy goku';
  //   const { container } = render(<FirstApp title={title} />);
    
  //   expect(container).toMatchSnapshot();
  // })

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'hola soy goku';
    const { container, getByText,getByTestId } = render(<FirstApp title={title} />);

    
    expect(getByTestId('test-title').innerHTML).toContain(title);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title)


  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'hola soy goku';
    const subTitle = 'hola soy subtitulo';
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />);
    
    
    expect(getAllByText(subTitle).length).toBe(2)
  })


  
  
  
})
