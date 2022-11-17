import React from "react";
import { AddOrganisations } from "../../components/AddOrganisationsComponent/AddOrganisations";
// import PropTypes from 'prop-types';
import { Typography } from "antd";

export const AddOrganisationsView = () => {
  const { Text } = Typography;

  return (
    <>
      <div className="Add-organisations-container">
        <Text>Add Organization</Text>
        <AddOrganisations />
      </div>
    </>
  );
};
