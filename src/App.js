import React, { useState } from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { OrganisationGridView } from "./view/OrganisationsGridViewScreen/OrganisationGridView";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch, useRouteMatch } from "react-router-dom";
import { OrganisationsListViewScreen } from "./view/OrganisationsListViewScreen/OrganisationsListViewScreen";
// import {OrganisationsGridHeader} from './components/OrganisationsHeaders/OrganisationsGridHeader'
// import {OrganisationsListHeader} from './components/OrganisationsHeaders/OrganisationsListHeader'
import {AddOrganisationsView} from './view/AddOrganisationsViewScreen/AddOrganisationsview'
import {EditOrganisationView} from './view/EditOrganisationViewScreen/EditOrganisationViewScreen'


function App() {

  let {path} = useRouteMatch();

  const [selectedCardData, setSelectedCardData] = useState();

  const selectedCard = (item) => {
    setSelectedCardData(item);
  }


  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <div className="organisations-grid-view-container">
            <Router>
              <Switch>
                <Route exact path="/Organisations" >
                  <OrganisationGridView selectedCard={selectedCard}/>
                </Route>
                <Route exact path="/OrganisationList" >
                  <OrganisationsListViewScreen selectedCard={selectedCard}/>
                </Route>
                <Route exact path={path} >
                  <AddOrganisationsView/>
                </Route>
                <Route  path={path}>
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
