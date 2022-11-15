import React from 'react';
import 'antd/dist/antd.min.css'
import './OrganisationGridView.scss'
import { OrganisationGridContent } from '../../components/OrganisationGridViewContent/OrganisationGridContent';
import { OrganisationsGridHeader } from '../../components/OrganisationsHeaders/OrganisationsGridHeader';
import PropTypes from 'prop-types';

export const OrganisationGridView = ({selectedCard}) => {


  return (
    <>
    <OrganisationsGridHeader/>
      <OrganisationGridContent  selectedCard = {selectedCard}/>
    </>
  )
}

OrganisationGridView.propTypes = {
  selectedCard : PropTypes.func,
}
