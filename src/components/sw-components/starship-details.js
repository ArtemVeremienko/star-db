import React from 'react'
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers'

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

export default withSwapiService(StarshipDetails);