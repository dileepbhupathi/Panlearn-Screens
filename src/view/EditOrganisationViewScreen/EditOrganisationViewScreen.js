import React from "react";
import { AddOrganisations } from "../../components/AddOrganisationsComponent/AddOrganisations";
// import { EditOrganisationViewComponent } from '../../components/EditOrganisationViewComponent/EditOrganisationView'
import "./EditOrganisationViewScreen.scss";
import PropTypes from "prop-types";
import { Typography } from "antd";

export const EditOrganisationView = ({ selectedCardData }) => {
  const { Text } = Typography;

  return (
    <div className="Add-organisations-container">
      <Text>Edit Organization</Text>
      <AddOrganisations selectedCardData={selectedCardData} />
    </div>
  );
};

EditOrganisationView.propTypes = {
  selectedCardData: PropTypes.object,
};
