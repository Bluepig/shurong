import React from 'react';
import '../styles/sidebar.scss';
import multiProjectsLogo from '../assets/icons/multi-projects-icon.svg';
import singleProjectLogo from '../assets/icons/single-project-icon.svg';
import projectMonitoringLogo from '../assets/icons/project-monitoring-logo.svg';
import projectDetailsLogo from '../assets/icons/project-details-logo.svg';
import formatDetailsIcon from '../assets/icons/format-details-icon.svg';
import shopDetailsIcon from '../assets/icons/shop-details-icon.svg';
import abnormalListIcon from '../assets/icons/abnormal-list-icon.svg';
import parkingLotIcon from '../assets/icons/parking-lot-icon.svg';
import systemSettingIcon from '../assets/icons/system-setting-icon.svg';
import dataImportIcon from '../assets/icons/data-import-icon.svg';
import loggingOutIcon from '../assets/icons/logging-out-icon.svg';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className='sidebar'>
        <h1 className='sidebar-first-header'>商业地产运营监控</h1>

        <ul className='page-type'>
          <li>
            <img src={multiProjectsLogo} />
            <a href='#'>多项目资产管理</a>
          </li>
          <li>
            <img src={singleProjectLogo} />
            <a href='#'>单项目资产管理</a>
          </li>
          <li>
            <img src={projectMonitoringLogo} />
            <a href='#'>项目监测</a>
          </li>
          <li>
            <img src={projectDetailsLogo} />
            <a href='#'>项目详情</a>
          </li>
          <li>
            <img src={formatDetailsIcon} />
            <a href='#'>业态详情</a>
          </li>
          <li>
            <img src={shopDetailsIcon} />
            <a href='#'>店铺详情</a>
          </li>
          <li>
            <img src={abnormalListIcon} />
            <a href='#'>异常列表</a>
          </li>
          <li>
            <img src={parkingLotIcon} />
            <a href='#'>停车场管理</a>
          </li>
        </ul>

        <ul className='page-setting'>
          <li>
            <img src={systemSettingIcon} />
            <a href='#'>系统设置</a>
          </li>
          <li>
            <img src={dataImportIcon} />
            <a href='#'>数据录入</a>
          </li>
          <li>
            <img src={loggingOutIcon} />
            <a href='#'>登出当前帐号</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
