import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page'
import ErrorIndicator from '../error-indicator'
import ErrorButton from '../error-button';

import './app.css'

class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  toggleRandomPlanet = () => {
    this.setState((prev) => {
      return {
        showRandomPlanet: !prev.showRandomPlanet
      }
    })
  }

  render() {

    if (this.state.hasError) return <ErrorIndicator />

    const planet = this.state.showRandomPlanet && <RandomPlanet />;

    return (
      <div className="container stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    )
  }

}

export default App;
