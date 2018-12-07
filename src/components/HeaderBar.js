import React from 'react';
import '../styles/headerbar.scss';
import projectDetailsLogo from '../assets/icons/project-details-logo.svg';
import headIconLayer from '../assets/icons/head-icon-layer.svg';
import headIcon from '../assets/icons/head-icon.svg'
const HeaderBar = () => (
  <header className='headerbar'>
    <div className='header-container'>
      <span className='headerbar-header'>长宁八八中心</span>
      <img
        src={projectDetailsLogo}
        alt='project details icon'
        className='avatar-profile-icon'
      />
      <div className="header-icon-container">
        <img src={headIcon} className="header-icon" />
      </div>
    </div>
  </header>
);

export default HeaderBar;
