import { Avatar, Card, List } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import { OrganisationsDummyData } from "../../Constants/OrganisationsDummyData/OrganisationsDummyData";
import { OrgPagination } from "../OrganisationPagination/Pagination";
import "./OrganisationGridContent.scss";
import PropTypes from 'prop-types';

export const OrganisationGridContent = ({selectedCard}) => {

  const {url} = useRouteMatch

    const [page, setpage]= useState(1)
    const [filterData, setFilterData]= useState()

    const pageSize = 9

    useEffect (() => {
      const pageNumber = (page - 1)*pageSize
        const filterArray = parsedUpdatedData.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
    },[page])

    let updatedData = localStorage.getItem("organization");
    let parsedUpdatedData = JSON.parse(updatedData);
    

  return (
    <div className="organisation-grid-content-container">
        <List
            itemLayout="horizontal"
            grid={{column : 3}}
            dataSource={filterData}
            renderItem={(item) => (
            <List.Item onClick={()=>selectedCard(item)}>
                <Link to={`${url}/EditOrganisation?id=${item.id}`}>
                <Card className="organisation-grid-content-card-container" >
                    {item.orgStatus===true ?<div className="success-status"></div>:<div className="failure-status"></div>}
                    
                <Meta
                    avatar={<Avatar size={65} src={item.logo} />}
                    title={item.orgName}
                    description={[
                        <div key={item.key}>
                            <p>{item.orgDomain}</p>
                            <p>{item.email}</p>
                        </div>
                    ]}
                />
                </Card>
                </Link>
            </List.Item>
            )}
        />  
        <OrgPagination setpage={setpage} pageSize = {pageSize}/>          
    </div>
  );
};

OrganisationGridContent.propTypes = {
  selectedCard: PropTypes.func,
}