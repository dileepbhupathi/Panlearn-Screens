import React from 'react'
import { OrganisationsListView } from '../../components/OrganisationsListViewContent/OrganisationsListView'
import {OrganisationsListHeader} from '../../components/OrganisationsHeaders/OrganisationsListHeader'

export const OrganisationsListViewScreen = () => {
    
  return (
      <>
      <OrganisationsListHeader/>
        <OrganisationsListView/>
      </>
  )
}
