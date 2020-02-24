import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Navbar from './Navbar'
import Player from './Player';

afterEach(rtl.cleanup);

// app renders
it('renders without crashing', () => {
  rtl.render(<App />);
});


// nav renders
test('Navbar title', () => {
  const wrapper = rtl.render(<Navbar/>)
  const women = wrapper.getByText(`Women's World Cup players`)
  expect(women).toBeVisible()
})

// // Player renders with name
// test('Player Name', () => {
//   const wrapper = rtl.render(<Player/>)
//   const name = wrapper.getByText(`Name:`)
//   expect(name).toBeVisible()
// })
