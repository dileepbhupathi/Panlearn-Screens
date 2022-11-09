import React from 'react'
import { OrganisationsListView } from '../../components/OrganisationsListViewContent/OrganisationsListView'

export const OrganisationsListViewScreen = () => {
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
  return (
        <OrganisationsListView columns={columns}/>
  )
}
