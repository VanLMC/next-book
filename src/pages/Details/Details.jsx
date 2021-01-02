import React from 'react'
import './details.css'

let pokedex = {}

// function pokeName() {
//   const init = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default',
//   }

//   fetch('backendLink', init)
//     .then((response) => {
//       response.json()
//     })
//     .then((data) => {
//       pokedex.name = data.name
//     })
//     .catch((e) => {
//       return false
//     })
// }

function getPokeInfo(name) {
  const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  }

  fetch('https://pokeapi.co/api/v2/pokemon/' + name, init)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      pokedex.data = data.abilities
      pokedex.id = data.id
    })
    .catch((e) => {
      console.log('erro ao puxar os dados')
    })
}

function Details() {
  return (
    <div className="container">
      <h1 className="details">Detalhes</h1>
      <div className="content">
        <div className="cards">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="pokemon"
            width="300px"
          />
          <br />
          <p id="name">Nome: </p>
          <p>Tipo: </p>
          <strong>Descrição: </strong>
          <p>ASdsadas</p>
          <p>Poderes: </p>
          <span>Chicote de Vinha</span>
          <span>Folha cortante</span>
          <span>Canhão solar</span>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Details
