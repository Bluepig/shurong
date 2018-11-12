import React from 'react';
import '../styles/sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='sidebar'>
        <h1 className='sidebar-first-header'>商业地产运营监控</h1>
        <h2 className='sidebar-second-header'>长宁八八中心</h2>

        <ul>
          <li>
            <a href='#'>多项目资产管理</a>
          </li>
          <li>
            <a href='#'>单项目资产管理</a>
          </li>
          <li>
            <a href='#'>项目监测</a>
          </li>
          <li>
            <a href='#'>项目详情</a>
          </li>
          <li>
            <a href='#'>业态详情</a>
          </li>
          <li>
            <a href='#'>店铺详情</a>
          </li>
          <li>
            <a href='#'>异常列表</a>
          </li>
          <li>
            <a href='#'>停车场管理</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href='#'>系统设置</a>
          </li>
          <li>
            <a href='#'>数据录入</a>
          </li>
          <li>
            <a href='#'>登出当前帐号</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
