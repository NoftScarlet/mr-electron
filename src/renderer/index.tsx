import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from '../1_pages/Home'
import MidiSignalCheck from '../1_pages/MidiSignalCheck'
import SingleMrTest from '../1_pages/SingleMrTest'
import store from '../store'
import { Provider } from 'react-redux'
import './index.css'

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='midisignalcheck' element={<MidiSignalCheck />}>
            <Route path=':mrTestId' element={<SingleMrTest />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
