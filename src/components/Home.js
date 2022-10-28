import React, { Component } from "react";
import prueba from './../assets/images/img-prueba.jpg'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home🏡</h1>
        <hr />
        <br />

{/* ------------ TABLA DEFAULT PARA EL EXAMENNN ------------------------------ */}
        <h4>TABLA</h4>
        <table className="table table-primary table-hover">
          {" "}
          {/* Añade al className color con table-primary, secondary, success, danger, warning
        info, ligth y dark 😎  */}
          {/* Si quieres que resalten tonalidades distintas añade también al className:
            table-striped  --> Las filas resaltan
            table-striped-columns  --> Si lo prefieres en columnas 
            table-hover  --> Si quieres que resalten on mouse over
        */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <hr />


{/*----------- UN INPUT PARA EL EXAMENNN lo metes dentro del form -------------------- */}

        <h4>
          INPUT
        </h4>
        {/* Input con value y todo recuerda cambiarlo a DefaultValue si no deja escribir*/}
        <form className="form-floating">
          <input
            // type="email"
            className="form-control"
            id="floatingInputValue"
            value="defaultValue en los PUT para poder modificar"
          />
          <label for="floatingInputValue">Input with value</label>
        </form>

        <hr />


{/* --------------- BOTONES. USAR MEJOR NavLink */}

        <h4>BUTONS</h4><br/>
        <NavLink type="button" className="btn btn-primary">Primary</NavLink>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
        <br/>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
        
        <div class="d-grid gap-2 col-4 mx-auto"> {/* TIP: cambia el numero del col-n al que quieras para el width */}
            <button class="btn btn-primary" type="button">Button</button>
            <button class="btn btn-primary" type="button">Button</button>
        </div>

        <hr/>


{/* ------- UN CARD PREDETERMINADO COMO LA PRACTICA DE LA CHAMPIONS (la ficha del jugador) */}

        <h5>FICHA JUGADOR</h5>
        <div class="card text-center">
        <div class="card-header">
            HEADER
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">DESCRIPCION.</p>
            <NavLink to="/" className="btn btn-primary">BOTON</NavLink>
        </div>
        <div class="card-footer text-muted">
            FOOTER DE LA FICHA
        </div>
        </div>

{/* -------------- PARA LAS IMAGENES, NO USAR COMO ICONO ------------------- */}

        <hr/>
        <h5>Esto lo encontré de paso, por si tenés que poner una imagen</h5>
        <p>Hazlo, pero con estilo 💄</p>
        {/* Copiar este cacho de figure a figure */}
        <figure class="figure">
          <img src={prueba} width="300" class="figure-img img-fluid rounded" alt="..." />
          <figcaption class="figure-caption text-end">
            A caption for the above image.
          </figcaption>
        </figure>
      </div>

    );
  }
}
