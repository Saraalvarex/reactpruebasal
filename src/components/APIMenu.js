import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

  state = {
    equipos: [],
    status: false
  }

  loadEquipos = () => {
    var request = "/api/Equipos/";
    var url = Global.url+request;
    axios.get(url).then(response => {
      this.setState({
        equipos: response.data
      });
    });
  }

//Para cargar equipos cuando cargue la pagina
  componentDidMount = () => {
    this.loadEquipos();
  }
  
  render() {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Champions</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Equipos
              </a>
              <ul className="dropdown-menu">
                {
                  this.state.equipos.map((equipo, index) => {
                    return(<li key={index}>
                      <NavLink to={"/equipo/"+equipo.idEquipo} key={equipo.idEquipo}>
                        {equipo.nombre}
                      </NavLink>
                      </li>)
                  })
                }
                {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
