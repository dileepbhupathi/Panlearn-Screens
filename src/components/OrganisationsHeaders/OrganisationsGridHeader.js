import React from "react";
import { Button, Dropdown, Input, Menu, Space, Typography } from "antd";
import "./OrganisationsHeader.scss";
import {
  SearchOutlined,
  AppstoreFilled,
  UnorderedListOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

export const OrganisationsGridHeader = () => {
  const { Text } = Typography;

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "2nd menu item",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "3rd menu item",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );




  return (
    <div className="Organisations-header-container">
      <Text> List Of Organizations</Text>
      <div className="organisation-header-searchbar-container">
        <Input
        size="small"
          placeholder="Search for a organisation"
          prefix={<SearchOutlined />}
        />
        {/* <div className="organisation-header-icons-container">
          <AppstoreFilled className="organisation-app-filled-icon" />
          <Link to='/OrganisationListView'>
          <UnorderedListOutlined className="organisation-list-icon" />
          </Link>
        </div> */}
        <Menu mode="horizontal" className="organisation-header-icons-container">
          <Menu.Item key="gridContent">
            <AppstoreFilled  className="organisation-app-filled-icon"/>
          </Menu.Item>
          <Link to='/OrganisationListView'>
            <Menu.Item key="listContent">
              <UnorderedListOutlined  className="organisation-list-icon" />
            </Menu.Item>
          </Link>
        </Menu>
        <div>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                Sort By
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <Link to="/AddOrganisationsView">
          <Button type="primary">Add Organization</Button>
        </Link>
      </div>
    </div>
  );
};
