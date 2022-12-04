import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlatformDropdown = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (

    <ul id='addFriend-platformDropdown' class='dropdown-content'>

        <li><a href="#!">Supported Platform 1</a></li>
        <li class="divider" tabindex="-1"></li>

        <li><a href="#!">Supported Platform 2</a></li>
        <li class="divider" tabindex="-1"></li>
        
    </ul>

  );

};

export default PlatformDropdown;
