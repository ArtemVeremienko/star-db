import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service'
import Row from '../row'
import ItemDetails, { Record } from '../item-details'
import ItemList from '../item-list';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

import './app.css'

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState((prev) => {
      return {
        showRandomPlanet: !prev.showRandomPlanet
      }
    })
  }

  render() {
    const planet = this.state.showRandomPlanet && <RandomPlanet />

    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />

          <PersonDetails itemId={3} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <StarshipList />
          <PlanetList />

        </div>
      </ErrorBoundry>
    )
  }

}