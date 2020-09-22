import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page'
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import ItemDetails from '../item-details'
import Row from '../row'

import './app.css'

class App extends Component {

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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    )
    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />

          <Row
            left={personDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>
    )
  }

}

export default App;
