import { Avatar, Card, List } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { OrganisationsDummyData } from "../../Constants/OrganisationsDummyData/OrganisationsDummyData";
import { OrgPagination } from "../OrganisationPagination/Pagination";
import "./OrganisationGridContent.scss";

export const OrganisationGridContent = () => {

    const [page, setpage]= useState(1)
    const [filterData, setFilterData]= useState()

    const pageSize = 9

    useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      console.log(pageNumber)
        const filterArray = parsedUpdatedData.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
    },[page])

    let updatedData = localStorage.getItem("organization");
    let parsedUpdatedData = JSON.parse(updatedData);

    const cardData=[];

    const display = (item,i) => {

        let getIndex = parsedUpdatedData.findIndex(function (eachCard) {
          let eachCardId = "card" + eachCard.uniqueNumber;
          console.log("eachcardId", eachCardId);
          console.log("myCardId", parsedUpdatedData[i].myId);
          if (eachCardId === parsedUpdatedData[i].myId) {
            return true;
          } else {
            return false;
          }
        });

      // output.logo=imageUrl;
      const obj = {
        getIndex : getIndex,
        logo: item.logo,
      orgName: item.orgName,
      service: item.service,
      email: item.email,
      address: item.address,
      state: item.state,
      uniqueId: item.orgName + "1",
      phoneNumber : item.phoneNumber,
      city : item.city,
      admin : item.admin,
      orgDomain : item.orgDomain
      };
      cardData.push(obj);
      localStorage.setItem("item", JSON.stringify(cardData));
      console.log(cardData);
    };

  return (
    <div className="organisation-grid-content-container">
        <List
            itemLayout="horizontal"
            grid={{column : 3}}
            dataSource={filterData}
            renderItem={(item,i) => (
            <List.Item>
                <Link to='/EditOrganisationView'>
                <Card className="organisation-grid-content-card-container" onClick={()=>{display(item,i)}}>
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
