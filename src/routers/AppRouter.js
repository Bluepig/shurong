import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Sidebar from '../components/Sidebar'
import FormatPage from '../components/FormatAll/FormatPage'
import MonitorPage from '../components/MonitorAll/MonitorPage'
import DetailPage from '../components/DetailAll/DetailPage'
import ShopPage from '../components/ShopAll/ShopPage'
import AbnormalPage from '../components/AbnormalAll/AbnormalPage'
import ProjectDetailPage from '../components/ProjectDetailAll/ProjectDetailPage'
import MultiProjectPage from '../components/MultiProjectAll/MultiProjectPage'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
const routes = (
  <BrowserRouter>
    <div className="wrapper">
      <HeaderBar />
      <Sidebar />
      <Switch>
        <Route path="/format" component={FormatPage} />
        <Route path="/monitor" component={MonitorPage} />
        <Route path="/detail" component={ProjectDetailPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/abnormal" component={AbnormalPage} />
        <Route path="/multi" component={MultiProjectPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes
