import React from 'react'
import { OrganisationsListView } from '../../components/OrganisationsListViewContent/OrganisationsListView'
import {OrganisationsListHeader} from '../../components/OrganisationsHeaders/OrganisationsListHeader'
import PropTypes from 'prop-types';


export const OrganisationsListViewScreen = ({selectedCard}) => {
    
  return (
      <>
      <OrganisationsListHeader/>
        <OrganisationsListView selectedCard = {selectedCard}/>
      </>
  )
}


OrganisationsListViewScreen.propTypes = {
  selectedCard : PropTypes.func,
}