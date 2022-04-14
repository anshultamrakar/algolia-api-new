import React from 'react'
import ReactDOM from 'react-dom';
import MainApp from './index'


jest.mock('react-dom', ()=> ({render: jest.fn()}))



test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp/>, div);
  global.document.getElementById = (id) => id ==='root' && div
  expect(ReactDOM.render).toHaveBeenCalledWith(<MainApp/>,div)
});