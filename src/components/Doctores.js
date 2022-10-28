import axios from 'axios';
import React, { Component } from 'react'
import Global from './../Global'
import {Navigate} from 'react-router-dom'; 

export default class Doctores extends Component {

    inputsalario = React.createRef();
    select = React.createRef();

    state={
        status: false,
        doctores: [],
        statusFilter: false,
    }

    cargarDoctores = (e) => {
        if (e!= null){
            e.preventDefault();
        }
        var request = "/api/doctores/";
        var url = Global.url+request;
        axios.get(url).then(res=> {
            this.setState({
                doctores: res.data
            })
        })
    }

    incrementarSalario = (e) => {
        e.preventDefault()
        var incremento = this.inputsalario.current.value;
        var especialidad = this.select.current.value;
        var request = "/api/doctores/"+especialidad+"/"+incremento;
        var url = Global.url+request;
        axios.put(url).then(res=>{
            this.setState({
                doctores: res.data
            })
        })
    }


    filtrarEspecialidad = (e) => {
        e.preventDefault();
        var especialidad = this.select.current.value;
        var request ="api/doctores/doctoresespecialidad/"+especialidad
        var url = Global.url+request;
        
        console.log(especialidad)
        // console.log(incremento)
        axios.get(url).then(res=>{
            this.setState({
                doctores: res.data
            })
        })
    }

    //Para cargar doctores cuando cargue la pagina
  componentDidMount = () => {
    this.cargarDoctores();
  }

  componentDidUpdate = () => {
    if (this.state.statusFilter==true){
        this.cargarDoctores();
    }
  }

  render() {
    //Para ir a mostrar tabla especialidad seleccionada
    // if (this.state.status==true){ 
    //     return (<Navigate to="/"/>) 
    //   } 
    return (
      <div>
        <h1>Doctores</h1>
        <h4>INCREMENTO SALARIAL DOCTORES</h4>
    
        <form>
            <label>Incremento: </label>
          <input ref={this.inputsalario}/>
          <button onClick={this.incrementarSalario}>Incrementar salario</button>
          <select onChange={this.filtrarEspecialidad} ref={this.select}>
          {
                  this.state.doctores.map((doctor, index) => {
                    return(
                        <option key={index}>{doctor.especialidad}</option>
                      )
                  })
                }
          </select>
        </form>
        <hr></hr>
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
