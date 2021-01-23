import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-ligth" id="navBar">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Meus Pokemons</a>
                </li>
              </ul>
              <form class="d-flex align-items-center">
                <input class="form-control me-2" type="search" id="inputSearch" placeholder="Busque seu Pokemon" aria-label="Search"/>
                  <button class="btn btn-primary me-md-2" id = "buttonSearch" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;