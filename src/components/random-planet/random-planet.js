import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css'

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000,
  }

  static propTypes = {
    updateInterval: PropTypes.number,
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePlanet = () => {
    const id = Math.round(Math.random() * 20) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;

    const content = loading ? <Spinner /> : <PlanetView planet={planet} />;
    const errorMessage = error ? <ErrorIndicator /> : content;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
      </div>
    )
  }
}


const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name} planet`} className="planet-image" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}