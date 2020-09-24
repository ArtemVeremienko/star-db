import React from 'react'
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers'

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

export default withSwapiService(PlanetDetails);