import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/sidebar.scss'
import multiProjectsLogo from '../assets/icons/multi-projects-icon.svg'
import singleProjectLogo from '../assets/icons/single-project-icon.svg'
import projectMonitoringLogo from '../assets/icons/project-monitoring-logo.svg'
import projectDetailsLogo from '../assets/icons/project-details-logo.svg'
import formatDetailsIcon from '../assets/icons/format-details-icon.svg'
import shopDetailsIcon from '../assets/icons/shop-details-icon.svg'
import abnormalListIcon from '../assets/icons/abnormal-list-icon.svg'
import parkingLotIcon from '../assets/icons/parking-lot-icon.svg'
import systemSettingIcon from '../assets/icons/system-setting-icon.svg'
import dataImportIcon from '../assets/icons/data-import-icon.svg'
import loggingOutIcon from '../assets/icons/logging-out-icon.svg'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <nav className="sidebar">
        <h1 className="sidebar-first-header">商业地产运营监控</h1>

        <ul className="page-type">
          <li>
            <img src={multiProjectsLogo} alt="multi-projects-icon" />
            <a href="/">多项目资产管理</a>
          </li>
          <li>
            <img src={singleProjectLogo} alt="single-projects-icon" />
            <a href="/">单项目资产管理</a>
          </li>
          <li>
            <img src={projectMonitoringLogo} alt="project-monitoring-icon" />
            <NavLink to="/monitor" activeClassName="is-active">
              项目监测
            </NavLink>
          </li>
          <li>
            <img src={projectDetailsLogo} alt="project-details-icon" />
            <NavLink to="/detail" activeClassName="is-active">
              项目详情
            </NavLink>
          </li>
          <li>
            <img src={formatDetailsIcon} alt="format-details-icon" />
            <NavLink to="/format" activeClassName="is-active">
              业态详情
            </NavLink>
          </li>
          <li>
            <img src={shopDetailsIcon} alt="shop-details-icon" />
            <NavLink to="/shop" activeClassName="is-active">
              店铺详情
            </NavLink>
          </li>
          <li>
            <img src={abnormalListIcon} alt="abnormal-list-icon" />
            <a href="/">异常列表</a>
          </li>
          <li>
            <img src={parkingLotIcon} alt="parking-lot-icon" />
            <a href="/">停车场管理</a>
          </li>
        </ul>

        <ul className="page-setting">
          <li>
            <img src={systemSettingIcon} alt="system-setting-icon" />
            <a href="/">系统设置</a>
          </li>
          <li>
            <img src={dataImportIcon} alt="data-import-icon" />
            <a href="/">数据录入</a>
          </li>
          <li>
            <img src={loggingOutIcon} alt="logging-out-icon" />
            <a href="/">登出当前帐号</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar
