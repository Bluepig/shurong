import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Sidebar from '../components/Sidebar'
import FormatPage from '../components/FormatAll/FormatPage'
import MonitorPage from '../components/MonitorAll/MonitorPage'
import DetailPage from '../components/DetailAll/DetailPage'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
const routes = (
  <BrowserRouter>
    <div className="wrapper">
      <HeaderBar />
      <Sidebar />
      <Switch>
        <Route path="/format" component={FormatPage} />
        <Route path="/monitor" component={MonitorPage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes
