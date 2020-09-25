import React from 'react'

import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) =>
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService)
          return < Wrapped {...props} {...serviceProps} />
        }
      }
    </SwapiServiceConsumer>
}

export { withSwapiService };