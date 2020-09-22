import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';

import './item-details.css';

export default class itemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateitem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateitem();
    }
  }

  updateitem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId)
      .then((item) =>
        this.setState({
          item,
          image: getImageUrl(item)
        }))
  }

  render() {

    const { item, image } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name, gender,
      birthYear, eyeColor } = item;

    return (
      <ErrorBoundry>
        <div className="item-details card">
          <img className="item-image"
            src={image} alt={`${name} item`} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
            <ErrorButton />
          </div>
        </div>
      </ErrorBoundry>
    )
  }
}