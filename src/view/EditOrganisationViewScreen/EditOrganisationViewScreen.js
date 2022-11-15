import React from 'react'
import { AddOrganisations } from '../../components/AddOrganisationsComponent/AddOrganisations'
// import { EditOrganisationViewComponent } from '../../components/EditOrganisationViewComponent/EditOrganisationView'
import './EditOrganisationViewScreen.scss'
import PropTypes from 'prop-types';


export const EditOrganisationView = ({selectedCardData}) => {
  return (
    <>
      <AddOrganisations selectedCardData = {selectedCardData}/>
    </>
  )
}


EditOrganisationView.propTypes = {
  selectedCardData: PropTypes.object,
}