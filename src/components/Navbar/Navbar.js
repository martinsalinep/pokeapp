import React from 'react';
import pokemonLogo from './img/pokemonLogo.png';
import './style.css';

function Navbar() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <ul className="nav d-flex align-items-start">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li cclassName="nav-item">
              <a className="nav-link" href="#">Meus Pokemons</a>
            </li>
          </ul>
        </div>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      <div class="row" id="bannerContainer">
        <div class="col-md-3">
          <img alt="PokemonLogo" id="imgLogo" src={pokemonLogo}/>
        </div>
        <div className="col-md-9">
          <h3 className="text-center">Catálogo Pokemon</h3>
        </div>
      </div>
    </>
  );
}
 
export default Navbar;