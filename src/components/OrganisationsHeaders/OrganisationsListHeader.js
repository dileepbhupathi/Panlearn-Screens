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
import { Link, useRouteMatch } from "react-router-dom";

export const OrganisationsListHeader = () => {

  const {url} = useRouteMatch()
  
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
      <Text> OrganiZations</Text>
      <div className="organisation-header-searchbar-container">
        <Input
          placeholder="Search for a organisation"
          prefix={<SearchOutlined />}
        />
        <Menu mode="horizontal" className="organisation-header-icons-container">
        <Link to='/Organisations'>
          <Menu.Item key="gridContent">
          <AppstoreFilled className="organisation-list-icon" />
          </Menu.Item>
          </Link>
          <Menu.Item key="listContent">
          <UnorderedListOutlined className="organisation-app-filled-icon" />
          </Menu.Item>
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
        <Link to={`${url}/AddOrganisationsView`}>
        <Button type="primary">Add Organization</Button>
        </Link>
      </div>
    </div>
  );
};
