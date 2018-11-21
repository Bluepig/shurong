import React from 'react';
import '../styles/headerbar.scss';

import projectDetailsLogo from '../assets/icons/project-details-logo.svg';
const HeaderBar = () => (
  <header className='headerbar'>
    <div className='header-container'>
      <span className='headerbar-header'>长宁八八中心</span>
      <img
        src={projectDetailsLogo}
        alt='project details icon'
        className='avatar-profile-icon'
      />
    </div>
  </header>
);

export default HeaderBar;
