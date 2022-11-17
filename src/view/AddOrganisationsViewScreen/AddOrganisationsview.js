import React from "react";
import { AddOrganisations } from "../../components/AddOrganisationsComponent/AddOrganisations";
import PropTypes from 'prop-types';

export const AddOrganisationsView = ({selectedCardData}) => {

  return (
    <>
      
        <AddOrganisations selectedCardData = {selectedCardData}/>
    </>
  );
};

AddOrganisationsView.propTypes = {
  selectedCardData: PropTypes.object,
};