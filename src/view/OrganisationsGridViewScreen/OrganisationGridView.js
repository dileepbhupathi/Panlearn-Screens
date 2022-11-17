import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import './OrganisationGridView.scss'
import { OrganisationGridContent } from '../../components/OrganisationGridViewContent/OrganisationGridContent';
import { OrganisationsGridHeader } from '../../components/OrganisationsHeaders/OrganisationsGridHeader';
import PropTypes from 'prop-types';
import { OrganisationsListView } from '../../components/OrganisationsListViewContent/OrganisationsListView';

export const OrganisationGridView = ({selectedCard}) => {

  const [isGridOrganisation, setIsGridOrganisation] = useState(true)
  return (
    <>
    <OrganisationsGridHeader setIsGridOrganisation = {setIsGridOrganisation} isGridOrganisation={isGridOrganisation}/>
    {isGridOrganisation?<OrganisationGridContent  selectedCard = {selectedCard}/>:<OrganisationsListView selectedCard = {selectedCard}/>}
      
    </>
  )
}

OrganisationGridView.propTypes = {
  selectedCard : PropTypes.func,
}
