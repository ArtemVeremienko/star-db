import React from 'react'
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers'

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);