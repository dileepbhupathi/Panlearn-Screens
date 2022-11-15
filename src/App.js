import React, { useState } from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { OrganisationGridView } from "./view/OrganisationsGridViewScreen/OrganisationGridView";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { OrganisationsListViewScreen } from "./view/OrganisationsListViewScreen/OrganisationsListViewScreen";
// import {OrganisationsGridHeader} from './components/OrganisationsHeaders/OrganisationsGridHeader'
// import {OrganisationsListHeader} from './components/OrganisationsHeaders/OrganisationsListHeader'
import {AddOrganisationsView} from './view/AddOrganisationsViewScreen/AddOrganisationsview'
import {EditOrganisationView} from './view/EditOrganisationViewScreen/EditOrganisationViewScreen'

function App() {

  const [selectedCardData, setSelectedCardData] = useState()

  const selectedCard = (item) => {
    setSelectedCardData(item)
    console.log("selectedCardData", item)
  }
  console.log('selected-Card-Data', selectedCardData)


  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <div className="organisations-grid-view-container">
            <Router>
              {/* <Route exact path="/" component={OrganisationsGridHeader} />/ */}
              {/* <Route exact path="/OrganisationListView" component={OrganisationsListHeader} /> */}
              <Switch>
                <Route exact path="/" >
                  <OrganisationGridView selectedCard={selectedCard}/>
                </Route>
                <Route exact path="/OrganisationListView" component={OrganisationsListViewScreen} />
                <Route exact path='/AddOrganisationsView' >
                  <AddOrganisationsView/>
                </Route>
                <Route exact path='/EditOrganisation'>
                  <EditOrganisationView  selectedCardData = {selectedCardData}/>
                </Route>
              </Switch>
            </Router>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
