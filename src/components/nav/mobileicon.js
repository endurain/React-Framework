import React from 'react';

const MobileIcon = () => (

  <div className="mobileicon">
    <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
    <label htmlFor="openSidebarMenu" class="sidebarIconToggle">
      <div className="spinner diagonal part-1"></div>
      <div className="spinner horizontal"></div>
      <div className="spinner diagonal part-2"></div>
    </label>
  </div>
)

export default MobileIcon
