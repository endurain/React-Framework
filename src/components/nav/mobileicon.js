import React from 'react';

const MobileIcon = () => (

  <div className="mobileicon">
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div className="spinner diagonal part-1"></div>
      <div className="spinner horizontal"></div>
      <div className="spinner diagonal part-2"></div>
    </label>
  </div>
)

export default MobileIcon
