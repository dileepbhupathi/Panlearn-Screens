import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
// import { OrganisationsDummyData } from '../../Constants/OrganisationsDummyData/OrganisationsDummyData'
import { OrgPagination } from '../OrganisationPagination/Pagination'
import { useHistory } from 'react-router-dom'
import './OrganisationListView.scss'

export const OrganisationsListView = ({columns}) => {

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
