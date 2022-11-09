import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
// import { OrganisationsDummyData } from '../../Constants/OrganisationsDummyData/OrganisationsDummyData'
import { OrgPagination } from '../OrganisationPagination/Pagination'
import { useHistory } from 'react-router-dom'
import './OrganisationListView.scss'

export const OrganisationsListView = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'orgName',
      render: (text, record) => {
        return (
          <div className="list-view-container">
            <img
              alt="img-logo"
              className="list-view-logo"
              src={record.logo}
            />
            {/*<Avatar src={record.productimage}/> */}
            <p className="list-view-name">{record.orgName}</p>
          </div>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Domain',
      dataIndex: 'orgDomain',
    },
    { 
        title : "Status",
        dataIndex: 'orgStatus',
        render : (data) => (
          <div style={{height : "12px", width : "12px", background : data? "green" : "red", borderRadius : "50%"}}></div>
          )
    }
  ];

    const history = useHistory()

    const [page, setpage]= useState(1)
    const [filterData, setFilterData]= useState()

    const pageSize = 7

    useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      console.log(pageNumber)
        const filterArray = parsedUpdateData.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
    },[page])

    let updatedData = localStorage.getItem("organization");
    let parsedUpdateData = JSON.parse(updatedData);

  return (
    <div className="organisation-list-content-container">
        <Table  size="large"
        className="org-table"
        columns={columns}
        dataSource={filterData}
        pagination={false}
        onRow={() => ({
          onClick: () => 
              history.push('/EditOrganisationView')
      })}
        />
        <OrgPagination setpage={setpage} pageSize = {pageSize}/>          
    </div>
  )
}
