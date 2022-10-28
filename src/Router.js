import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctores from './components/Doctores';
import MenuRutas from './components/MenuRutas';
import NotFound from './components/NotFound';
import DetalleDoctores from './components/DetalleDoctores'

export default class Router extends Component {
  
  render() {
    function DoctoresElement () {
      var {especialidad, incremento} = useParams();
      return (<DetalleDoctores esp={especialidad} increment={incremento}/>)
    }
    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Doctores />}/>
            <Route path="/:especialidad/:incremento" element={<DoctoresElement/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
