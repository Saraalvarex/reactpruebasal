import axios from 'axios';
import React, { Component } from 'react'
import Global from './../Global'

export default class DetalleDoctores extends Component {
    render() {
        return (
          <div>
            <h1>Detalle Doctores</h1>
            <table className="table table-primary table-hover">
              <thead>
                <tr>
                  <th scope="col">Apellido</th>
                  <th scope="col">Especialidad</th>
                  <th scope="col">Salario</th>
                </tr>
              </thead>
              <tbody>
                {
                      this.state.doctores.map((doctor, index) => {
                        return(<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.especialidad}</td>
                            <td>{doctor.salario}</td>
                          </tr>)
                      })
                    }
              </tbody>
            </table>
          </div>
        )
      }
    }
