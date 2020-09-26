import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      }
    })
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
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <PersonDetails itemId={3} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <StarshipList />
            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }

}